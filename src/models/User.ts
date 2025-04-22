import mongoose, { Document, Schema } from 'mongoose';
import bcrypt from 'bcrypt';

export interface IUser extends Document {
    studentID: string;
    password: string;
    firstname: string;
    lastname: string;
    course: string;
    section: string;
    email: string;
    college: string,
    approved: Boolean;
}
    
// Define the schema
const UserSchema: Schema<IUser> = new Schema<IUser>({
    studentID: { type: String, required: true},
    password: { type: String, required: true },
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    course: { type: String, required: true },
    section: { type: String, required: true },
    college: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    approved: { type: Boolean, required: true, default: false },
}, { timestamps: true});
    
UserSchema.pre('save', async function(next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    console.log(this)
    next();
});

// Create the model
const User = mongoose.model<IUser>('user', UserSchema);
export default User;
  