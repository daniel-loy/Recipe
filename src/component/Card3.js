import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import youtube from './youtube (1).png'; // Update the import path



function Card3() {

  // const [categories, setCategories] = useState("");
  const location = useLocation();
  const { meal} = location.state || {};
  // console.log()
  if (!meal || !meal.strInstructions) {
    return <div>Loading...</div>; // or any other loading state/component
  }

  let instruction=meal.strInstructions.split('.')
  instruction.pop()
  for(let i=0;i<instruction.length;i++){
    if(!isNaN(instruction[i])){
      instruction.splice(i,1);
      i--;
    }
  }
  const ingredients = [];
  const measurements = [];

  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measurement = meal[`strMeasure${i}`];

    if (ingredient) {
      ingredients.push(ingredient);
    }
    if (measurement) {
      measurements.push(measurement);
    }
  }
  // console.log(meal.strIngredient1)
  return (
    <div>
        <Navbar />
    <div  style={{ width:"100%",marginLeft:"5%",marginTop:"10vh"}}>
      <div className="row g-1">
        <div className="col-md-3">
        <h1 className="card-title" style={{display:"flex",justifyContent:"center",fontSize:"4vh",width:"80%"}}>{meal.strMeal}</h1>

          <img src={meal.strMealThumb}
            className="img-fluid rounded-start"
            alt=""
            style={{width:"80%",paddingTop:"2vh"}}
          />
           <div className="row-md-5">
        <h3 style={{marginTop:"3vh"}}>Ingredients</h3>
        {ingredients.map((ingredient, index) => (
              <div className="row g-1" key={index}>
                <div className=" col-md-6 text-bg-light p-3">{ingredient}</div>
                <div className="col-md-5 text-bg-light p-3">={measurements[index]}</div>
                <div className="w-200"></div>
              </div>
              
            ))}
        </div>
        </div>
        <div className="col-md-6">
          <div className="card-body">
            <h3 style={{marginTop:"3vh"}}>Instruction</h3>
            
            <div className="card-text"> 
             {instruction.map((instruct,index)=>(
              <div key={index} className="row g-1"> 
                <div className=" col-md-1 text-bg-light p-3"><b>{index+1}</b></div>
              <div className=" col-md text-bg-light p-3">{instruct}</div>
              </div>
             )
            )}
            </div>
          </div>
        </div>
        
        <div className="col-md-2" style={{marginLeft:"10vh"}}>
        <h3 style={{marginTop:"3vh"}}>Watch video</h3>
       
        <a href={meal.strYoutube} target="_blank" rel="noopener noreferrer"style={{textDecoration: 'none'}}> <img src={youtube} style={{width:"20vh",height:"15vh"}}/>  <div style={{width:"20vh",display:"flex",justifyContent:"center"}}>click here</div> </a>

         
        </div>
      </div>
       
        
      
    </div>
    </div>
  );
}

export default Card3;
