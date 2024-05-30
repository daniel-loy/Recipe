import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import mixingImage from "./mixing.png";
import coverimg from "./receipy.png";
import { Context } from "../Context";
import styled from "styled-components";

const StyledDiv = styled.div`
  @media (max-width: 1500px) {
    display: none;
  }
  width: 100%; 
  height: 40vh;
  padding:1%;
`;

const Navig=styled.div`
    @media (max-width:1500px){
      position:static;
      padding-top:5%;
    }
    position:absolute;
    
`

function Navbar() {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();
  const { categories, setCategories } = useContext(Context);

  const handleNavigation = (e) => {
    e.preventDefault();
    console.log("Search Value:", searchValue);
    setCategories(searchValue);
    navigate("/Home2");
  };

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleback = () => {
    navigate(-1);
  };

  return (
    <div>
      <Navig
        className="navbar navbar-expand-xl d-flex flex-column justify-content-center "
        style={{ top: "8%", left: "30%" }}
      >
        <div className="d-flex justify-content-center" style={{ paddingBottom: "3%" }}>
          <img src={mixingImage} alt="..." style={{ width: "10vh"}} />
          <h1 style={{ fontSize: "350%",fontFamily:"Lucida Handwriting" }}>Recipes</h1>
        </div>
        <nav className="navbar">
          <div className="container-fluid">
            <form
              className="d-flex justify-content-center"
              role="search"
              onSubmit={handleNavigation}
            >
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={searchValue}
                onChange={handleInputChange}
              />
              {console.log(searchValue,"this is searchvalue")}
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </nav>
      </Navig>
      <StyledDiv>
        <img src={coverimg} alt="" style={{ width: "100%", height: "40vh" }} />
      </StyledDiv>
      <div className=" d-flex justify-content-center" style={{paddingTop:"2%"}}>
        <div style={{ padding: "5px", borderTop: "1px solid green", borderBottom: "1px solid green" }}>
          <a
            className="nav-link active"
            aria-current="page"
            href="/Home"
            style={{ color: "black" }}
          >
            Home
          </a>
        </div>
        <div style={{ padding: "5px", borderTop: "1px solid green", borderBottom: "1px solid green" }}>
          <a
            className="nav-link"
            href="#"
            onClick={handleback}
            style={{ color: "black" }}
          >
            Back
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
