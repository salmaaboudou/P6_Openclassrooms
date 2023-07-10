import React from "react";
import bannerDesktop from "../assets/desktop/image-banner-desktop.png";
import bannerMobile from "../assets/mobile/image-banner-mobile.png";

function Home(props) {
      const{isBigScreen} = props;

      return (
            <div className="banner__container">
                  <div className="banner"style={isBigScreen ? { backgroundImage: `url(${bannerDesktop})` } : { backgroundImage: `url(${bannerMobile})` }}>
                              <span className="banner__text">Chez vous, <span className="banner__text--line-break">partout et ailleurs</span>  </span>
                              <div className="calque"></div>
                  </div>
            </div>
      );
}

export default Home;
