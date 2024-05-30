import React, { useEffect, useState,useContext } from "react";
import Navbar from "./Navbar";
import Card2 from "./Card2";
import { Context } from "../Context";

function Home2() {
  const [recipe, setRecipe] = useState([]);
 
  const { categories, setCategories } = useContext(Context);

  const fetchApi = async () => {
    
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${categories}`;
    // console.log(categories,"this is empty")
    try {
      let recipeResponse = await fetch(url);
      if (recipeResponse.ok) {
        let response = await recipeResponse.json();
        setRecipe(response.meals);
      } else {
        console.error("Failed to fetch data");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  // console.log(recipe[0].strCategory);

  useEffect(() => {
    if (categories) {
      fetchApi();
    }
  }, [categories]);


  return (
    <div>
      <Navbar/>
      <h1 style={{ display: "flex", justifyContent: "center", paddingTop: "3vh",fontFamily:"cursive" }}>
        {categories}
      </h1>
      {recipe === null ? (
        <div className="alert alert-primary" role="alert" style={{textAlign:"center",marginTop:"3vh"}}>
        currently not available
      </div>
      ) : (
        <div className="row" style={{display:"flex" ,justifyContent:"center"}}>
          {recipe.map((element) => (
            <div key={element.idMeal} className="col-sm-3">
              <Card2 element={element}/>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Home2;
