import React from "react";

function Card(props) {
      const { title, image } = props;
      return (
            <div className="home-card" style={{ backgroundImage: `url(${image})` }}>
                  <div className="home-card__overlay">
                        <span className="home-card__text"> {title} </span>
                  </div>
            </div>
      );
}

export default Card;
