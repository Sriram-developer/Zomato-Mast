import React from "react";
import { useParams } from "react-router-dom";

// Components
import Delivery from "./Delivery";
import DeliveryCarousel from "./Delivery/DeliveryCarousel";

const Master = () => {
    const { type }= useParams();
    return (
        <div className="my-5">
        { type === "delivery" && <Delivery/> }
        </div>
    );
}

export default Master
