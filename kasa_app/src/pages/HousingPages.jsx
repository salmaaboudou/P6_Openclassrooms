import React, { useEffect, useState } from "react";
import housingData from "../logement.json";
import Carrousel from "../components/Carrousel";
import StarRating from "../components/StarsRating";
import DropdownMenu from "../components/DropdownMenu";
import Tags from "../components/Tags";
import { useParams, Navigate } from "react-router-dom";


function HousingPages() {
      const { id } = useParams(); //extraction id de l'url
      const housing = housingData.find((house) => house.id === id); // Trouver l'ID dans le fichier json
      const isValidId = housingData.some((house) => house.id === id); // Vérifier si l'ID est valide
      // Si l'ID n'est pas valide, rediriger vers la page NotFound
      if (!isValidId) {
            return <Navigate to="/not-found" replace={true} />;
      }
      return (
            <div className="housing-pages">
                  {housing && <Carrousel images={housing.pictures} />}

                  <div className="infos-location__container">
                        <div className="titles-and-tags__container">
                              <h1 className="housing__title">{housing.title}</h1>
                              <h2 className="housing__location">{housing.location}</h2>

                              <div className="tags__container">
                                    {housing.tags.map((tag) => (
                                          <Tags tagName={tag} />
                                    ))}
                              </div>
                        </div>

                        <div className="rate-and-host__container">
                              <div className="rate__container">
                                    <StarRating rating={housing.rating} />
                              </div>

                              <div className="host">
                                    <h3 className="host__name">{housing.host.name}</h3>
                                    <div className="host__photo" style={{ backgroundImage: `url(${housing.host.picture})` }}></div>
                              </div>
                        </div>
                  </div>

                  <div className="drop-down-location__container">
                        <DropdownMenu label="Description" options={housing.description} />
                        <DropdownMenu label="Équipements" options={housing.equipments} />
                  </div>
            </div>
      );
}

export default HousingPages;
