import React from "react";
import { AiOutlineCamera } from "react-icons/ai";

const ImageGrid = (props) => {
  return (
    <>
      <div className="w-full h-60 md:hidden">
        <img
          src="https://zomato-project-123.s3.ap-south-1.amazonaws.com/briyani.jpg"
          alt="restuarant image"
          className="w-full h-full object-cover rounded-lg "
        />
      </div>
      <div className="hidden w-full h-96 md:flex gap-1">
        <div className="w-full h-full overflow-hidden">
          <img
            src="https://zomato-project-123.s3.ap-south-1.amazonaws.com/briyani.jpg"
            alt="restuarant image"
            className="w-full h-full object-cover rounded-lg transform transition duration-700 hover:scale-110"
          />
        </div>
        <div className="w-1/4  h-full flex flex-col gap-1 overflow-hidden">
          <img
            src="https://media.istockphoto.com/photos/chicken-tikka-biryani-made-of-basmati-rice-cooked-with-masala-spices-picture-id1292436403?b=1&k=20&m=1292436403&s=170667a&w=0&h=h-uGAfCfqbnMsnRq_DcCVB_Jcq1I2by24vBMH0xJgYo="
            alt="restuarant image"
            className="w-full h-2/4 object-cover rounded-lg  transform transition duration-700 hover:scale-110"
          />
          <img
            src="https://media.istockphoto.com/photos/bacon-burger-picture-id520215281?b=1&k=20&m=520215281&s=170667a&w=0&h=zeCb3SA1h2PJhk21K2jFR8QttbqMBq4L-8uGkQLH7OQ="
            alt="restuarant image"
            className="w-full h-2/4 object-cover rounded-lg  transform transition duration-700 hover:scale-110"
          />
        </div>
        <div className="w-1/4 h-full flex flex-col gap-1 overflow-hidden">
          <div className="w-full h-2/4 relative ">
            <img
              src="https://media.istockphoto.com/photos/indian-pulav-or-vegetables-rice-or-veg-biryani-orange-background-picture-id495201462?b=1&k=20&m=495201462&s=170667a&w=0&h=d-F-A6t1sdPqER5Z_FCJrcxhrF8Hffm60gmJ_8YuS0Y="
              alt="restuarant image"
              className="w-full h-full object-cover rounded-lg "
            />
            <div className="absolute inset-0 bg-opacity-40 bg-black w-full h-full rounded-lg " />
            <h4 className="absolute inset-y-2/4	z-20 w-full h-full text-center text-white font-semibold">
              View Gallery
            </h4>
          </div>
          <div className="w-full h-2/4 relative ">
            <img
              src="https://media.istockphoto.com/photos/mojito-with-white-rum-lime-mint-and-crushed-ice-picture-id184333471?b=1&k=20&m=184333471&s=170667a&w=0&h=7rMBPyQxLbbcDAH63_vF_tb6zX2hweyQk71sUpPtnXI="
              alt="restuarant image"
              className="w-full h-full object-cover rounded-lg "
            />
            <div className="absolute inset-0 bg-opacity-90 bg-gray-400 w-full h-full rounded-lg " />
            <div className="absolute flex flex-col items-center inset-y-1/4 z-20 w-full h-full text-center text-white font-semibold">
              <div className="bg-black p-3 rounded-full bg-opacity-50">
                <AiOutlineCamera />
              </div>
              <h4 className="">View Gallery</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageGrid;