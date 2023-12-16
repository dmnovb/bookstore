import mongoose from "mongoose";

export interface UserDocument extends mongoose.Document {
  email: string;
  authentication: {
    password: string;
    salt: string;
    sessionToken: string;
  };
}

const userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  authentication: {
    password: { type: String, required: true, select: false },
    salt: { type: String, select: false },
    sessionToken: { type: String, select: false },
  },
});

const User = mongoose.model<UserDocument>("User", userSchema);

export default User;
