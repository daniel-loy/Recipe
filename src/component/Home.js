// Home.js
import React, { useContext,useEffect, useState } from "react";
import Navbar from "./Navbar";
import Card from "./Card";

function Home() {
  
  const [recipe, setRecipe] = useState([]);

  const fetchApi = async () => {
    const url = `https://www.themealdb.com/api/json/v1/1/categories.php`;
    try {
      let recipeResponse = await fetch(url);
      if (recipeResponse.ok) {
        let response = await recipeResponse.json();
        setRecipe(response.categories);
      } else {
        console.error("Failed to fetch data");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div>
      <Navbar/> 
      <h1 style={{display:"flex",justifyContent:"center",paddingTop:"10vh"}}>Categories</h1>

      <div className="row">
        {recipe.map((element) => (
          <div key={element.idCategory} className="col-sm-3">
            {/* Pass setCategories from props to Card */}
            <Card element={element}/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
