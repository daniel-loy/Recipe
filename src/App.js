import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./component/Home";
function App() {
 

  return (
    <div className="App">
     
       <Router>
       <Home/>
        </Router>
    </div>
  );
}

export default App;
