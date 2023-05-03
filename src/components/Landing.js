import React from "react";
import "../Styles/wcag.css";
import img2 from "../Images/img2.gif";

const Landing=()=>{
    return(
        <>
        <div className="container">
          <div className="row">
            
            <div className="col-6 wcag_content">
              <h4>What are the Web Content Accessibility Guidelines(WCAG)?</h4>
              <p>
                The Web Content Accessibility Guidelines, often abbreviated to
                WCAG, are a series of guidelines for improving web
                accessibility. Produced by the World Wide Web Consortium (W3C),
                the WCAG are the best means of making your website useful to all
                of your users. Although they are not an all-inclusive list of
                issues facing web users with disabilities, they are
                internationally recognised and adopted standards. The guidelines
                explain how to solve many of the problems that your users with
                disabilities face.
              </p>
            </div>
            <div className="col-6">
              <img className="img2" src={img2} />
            </div>
          </div>
        </div>
        </>

    )
}
export default Landing