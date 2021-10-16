import mongoose from "mongoose";

const RestaurantSchema = new mongoose.Schema(
 {
    name: String,
    city: String,
    address: String,
    mapLocation: String,
    cuisine: [String],
    restaurantTimings: String,
    contactNumber: Number,
    website: String,
    popularDishes: [String],
    averageCost: Number,
    amenties: [String],
    ispro: Boolean,
    isoff: Number,
    durationOfdelivery: Number,
    menuImages: {
        type: mongoose.Types.ObjectId,
        ref: "Images",
    },
    menu: {
        type: mongoose.Types.ObjectId,
        ref: "Menus",
    },
    reviews: [{
        type: mongoose.Types.ObjectId,
        ref: "Reviews",
    }],
    photos: {
        type: mongoose.Types.ObjectId,
        ref: "Images",
    },
},
{
    timestamps: true,
}
);

export const RestaurantModel = mongoose.model("Restaurants", RestaurantSchema);