import React, { useState } from "react";
import ImageViewer from 'react-simple-image-viewer';

// Components
import PhotoCollection from "../../Components/restaurant/PhotoCollection";

const Photos = () => {
    const [photos, setPhotos] = useState([
        "https://b.zmtcdn.com/data/pictures/chains/9/19738169/3a5f310491abd2119d661556d9dcbbaa.png",
        "https://b.zmtcdn.com/data/pictures/chains/9/19738169/b8495114b7c7b78e9a17ca14d15c916a.jpg",
        "https://b.zmtcdn.com/data/pictures/chains/9/19738169/87e1cf1369f924f9dbed44228944cfcd.jpg",

]);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [CurrentImg, setCurrentImg] = useState(0);
    const closeViewer = () => setIsMenuOpen(false);
    const openViewer = () => setIsMenuOpen(true);

    return (
        <>
        { isMenuOpen && (
        <ImageViewer
          src={ photos }
          currentIndex={ CurrentImg }
          disableScroll={ false }
          onClose={ closeViewer }
        />
      )}
        <div className="flex flex-wrap gap-2">
          {
              photos.map((photo) => (
              <PhotoCollection
              image={ photo } openViewer={ openViewer }
              /> ))
          }  
          </div>
        </>
    );
};

export default Photos;
