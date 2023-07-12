import React, { useState } from "react";
import Card from "../components/Card";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import housingData from "../logement.json";


function Home({isBigScreen}) {

      return (
            <div>
                  <Banner isBigScreen={isBigScreen}/>

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
