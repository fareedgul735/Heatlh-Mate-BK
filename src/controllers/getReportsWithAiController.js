import Reports from "../models/Report.js";

const getReportsInfo = async (req, res) => {
  try {
    const userId = req.user?._id;
    if (!userId) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }

    const reports = await Reports.find({ userId }).sort({ date: 1 });

    const chartData = reports.map((r) => ({
      date: new Date(r.date).toLocaleDateString(),
      Systolic: r.systolic || 0,
      Diastolic: r.diastolic || 0,
      Sugar: r.sugar || 0,
    }));

    const tableData = reports.map((r) => ({
      key: r._id,
      title: r.testName || "N/A",
      lab: r.hospital,
      doctor: r.doctor,
      date: new Date(r.date).toLocaleDateString(),
      price: `Rs ${r.price}`,
      flag: r.systolic > 140 || r.sugar > 140 ? "Attention" : "Normal",
      aiResponse: r.aiResponse || null, 
    }));

    res.json({
      success: true,
      chartData,
      tableData,
    });
  } catch (err) {
    console.error("Error fetching reports:", err);
    res.status(500).json({ success: false, message: "Failed to load reports" });
  }
};

export default getReportsInfo;
