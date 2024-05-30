import React from "react";
import { useNavigate } from "react-router-dom";

function Card2({ element }) {
  const navigate = useNavigate();

  const handleNavigation = (e) => {
    e.preventDefault(); // Prevent the default anchor behavior
    console.log(element.strMeal);
    navigate("/Card3", { state: {meal:element } }); // Pass the element as state
  };

  return (
    <div style={{ paddingTop: "5rem", marginLeft: "2rem" }}>
      <div className="card text-bg-light p-3" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title" style={{display:"flex" ,justifyContent:"center"}}>{element.strMeal}</h5>
          <img
            src={element.strMealThumb || "https://static.feber.se/article_images/58/80/51/588051.jpg"}
            className="card-img-top"
            alt={element.strMeal}
          />
          <a href="/Card3" onClick={handleNavigation} className="stretched-link">
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card2;
