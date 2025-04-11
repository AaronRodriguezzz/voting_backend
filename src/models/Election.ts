import mongoose, { Document, Schema } from 'mongoose';

interface IElection extends Document {
    electionName: string,
    startDate: Date,
    endDate: Date,
    isPaused: Boolean
}
    
// Define the schema
const ElectionSchema: Schema<IElection> = new Schema<IElection>({
    electionName: { type: String, required: true},
    startDate: { type: Date },
    endDate: { type: Date },
    isPaused: { type: Boolean}
    
}, { timestamps: true});
    
// Create the model
const Election = mongoose.model<IElection>('election', ElectionSchema);

export default Election;
