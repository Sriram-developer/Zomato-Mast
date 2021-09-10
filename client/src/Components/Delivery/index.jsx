import React, { useState } from "react";

// Components
import DeliveryCarousel from "./DeliveryCarousel";
import Brand from "./Brand";
import RestaurantCard from "../RestaurantCard";

const Delivery = () => {
    const [restaurantList, setRestaurantList] = useState([
        {
            _id: "123456",
            photos: [
             "https://b.zmtcdn.com/data/pictures/7/55397/fb83f44f6bbbdd08809b95f8fb6bdb98.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
            ],
            name:"Empire Restaurant",
            cuisine: ["Street Food", "Beverages","Tea"],
            averageCost: 100,
            ispro: true,
            isoff: 80,
            durationOfdelivery: 47,
            restaurantReviewValue: 4.1,
        },
        {
            _id: "123456-2",
            photos: [
             "https://b.zmtcdn.com/data/pictures/2/18718102/83ead0802e9477bab63cce791fe0e778.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
            ],
            name:"Sardarji Londonwaley",
            cuisine: ["koramangalam", "Beverages","bangalore"],
            averageCost: 100,
            ispro: true,
            isoff: 80,
            durationOfdelivery: 47,
            restaurantReviewValue: 4.1,
        },
        {
            _id: "123456-3",
            photos: [
             "https://b.zmtcdn.com/data/pictures/chains/4/50574/9410759d611db9c62c3acc23c1f27e06_o2_featured_v2.jpg",
            ],
            name:"KFC",
            cuisine: ["Burger", "Beverages","Sandwich"],
            averageCost: 100,
            ispro: true,
            isoff: 80,
            durationOfdelivery: 47,
            restaurantReviewValue: 4.1,
        },
    ]);
    return (
        <>
            <DeliveryCarousel/>
            {/*<Brand/>*/}
            <div className="flex justify-between flex-wrap">
            {
                restaurantList.map((restaurant) =>(
                    <RestaurantCard { ...restaurant } key={ restaurant._id }/>
                ))
            }
           </div>
        </>
    );
};

export default Delivery;
