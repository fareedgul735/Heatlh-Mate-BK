import UserAuth from "../models/auth.schema.js";
import { verifyTokenGetUser } from "../utils/jwt.js";

const getUserData = async (req, res) => {
  try {
    const { decoded, error } = verifyTokenGetUser(req, res);
    if (error) {
      return res.status(401).json({ msg: error });
    }

    const userId = decoded.id || decoded._id;

    const user = await UserAuth.findById(userId).select("userName");
    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }

    res.status(200).json({ userName: user.userName });
  } catch (err) {
    console.error("Error in getUserData:", err);
    res.status(500).json({ msg: "Server error", error: err.message });
  }
};

export default getUserData;
