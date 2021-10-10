import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { IoMdArrowDropright } from "react-icons/io";
import Slider from "react-slick";
import { useSelector, useDispatch } from "react-redux";
import ReactStars from "react-rating-stars-component";

// components
import MenuCollection from "../../Components/restaurant/MenuCollection";
import MenuSimilarRestaurantcard from "../../Components/restaurant/MenuSimilarRestaurantcard";
import { NextArrow, PrevArrow } from "../../Components/CarousalArrow";
import ReviewCard from "../../Components/restaurant/Reviews/reviewCard";
import Mapview from "../../Components/restaurant/Mapview";

// Redux actions
import { getImage } from "../../Redux/Reducer/Image/Image.action";
import { getReviews } from "../../Redux/Reducer/Reviews/review.action";

const Overview = () => {
  const [menuImage, setMenuImages] = useState({ images: [] });
  const [Reviews, setReviews] = useState([]);
  const { id } = useParams();

  const settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const reduxState = useSelector((globalStore) => globalStore.restaurant.selectedRestaurant.restaurant);
  
  const dispatch = useDispatch();
  useEffect(() => {
    if (reduxState) {
      dispatch(getImage(reduxState?.menuImages)).then((data) => { 
        const images = [];
        data.payload.image?.images?.map(({ location }) =>images?.push(location));
        setMenuImages(images);
      });

      dispatch(getReviews(reduxState?._id)).then((data) =>
      setReviews(data.payload.reviews));
    }
  }, []);

  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  const getLatLong = (mapAddress) => {
    return mapAddress?.split(",").map((item) => parseFloat(item));
  };

  return (
    <>
      <div className="flex flex-col md:flex-row relative">
        <div className="w-full md:w-8/12">
          <h2 className="font-semibold text-lg md:text-xl my-4">
            About this place
          </h2>
          <div className="flex justify-between items-center">
            <h4 className="text-lg font-medium">Menu</h4>
            <Link to={`/restaurant/${id}/menu`}>
              <span className="flex items-center gap-1 text-zomato-400">
                See all menu <IoMdArrowDropright />
              </span>
            </Link>
          </div>
          <div className="flex flex-wrap gap-3 my-4">
            <MenuCollection
              menuTitle="Menu"
              pages="3"
              image={ menuImage }
            />
          </div>
          <h4 className="text-lg font-medium my-4">Cuisines</h4>
          <div className="flex flex-wrap gap-2">
            {reduxState?.cuisine.map((data) => (
            <span className="border border-gray-600 text-blue-600 px-2 py-1 rounded-full">
              { data }
            </span>
            ))}
          </div>
          <div className="my-4">
            <h4 className="text-lg font-medium">Average Cost</h4>
            <h6>₹ { reduxState?.averageCost } for one order (approx.)</h6>
            <small className="text-gray-500">
              Exclusive of applicable taxes and charges, if any
            </small>
          </div>
          <div className="my-4">
            <h4 className="text-lg font-medium">Similar Restaurants</h4>
            <div>
              <Slider {...settings}>
                <MenuSimilarRestaurantcard
                  image="https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZnJpZWQlMjBjaGlja2VufGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  title="Fried Chicken"
                />
                <MenuSimilarRestaurantcard
                  image="https://media.istockphoto.com/photos/madras-butter-beef-traditional-slow-cook-indian-spicy-chili-lamb-picture-id601930442?b=1&k=20&m=601930442&s=170667a&w=0&h=SkhvG4cccKm7vjv_o-HSSfhybXX9v5xZGD63yLWOeec="
                  title="Mutton curry"
                />
                <MenuSimilarRestaurantcard
                  image="https://media.istockphoto.com/photos/lambhaneethis-a-traditional-dish-with-basmati-rice-closeup-in-a-pan-picture-id1292894074?b=1&k=20&m=1292894074&s=170667a&w=0&h=GBgt-Gm5QCyELq7iz7KMe3vYZxGZqXYNm7-WEtOqYlM="
                  title="Briyani"
                />
                <MenuSimilarRestaurantcard
                  image="https://media.istockphoto.com/photos/barbecued-salmon-fried-potatoes-and-vegetables-on-wooden-background-picture-id1214416414?b=1&k=20&m=1214416414&s=170667a&w=0&h=FZFYYlT2R5BsZK-7433EcdBGkEI43M-HIxnM-FmuEv8="
                  title="Fish curry"
                />
                <MenuSimilarRestaurantcard
                  image="https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  title="Burger"
                />
              </Slider>
            </div>
          </div>
          <div className="my-4">
            <h4 className="text-lg font-medium">
              Rate your delivery experience
            </h4>
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={24}
              activeColor="#ffd700"
            />
            { Reviews.map((reviewData) => ( <ReviewCard { ...reviewData }/>
            ))}
          </div>
          <div className="my-4 w-full md:hidden flex flex-col gap-4">
          <Mapview title={ reduxState?.name }
          phno={ `+91${ reduxState?.contactNumber }`}
          mapLocation={ getLatLong(reduxState?.mapLocation) }
          address={ reduxState?.address }/>
          </div>
          <div className="my-4 flex flex-col gap-4"></div>
        </div>
        <aside
          style={{ height: "fit-content" }}
          className="hidden md:flex md:w-4/12 sticky rounded-xl top-2 bg-white p-3 shadow-md flex flex-col gap-4"
        >
         <Mapview title={ reduxState?.name}
          phno={ `+91${ reduxState?.contactNumber }`}
          mapLocation={ getLatLong(reduxState?.mapLocation) }
          address={ reduxState?.address }/>
         </aside>
      </div>
    </>
  );
};

export default Overview;