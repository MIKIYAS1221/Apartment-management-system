import { Schema, model, Document } from "mongoose";
import { IUser } from "./User";
import { IReview } from "./review";

export interface IApartment extends Document {
  type:string;
  price: number;
  description: string;
  ratings: number;
  images: {
    public_id: string;
    url: string;
  }[];
  createdAt: Date;
  reviews: IReview["_id"][];
  available: boolean;
  occupants: IUser["_id"];
}

const ApartmentSchema: Schema = new Schema({
  type: {
    type: String,
    enum: ["1BHK", "2BHK", "3BHK", "4BHK"],
    required: true,
  },
  price: { 
    type: Number, 
    required: true 
  },
  description: { 
    type: String, 
    required: true 
  },
  ratings: { 
    type: Number, 
    required: true, 
    default: 0 
  },
  images: [
    {
      public_id: { 
        type: String, 
        required: true 
      },
      url: { 
        type: String, 
        required: true 
      },
    },
  ],
  createdAt: { 
    type: Date, 
    default: Date.now 
  },
  reviews: {
    type: [Schema.Types.ObjectId],
    ref: "Review",
    default: [],
  },
  available: { 
    type: Boolean, 
    default: true 
  },
  occupants: 
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
});

const Apartment = model<IApartment>("Apartment", ApartmentSchema);
export default Apartment;
