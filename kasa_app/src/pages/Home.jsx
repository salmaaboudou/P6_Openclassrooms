import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import Banner from "../components/Banner";
import housingData from "../logement.json";
import bannerDesktopHome from "../assets/desktop/banner-home-desktop.png";
import bannerMobileHome from "../assets/mobile/banner-home-mobile.png";

function Home() {

      return (
            <div>
                  <Banner 
                        isBigScreen={true}
                        desktopImage={bannerDesktopHome}
                        mobileImage={bannerMobileHome}
                        text="Chez vous, partout et ailleurs"
                        height="111"
                  />

                  <div className="home-cards__container">
                        {housingData.map((housing) => (
                              <Link to={`/housing-page/${housing.id}`} className="home-card__link">
                                          <Card 
                                                key={housing.id} 
                                                title={housing.title} 
                                                image={housing.cover} 
                                          />
                              </Link>
                        ))}
                  </div>
            </div>
      );
}

export default Home;
