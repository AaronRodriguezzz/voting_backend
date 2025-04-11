import mongoose, { Document, Schema } from 'mongoose';

interface IVote extends Document {
    user: Schema.Types.ObjectId,
    candidates: [Schema.Types.ObjectId],
    createdAt: Date
}
    
// Define the schema
const VoteSchema: Schema<IVote> = new Schema<IVote>({
    user: { type: Schema.Types.ObjectId, ref: 'user', required: true },
    candidates: [
        { type: Schema.Types.ObjectId, ref: 'candidate', required: true }
    ]
}, { timestamps: true});
    
// Create the model
const Vote = mongoose.model<IVote>('vote', VoteSchema);

export default Vote;
