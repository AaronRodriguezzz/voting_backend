import mongoose, { Document, Schema, Types } from 'mongoose';

interface IVote extends Document {
    user: Types.ObjectId,
    election: Types.ObjectId,
    candidates: Schema.Types.ObjectId[],
}
    
// Define the schema
const VoteSchema: Schema<IVote> = new Schema<IVote>({
    user: { type: Schema.Types.ObjectId, ref: 'user', required: true },
    election: { type: Schema.Types.ObjectId, ref: "election", required: true}, 
    candidates: {
        type: [ { type: Schema.Types.ObjectId, ref: 'candidate' } ],
        required: true
      }
}, { timestamps: true});
    
// Create the model
const Vote = mongoose.model<IVote>('vote', VoteSchema);

export default Vote;
