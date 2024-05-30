// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./component/Home";
import Card2 from "./component/Card2";
import Home2 from "./component/Home2";
import Card3 from "./component/Card3";
import { ContextProvider } from "./Context";


function App() {
  // const [categories, setCategories] = useState("");

  return (
    <>
      <Router>
      <ContextProvider>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/Home" element={<Home/>} />
          <Route path="/Home2" element={<Home2/>} />
          <Route path="/Card3" element={<Card3 />} />
          <Route path="/Card" element={<Card2 />} />
        </Routes>
        </ContextProvider>
      </Router>
    </>
  );
}

export default App;
