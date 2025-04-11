import mongoose, { Document, Schema } from 'mongoose';

interface IUser extends Document {
    studentID: string;
    firstname: string;
    lastname: string;
    course: string;
    section: string;
    email: string;
    college: string,
    approved: Boolean;
    createdAt: Date;
}
    
// Define the schema
const UserSchema: Schema<IUser> = new Schema<IUser>({
    studentID: { type: String, required: true},
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    course: { type: String, required: true },
    section: { type: String, required: true },
    college: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    approved: { type: Boolean, required: true },
    
}, { timestamps: true});
    
// Create the model
const User = mongoose.model<IUser>('user', UserSchema);
export default User;
  