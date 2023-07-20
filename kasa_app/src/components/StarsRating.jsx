import React from "react";

const StarRating = ({ rating }) => {

      const filledStars = Array.from({ length: 5 }, (_,index) => index < rating); //Chaque élément du tableau sera un booléen indiquant si l'étoile est remplie (true) ou vide (false) , "index < rating" est la condition qui détermine si l'étoile doit être remplie ou vide.

      return (
            <div className="stars-icons__container">
                  {filledStars.map((filled, index) => (
                        <svg
                              key={index}
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill={filled ? "#FF6060" : "#E3E3E3"}
                              className="star-icon">
                              <path d="M9.43233 4.3376C9.29777 4.05833 9.01344 3.88062 8.70117 3.88062C8.38891 3.88062 8.10711 4.05833 7.97001 4.3376L6.3376 7.6964L2.69197 8.23462C2.38732 8.28032 2.13345 8.49358 2.03951 8.78553C1.94558 9.07749 2.02174 9.39992 2.24007 9.61572L4.88544 12.2332L4.26091 15.9322C4.21014 16.2368 4.33707 16.5466 4.58841 16.7268C4.83975 16.9071 5.17232 16.9299 5.4465 16.7852L8.70371 15.0462L11.9609 16.7852C12.2351 16.9299 12.5677 16.9096 12.819 16.7268C13.0703 16.544 13.1973 16.2368 13.1465 15.9322L12.5194 12.2332L15.1648 9.61572C15.3831 9.39992 15.4618 9.07749 15.3654 8.78553C15.2689 8.49358 15.0176 8.28032 14.7129 8.23462L11.0647 7.6964L9.43233 4.3376Z"/>
                        </svg>
                  ))}
            </div>
      );
};

export default StarRating;
