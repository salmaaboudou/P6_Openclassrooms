import React from "react";
import bannerDesktopAbout from "../assets/desktop/banner-about-desktop.png";
import bannerMobileAbout from "../assets/mobile/banner-about-mobile.png";
import Banner from "../components/Banner";
import DropdownMenu from "../components/DropdownMenu";

function About() {
        const option1 = ['Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.'];
        const option2   = ['La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'];
        const option3  = ["La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."];
        return (
                <div className="about-page__container">
                        <Banner
                                isBigScreen={true}
                                desktopImage={bannerDesktopAbout}
                                mobileImage={bannerMobileAbout}
                                text=""
                                height="223"
                        />
                        <div className="dropdown-menus__about">
                                <DropdownMenu options={option1} text="Fiabilité" />
                                <DropdownMenu options={option2} text="Respect"  />
                                <DropdownMenu options={option2} text="Service" />
                                <DropdownMenu options={option3} text="Sécurité" />
                        </div>

                </div>
        );
}

export default About;