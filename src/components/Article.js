import React from "react";
import "../Styles/home.css";
import Success_Criterion from "../Jsons/Success_Criterion.json";

const Article = () => {
  // let Success_Criterion = require('../Jsons/Success_Criterion.json');

  return (
    <>
      <div className="container article_h ">
        <h4>
          Success Criterion 1.2.3:
          <br /> Audio Description or Media Alternative (Prerecorded)
          (Level A)
        </h4>

        <div>
          <p className="sub_heading">Description:</p>
        </div>
        <div className="ps-2">
          <p>
            {Success_Criterion.description.text}

            <br />
            <ul>
              {Success_Criterion.description.list.map((listitem, index) => {
                return <li>{listitem.text}</li>;
              })}
            </ul>
          </p>
        </div>
        {Success_Criterion.subHeadings.map((listitem,index)=>{
              return(
             <>
        <div>
          <p className="sub_heading">
            {listitem.head}
          </p>
        </div>
        <div className="ps-2">
          <p>
            {listitem.text}
          </p>
        </div>
        </>
         )
        })}
      
      
        <div>
          <p className="sub_heading">Example:</p>
        </div>
        <div className="ps-2">
          <p>
            <span className="fw-semibold">Success case:</span>
            A movie is played with all the detailed description of that part for
            example the dialogues along with the laughter or crying is explained
            as well. <br />
            <span className="fw-semibold">Failure case:</span> No description is
            provided for the media so the people who are visually impaired won’t
            be able to understand perceive what’s happening.
          </p>
        </div>
        <div>
          <p className="sub_heading">Target Audience:</p>
        </div>
        <div className="ps-2">
          <p>
            People who are blind or visually impaired are the main target
            audience of this success criteria.
          </p>
        </div>
        <div>
          <p className="sub_heading">Benefits From Guideline Fulfilment:</p>
        </div>
        <div className="ps-2">
          <p>
            People who are blind or visually impaired are the main target
            audience of this success criteria.
          </p>
        </div>
        <div>
          <p className="sub_heading">Reference:</p>
        </div>
        <div className="ps-2">
          <a>
            https://www.w3.org/WAI/WCAG21/Understanding/audio-description-or-media-alternative-prerecorded.html
          </a>
        </div>
        <div>
          <p className="sub_heading">Recommended Scripting Solutions:</p>
        </div>
        <div className="ps-2">
          <p>
            By providing audio track that includes audio description. <br />
            Placing a link to the alternative for time-based media immediately
            next to the non-text content
          </p>
        </div>
      </div>
      
    </>
  );
};
export default Article;
