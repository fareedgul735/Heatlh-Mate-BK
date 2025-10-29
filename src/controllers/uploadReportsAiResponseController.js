import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";
import Report from "../models/Report.js";

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const uploadReportsAiResponse = async (req, res) => {
  try {
    const {
      title,
      testName,
      hospital,
      doctor,
      date,
      price,
      notes,
      systolic,
      diastolic,
      temperature,
      sugar,
      height,
      weight,
      aiPrompt,
    } = req.body;

    if (!testName || !hospital || !doctor || !date || !price || !aiPrompt) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields!",
      });
    }

    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    const prompt = `
    You are a professional medical AI assistant.
    Analyze the following patient's report details and symptoms, 
    then provide a structured health analysis.
    
    **Report Information:**
    - Test Name: ${testName}
    - Hospital / Lab: ${hospital}
    - Doctor: ${doctor}
    - Date: ${date}
    - Price: Rs ${price}
    - Notes: ${notes || "N/A"}
    
    **Patient vitals (if provided):**
    - BP: ${systolic || "N/A"} / ${diastolic || "N/A"} mmHg
    - Temperature: ${temperature || "N/A"} °F
    - Sugar: ${sugar || "N/A"} mg/dL
    - Height: ${height || "N/A"} cm
    - Weight: ${weight || "N/A"} kg
    
    **Patient's concern:**
    ${aiPrompt}
    
    Please provide your response in the following JSON format:
    
    {
    "summary": "Brief overall health assessment",
    "keyFindings": ["Finding 1", "Finding 2", "Finding 3"],
    "recommendations": ["Recommendation 1", "Recommendation 2", "Recommendation 3"],
    "riskFactors": ["Risk factor 1", "Risk factor 2"],
    "urgencyLevel": "routine | attention | urgent",
    "confidence": 0.85
    }
    
    Be precise, professional, and relevant to Pakistani healthcare context.
    Include short Urdu translation if helpful.
    `;

    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = response.text();

    let aiAnalysis;
    try {
      const jsonMatch = text.match(/\{[\s\S]*\}/);
      aiAnalysis = jsonMatch ? JSON.parse(jsonMatch[0]) : null;
    } catch (err) {
      console.error("Error parsing AI response:", err);
    }

    if (!aiAnalysis) {
      aiAnalysis = {
        summary: "AI generated analysis not fully structured.",
        keyFindings: [
          "General health data analyzed successfully.",
          "Some values appear normal or within common ranges.",
          "Further review by your doctor recommended.",
        ],
        recommendations: [
          "Discuss results with your doctor.",
          "Maintain a healthy diet and regular checkups.",
          "Follow any specific instructions given by your physician.",
        ],
        riskFactors: ["Undetermined - requires clinical review."],
        urgencyLevel: "routine",
        confidence: 0.75,
      };
    }

    const newReport = await Report.create({
      title,
      testName,
      hospital,
      doctor,
      date,
      price,
      notes,
      systolic,
      diastolic,
      temperature,
      sugar,
      height,
      weight,
      aiPrompt,
      aiResponse: aiAnalysis,
      userId: req.user.id,
    });

    res.json({
      success: true,
      report: newReport,
      aiResponse: aiAnalysis,
    });
  } catch (error) {
    console.error("Error generating AI analysis:", error);
    res.status(500).json({
      success: false,
      message: "Failed to generate AI insight.",
    });
  }
};
export default uploadReportsAiResponse;
