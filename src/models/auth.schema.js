import mongoose from "mongoose";

const authSchema = mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    userName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
  },
  { Timestamp: true }
);

const UserAuth = mongoose.model("auth", authSchema);

export default UserAuth;
