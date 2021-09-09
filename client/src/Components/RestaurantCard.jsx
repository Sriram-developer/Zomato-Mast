import React from "react";
import { AiTwotoneStar } from "react-icons/ai";

const RestaurantCard = () => {
    return (
        <>
          <div className="bg-white p-2 w-full mb-20 rounded-2xl transition duration-700 ease-in-out hover:shadow-lg md:w-1/2 lg:w-1/3">
              <div className="w-full h-56 lg:h-64 relative">
                  <div className="absolute w-full bottom-4 flex items-end justify-between">
                  <div className="flex flex-col gap-2 items-start">
                  <span  className="bg-zomato-400 text-white px-2 py-1 rounded text-sm">pro extra 10% off</span>
                  <span className="bg-blue-600 text-white px-2 py-1 rounded text-sm">₹80 OFF</span>
                  </div>
                  <span className="bg-white bg-opacity-75 p-1 rounded mr-3">42 min</span>
                  </div>
                  <img src="https://b.zmtcdn.com/data/pictures/chains/2/18649542/c2d3bdda7a4a5fd097ceb37f3e0e5427_o2_featured_v2.jpg" alt="food"
                   className="w-full h-full rounded-2xl" />
              </div>
              <div className="my-2 flex flex-col gap-2">
                  <div className="flex items-center justify-between"> 
                      <h4 className="text-xl font-medium">Havmor Ice Cream</h4>
                      <span className="bg-green-800 text-white text-sm p-1 rounded flex items-center">4.1 <AiTwotoneStar/></span>
                  </div>
                  <div className="flex items-center justify-between text-gray-500">
                      <p>Desert IceCream, Beverage ,Banglore. </p>
                      <p>₹350</p>
                  </div>
              </div>
          </div>  
        </>
    );
};

export default RestaurantCard;
