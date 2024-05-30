import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";

function Card3() {

  // const [categories, setCategories] = useState("");
  const location = useLocation();
  const { meal,} = location.state || { meal: {}};
  // console.log(meal.strInstructions)
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
  console.log(meal.strIngredient1)
  return (
    <div key={meal.idMeal}>
        <Navbar />
    <div  style={{ width:"100%",marginLeft:"10vh",marginTop:"10vh"}}>
      <div className="row g-1">
        <div className="col-md-4">
        <h1 class="card-title" style={{display:"flex",justifyContent:"center",fontSize:"4vh",width:"60%"}}>{meal.strMeal}</h1>

          <img src={meal.strMealThumb}
            className="img-fluid rounded-start"
            alt=""
            style={{width:"60%",paddingTop:"2vh"}}
          />
           <div className="row-md-4">
        <h3 style={{marginTop:"3vh"}}>Ingredients</h3>
        {ingredients.map((ingredient, index) => (
              <div className="row g-1" key={index}>
                <div className=" col-md-6 text-bg-light p-3">{ingredient}</div>
                <div className="col-md-4 text-bg-light p-3">{measurements[index]}</div>
                <div class="w-200"></div>
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
    
      </div>
       
        
      
    </div>
    </div>
  );
}

export default Card3;
