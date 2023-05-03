import React, { useState } from "react";

const Tabs = () => {
  const [change, setChange] = useState(1);

  // const arrayItem = ["Tab Content 1", "Tab Content 2", "Tab Content 3"];

  //State 2 values => value, setValue

  // const Content = ({ heading }) => {
  //   return <div className={`${change === 1 ? "show" : "hide"}`}>{heading}</div>;
  // };

  return (
    <>
      <div>
        <button onClick={() => setChange(1)}>Tab1</button>
        <button onClick={() => setChange(2)}>Tab2</button>
        <button onClick={() => setChange(3)}>Tab3</button>
      </div>
      <div>{change===1?<h1>juhi</h1>:null}</div>
      <div>{change===2?<h1>juhi2</h1>:null}</div>
    <div>{change===3?<h1>juhi3</h1>:null}</div>
    </>
  );
};

export default Tabs;
