import React from "react";
import Slider from "react-slick";

// Components
import DeliveryCategory from "./DeliveryCategory";
import { NextArrow,PrevArrow,prevArrow } from "../CarousalArrow";

const DeliveryCarousel = () => {

    const categories = [{
      image: "https://b.zmtcdn.com/data/pictures/2/18848972/9785eaed12b7afd7bdfee0dfca12c1f1_o2_featured_v2.jpg?output-format=webp",
      title: "biriyani",
    },
    {
      image: "https://b.zmtcdn.com/data/pictures/chains/2/19715682/ba9dcee737792b07f7a9cec31709f60b_o2_featured_v2.jpg?output-format=webp",
      title: "bowlrice",
    },
    {
      image: "https://b.zmtcdn.com/data/pictures/chains/4/50574/9410759d611db9c62c3acc23c1f27e06_o2_featured_v2.jpg?output-format=webp",
      title: "KFC",
    },
    {
      image: "https://b.zmtcdn.com/data/pictures/9/51239/1e5a191e8ee577af3e193ce564f7334e_o2_featured_v2.jpg",
      title: "pulov",
    },
    {
      image: "https://b.zmtcdn.com/data/pictures/8/56488/149772ba295d6cdcfaf74acc91db5b55_o2_featured_v2.jpg",
      title: "Chappati",
    },
    {
      image: "https://b.zmtcdn.com/data/pictures/3/50643/254714405916cbd9b6b12ce946660843_o2_featured_v2.jpg",
      title: "Dum biriyani",
    },
    {
      image: "https://b.zmtcdn.com/data/pictures/3/18681043/58539d5d53e10edafc829eb1c74a2f49_o2_featured_v2.jpg",
      title: "Dosaa",
    },
    {
      image: "https://b.zmtcdn.com/data/pictures/chains/4/50674/924d6db7dee0bb80abc31170174d0df6_o2_featured_v2.jpg?output-format=webp",
      title: "Mc Donald",
    },
    {
      image: "https://b.zmtcdn.com/data/pictures/1/61381/9289a6d107f19beaccbd56ffc655af9c_o2_featured_v2.jpg",
      title: "poori",
    },
  
  
  ];
  const settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow:<NextArrow/>,
    prevArrow:<PrevArrow/>,
  };
    return (
        <>
        <h1 className="text-xl mb-4 font-semibold">Inspiration for your first order</h1>
        <div className="  lg:hidden flex gap-3 lg:gap-0 flex-wrap justify-between">

          {
            categories.map((food) =>( 
            <DeliveryCategory { ...food }/>
           ))
          }
        </div>

        <div className="hidden lg:block">
          <Slider { ...settings }>
          {
            categories.map((food) =>( 
            <DeliveryCategory { ...food }/>
           ))
          }
          </Slider>
        </div>
            
        </>
    );
};

export default DeliveryCarousel;
