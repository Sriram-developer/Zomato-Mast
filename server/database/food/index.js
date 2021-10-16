import mongoose from "mongoose";

const FoodSchema = new mongoose.Schema(
    {
    name: String,
    descript:  String,
    isVeg: Boolean,
    isNonVeg: Boolean,
    isContainEgg: Boolean, 
    category:  String, 
    restaurant: {
        type: mongoose.Types.ObjectId,
        ref: "Restaurants",
        
    },
    photos: {
        type: mongoose.Types.ObjectId,
        ref: "Images",
    },
    price: { type: Number, default: 150, required: true },
    addOns: [
    {
        type: mongoose.Types.ObjectId,
        ref: "Foods",
    },
],
   
    reviews: {
        type: mongoose.Types.ObjectId,
        ref: "Reviews",
    },
},
{
    timestamps: true,
}
);

export const FoodModel = mongoose.model("Foods", FoodSchema);