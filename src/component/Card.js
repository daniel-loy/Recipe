
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../Context";

function Card({ element}) {
  const navigate = useNavigate();
  const { categories, setCategories } = useContext(Context);
  const handleClick = (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    setCategories(element.strCategory);
    navigate("/Home2");
  };

  return (
    <div style={{ paddingTop: "2rem" }}>
      
      <div className="card text-bg-light p-3" >
        <img
          src={element.strCategoryThumb || 'https://static.feber.se/article_images/58/80/51/588051.jpg'}
          className="card-img-top"
          alt={element.strCategory}
        />
        <div className="card-body">
          <h5 className="card-title" style={{display:"flex" ,justifyContent:"center"}}>{element.strCategory}</h5>
        </div>
        <a href="/Home2" className="stretched-link" onClick={handleClick}></a>
      </div>
    </div>
  );
}

export default Card;
