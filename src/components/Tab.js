import { useState } from "react";
import "../Styles/wcag.css";

function Tab() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container c">
      <div className="Tab-box">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          PERCEIVABLE
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          OPERABLE
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          UNDERSTANDABLE
        </button>
        <button
          className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(4)}
        >
          ROBUST
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <p>
          Visitors must be able to perceive, or understand and be aware of, the content and information that’s presented on your website.
          </p>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <p>Operable websites can be used without disrupting the user in any way.</p>
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          
          <p>All content on your website including your written and graphic design content should be easily understood by visitors.


          </p>
        </div>
        <div
          className={toggleState === 4 ? "content  active-content" : "content"}
        >
          <p>The content on your site should be easily interpreted and consumable by all visitors, including those who use assistive technology like screen readers.
          </p>
        </div>
      </div>
    </div>
    </div>
    
  );
}

export default Tab;
