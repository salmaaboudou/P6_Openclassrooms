import React from "react";
import bannerDesktop from "../assets/desktop/image-banner-desktop.png";
import bannerMobile from "../assets/mobile/image-banner-mobile.png";
import Card from "../components/Card";

function Home(props) {
      const { isBigScreen } = props;

      return (
            <div>
                  <div
                        className="banner"
                        style={isBigScreen ? { backgroundImage: `url(${bannerDesktop})` } : { backgroundImage: `url(${bannerMobile})` }}>
                        <span className="banner__text">
                              Chez vous, <span className="banner__text--line-break">partout et ailleurs</span>
                        </span>
                  </div>

                  <div className="home-cards__container">
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                  </div>
            </div>
      );
}

export default Home;
