import React from "react";


function Banner(props) {

      const { isBigScreen, desktopImage, mobileImage, text, height } = props
      return (
            <div 
                  className="banner" 
                  style={{
                        backgroundImage: isBigScreen ? `url(${desktopImage})` : `url(${mobileImage})`,
                        height: height ? `${height}px` : "auto"
                  }}
            >
                  
                  <span className="banner__text">{text}</span>
            </div>
      );
}

export default Banner;