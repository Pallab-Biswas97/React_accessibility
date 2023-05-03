import React from "react";
import { useNavigate } from "react-router-dom";
import { FaBeer } from "react-icons/fa";
import img5 from "../Images/img5.jpg";
import "../Styles/home.css";
import sidebar from "./sidebar";
import Name_Role_Value from "./Name_Role_Value";
import Article from "./Article";
import "../Styles/sidebar.css"

const Home = () => {
  return (
    <>

      <div className="row container-fluid top_padding">
        <div className="col">
        <div className="row ">
          <div className="col-2"></div>
          <div className="col">
            <button className="button">&#8701; Previous</button>
          </div>
          <div className="col">
            <button className="button">Next &#8702;</button>
          </div>
        </div>
        <div className="row">
          <div className="col">
          <Article/>
          </div>
        </div>

        </div>
        <div className="col-3">
            <Name_Role_Value/>
      
        </div>

      </div>
     
    </>
  );
};
export default Home;
