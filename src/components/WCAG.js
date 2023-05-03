import React from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/wcag.css";
import { FaBeer } from "react-icons/fa";
import { Navigate } from "react-router-dom";
// import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Card from "./Card";
import Landing from "./Landing";
import Tab from "./Tab";
import Tabs from "./Tabs";
import Links from "./Links";

const WCAG = () => {
  const   LinkArray = ["link1", "link2", "link3", "link14"];
  const cardArray = [
    {
      heading: "Level A",
      description:
        "Level A sets a minimum level of accessibility and does not achieve broad accessibility for many situations.",
      subHeading: "Must Have",
    },
    {
      heading: "Level AA",
      description:
        "Level A sets a minimum level of accessibility and does not achieve broad accessibility for many situations.",
      subHeading: "SHould Have",
    },
    {
      heading: "Level AAA",
      description:
        "Level A sets a minimum level of accessibility and does not achieve broad accessibility for many situations.",
      subHeading: "Good To Have",
    },
  ];
  // const linkArray=["a","b","c","d"];
  const navigate = useNavigate();
  const onClickHandler = () => {
    console.log("Clicked");
    navigate("/");
  };
  return (
    <>
      <div className="bg-image">
        <div className="wcag_main">
          <h1 className="wcag">Web Content Accessibility Guidelines</h1>
          <button onClick={onClickHandler} className="wcag_button1">
            Get Started
          </button>
          <button className="wcag_button2">Axe Tool</button>
        </div>
        <Landing />

        <div className="cards-list">
          {cardArray.map((item, index) => {
            return (
              <Card
                heading={item.heading}
                description={item.description}
                subHeading={item.subHeading}
              />
            );
          })}
        </div>

        <h1 className="fs-2 pt-5 fw-normal level">Principles of Accessibility</h1>
        <Tab/>
        {/* {
          LinkArray.map((item,index)=>{
            return(
            <Links name={item}/>
            );
            
          })
        } */}
        <Links/>
        
        
      </div>
    </>
  );
};
export default WCAG;
