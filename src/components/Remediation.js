import React from "react";
import "../Styles/remediation.css";
import Success_Criterion from "../Jsons/Success_Criterion.json";

const remediation = () => {

  return (
    <>
    <div className="container">
      <div className="row">
        {Success_Criterion.reme.map((item, index) => {
          return (
            <div className="cardscol col-4">
              <div class="card">
                <h5 class="card-header">{item.head}</h5>
                <div class="card-body">
                  <p class="card-text">{item.desc}</p>
                  <a href="#" class="button btn btn-primary ">
                    {item.link}
                  </a>
                </div>
              </div>
              
            </div>
          );
        })}
      </div>
      </div>
    </>
  );
};
export default remediation;
