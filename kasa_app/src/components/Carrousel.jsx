import React, { useState } from "react";
import leftArrowCarrousel from "../assets/left-arrow.svg";
import rightArrowCarrousel from "../assets/right-arrow.svg";

function Carrousel({ images }) {
      const [currentImageIndex, setCurrentImageIndex] = useState(0); // set = attribuer une valeur 

      const handlePrevImage = () => {
            setCurrentImageIndex((prevIndex) => 
                  (prevIndex === 0 ? images.length - 1 : prevIndex - 1)
            );
      };

      const handleNextImage = () => {
            setCurrentImageIndex((prevIndex) => 
                  (prevIndex === images.length - 1 ? 0 : prevIndex + 1)
            ); 
      };

      const currentImageNumber = currentImageIndex + 1; 
      const totalImagesNumber = images.length;

      return (
            <div className="carrousel__container">
                  <div className="carrousel__numbering">
                        {currentImageNumber}/{totalImagesNumber}
                  </div>
                  <img className="carrousel__images" src={images[currentImageIndex]} alt="image carrousel" />
                        
                  {images.length > 1 && (
                        <>
                              <img className="carrousel-left-arrow" src={leftArrowCarrousel} alt="left arrow carrousel" onClick={handlePrevImage} />
                              <img className="carrousel-right-arrow" src={rightArrowCarrousel} alt="right arrow carrousel" onClick={handleNextImage} />
                        </>
                  )}
            </div>
      );
}

export default Carrousel;
