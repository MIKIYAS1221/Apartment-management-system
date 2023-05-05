import { Schema,Document,model } from "mongoose";
import { IApartment } from "./apartment";
import { IUser } from "./User";

// Define the interface for the Apartment Request model
export interface IMentainance extends Document {
    user: IUser['_id'];
    apartment: IApartment['_id'];
    status: string;
    createdAt: Date;
    description: string;
    type: string;
}

// Define the schema for the Apartment Request model
const MentainanceSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    apartment: {
        type: Schema.Types.ObjectId,
        ref: 'Apartment',
        required: true,
    },
    status: {
        type: String,
        enum: ['pending', 'accepted', 'rejected'],
        default: 'pending',
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    description: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        enum: ['electrical', 'plumbing', 'daamage','others'],
        required: true,
    },
});

// Create and export the Apartment Request model
const Mentainance = model<IMentainance>('Mentainance', MentainanceSchema);
export default Mentainance;
