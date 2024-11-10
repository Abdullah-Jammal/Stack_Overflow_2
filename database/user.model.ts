import { model, models, Schema } from "mongoose";

export interface IUser {
  name: string;
  username: string;
  email: string;
  bio?: string;
  image: string;
  location?: string;
  protfolio?: string;
  reputation?: number;
}

const UserSchema = new Schema(
  {
    name: { type: String, required: true },
    username: { type: Schema, required: true },
    email: { type: String, required: true, unique: true },
    bio: { type: String },
    image: { type: String, required: true },
    location: { type: String },
    protfolio: { type: String },
    reputation: { type: Number, default: 0 },
  },
  { timestamps: true } // Make sure when the user was created
);

const User = models?.user || model<IUser>("User", UserSchema);

export default User;
