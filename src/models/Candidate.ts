import mongoose, { Document, Schema, Types} from 'mongoose';

interface ICandidate extends Document {
    name: string,
    position: string,
    party: string,
    election: Types.ObjectId,
}
    
// Define the schema
const CandidateSchema: Schema<ICandidate> = new Schema<ICandidate>({
    name: { type: String, required: true},
    position: { type: String, required: true },
    party: { type: String, required: true },
    election: { type: Schema.Types.ObjectId, ref: 'election', required: true }
    
}, { timestamps: true});
    
// Create the model
const Candidate = mongoose.model<ICandidate>('candidate', CandidateSchema);

export default Candidate;
