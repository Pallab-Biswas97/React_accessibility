import React from "react";
import "../Styles/home.css";
import img3 from  "../Images/img3.jpg";

const Name_Role_Value=()=>{
    return(
        <>
         <div class="sidebar">
              <div class="main_head">
                <span>WCAG Guidelines</span>
              </div>
              <div class="item">
                <a href="/understanding-sc-1-1-1-non-text-content">
                  1.1.1 Non-text Content{" "}
                </a>
              </div>

              <div class="item">
                <a
                  data-wpel-link="internal"
                  href="/understanding-sc-1-2-1-audio-only-and-video-only-prerecorded"
                >
                  1.2.1 Audio-only and Video-only (Prerecorded)
                </a>
              </div>

              <div class="item">
                <a
                  data-wpel-link="internal"
                  href="/understanding-sc-1-2-2-captions-prerecorded"
                >
                  1.2.2 Captions (Prerecorded)
                </a>
              </div>
              <div class="item">
                <a
                  data-wpel-link="internal"
                  href="/understanding-sc-1-2-3-audio-description-or-media-alternative-prerecorded"
                >
                  1.2.3 Audio Description or Media Alternative (Prerecorded)
                </a>
              </div>
              <div class="item">
                <a
                  data-wpel-link="internal"
                  href="/understanding-sc-1-2-4-captions-live"
                >
                  1.2.4 Captions (Live)
                </a>
              </div>
              <div class="item">
                <a
                  data-wpel-link="internal"
                  href="/understanding-sc-1-2-5-audio-description-prerecorded"
                >
                  1.2.5 Audio Description (Prerecorded)
                </a>
              </div>
              <div class="item">
                <a
                  data-wpel-link="internal"
                  href="/understanding-sc-1-3-1-info-and-relationship"
                >
                  1.3.1 Info and Relationship
                </a>
              </div>
              <div class="item">
                <a
                  data-wpel-link="internal"
                  href="/understanding-sc-1-3-2-meaningful-sequence"
                >
                  1.3.2 Meaningful Sequence
                </a>
              </div>
              <div class="item">
                <a
                  data-wpel-link="internal"
                  href="/understanding-sc-1-3-3-sensory-characteristics"
                >
                  1.3.3 Sensory Characteristics
                </a>
              </div>
              <div class="item">
                <a
                  href="/understanding-sc-1-3-4-orientation/"
                  data-type="post"
                  data-id="4352"
                >
                  1.3.4 Orientation
                </a>
              </div>

              <div class="item">
                <a
                  href="/understanding-sc-1-3-5-identify-input-purpose"
                  data-type="post"
                  data-id="4942"
                >
                  1.3.5 Identify Input Purpose
                </a>
              </div>
              <div class="item">
                <a
                  data-wpel-link="internal"
                  href="/understanding-sc-1-4-1-use-of-color"
                >
                  1.4.1 Use of Color
                </a>
              </div>
              <div class="item">
                <a
                  data-wpel-link="internal"
                  href="/understanding-sc-1-4-2-audio-control"
                >
                  1.4.2 Audio Control
                </a>
              </div>
              <div class="item">
                <a
                  data-wpel-link="internal"
                  href="/understanding-sc-1-4-3-contrast-minimum"
                >
                  1.4.3 Contrast Minimum
                </a>
              </div>
              <div class="item">
                <a
                  data-wpel-link="internal"
                  href="/understanding-sc-1-4-4-resize-text"
                >
                  1.4.4 Resize Text
                </a>
              </div>
              <div class="item">
                <a
                  data-wpel-link="internal"
                  href="/understanding-sc-1-4-5-image-of-text"
                >
                  1.4.5 Image of text
                </a>
              </div>
              <div class="item">
                <a
                  href="/understanding-sc-1-4-10-reflow"
                  data-type="post"
                  data-id="4356"
                >
                  1.4.10 Reflow
                </a>
              </div>
              <div class="item">
                <a href="/understanding-sc-1-4-11-non-text-contrast">
                  1.4.11 Non-text Contrast
                </a>
              </div>
              <div class="item">
                <a
                  href="/understanding-sc-1-4-13-content-on-hover-or-focus"
                  data-type="post"
                  data-id="5013"
                >
                  1.4.13 Content on Hover or Focus
                </a>
              </div>
              <div class="item">
                <a
                  data-wpel-link="internal"
                  href="/understanding-sc-2-1-1-keyboard"
                >
                  2.1.1 Keyboard
                </a>
              </div>
              <div class="item">
                <a
                  data-wpel-link="internal"
                  href="/understanding-sc-2-1-2-no-keyboard-trap"
                >
                  2.1.2 No Keyboard Trap
                </a>
              </div>
              <div class="item">
                <a
                  href="/understanding-sc-2-1-4-character-key-shortcuts"
                  data-type="post"
                  data-id="5296"
                >
                  2.1.4 Character Key Shortcuts
                </a>
              </div>
              <div class="item">
                <a
                  data-wpel-link="internal"
                  href="/understanding-sc-2-2-1-timing-adjustable"
                >
                  2.2.1 Timing Adjustable
                </a>
              </div>
              <div class="item">
                <a href="/understanding-sc-2-2-2-pause-stop-hide">
                  2.2.2 Pause, Stop, Hide{" "}
                </a>
              </div>
              <div class="item">
                <a href="/understanding-sc-2-3-1-three-flashes-or-below-threshold">
                  2.3.1 Three Flashes or Below Threshold
                </a>
              </div>
              <div class="item">
                <a href="/understanding-sc-2-4-1-bypass-blocks">
                  2.4.1 Bypass Blocks
                </a>
              </div>
              <div class="item">
                <a href="/understanding-sc-2-4-2-page-titled">
                  2.4.2 Page Titled
                </a>
              </div>
              <div class="item">
                <a href="/understanding-sc-2-4-3-focus-order">
                  2.4.3 Focus Order
                </a>
              </div>
              <div class="item">
                <a href="/understanding-sc-2-4-4-link-purpose-in-context">
                  2.4.4 Link Purpose (In Context)
                </a>
              </div>
              <div class="item">
                <a href="/understanding-sc-2-4-5-multiple-ways-to-locate-web-pages/">
                  2.4.5 Multiple ways to locate web pages
                </a>
              </div>
              <div class="item">
                <a href="/understanding-sc-2-4-6-headings-labels">
                  2.4.6 Headings and Labels
                </a>
              </div>
              <div class="item">
                <a href="/understanding-sc-2-4-7-focus-visible">
                  2.4.7 Focus Visible
                </a>
              </div>
              <div class="item">
                <a
                  href="/understanding-sc-2-5-1-pointer-gestures"
                  data-type="post"
                  data-id="5510"
                >
                  2.5.1 Pointer Gestures
                </a>
              </div>
              <div class="item">
                <a
                  href="/understanding-sc-2-5-2-pointer-cancellation"
                  data-type="post"
                  data-id="5604"
                >
                  2.5.2 Pointer Cancellation
                </a>
              </div>
              <div class="item">
                <a
                  href="/understanding-sc-2-5-3-label-in-name"
                  data-type="post"
                  data-id="5798"
                >
                  2.5.3 Label in Name
                </a>
              </div>
              <div class="item">
                <a
                  href="/understanding-sc-2-5-4-motion-actuation"
                  data-type="post"
                  data-id="5891"
                >
                  2.5.4 Motion Actuation
                </a>
              </div>
              <div class="item">
                <a href="/understanding-sc-3-1-1-language-of-page">
                  3.1.1 Language of Page
                </a>
              </div>
              <div class="item">
                <a href="/understanding-sc-3-1-2-language-of-parts">
                  3.1.2 Language of Parts
                </a>
              </div>
              <div class="item">
                <a href="/understanding-sc-3-2-1-on-focus">3.2.1 On Focus</a>
              </div>
              <div class="item">
                <a href="/understanding-sc-3-2-2-on-input">3.2.2 On Input</a>
              </div>
              <div class="item">
                <a href="/understanding-sc-3-2-3-consistent-navigation">
                  3.2.3 Consistent Navigation
                </a>
              </div>
              <div class="item">
                <a href="/understanding-sc-3-2-4-consistent-identification/">
                  3.2.4 Consistent Identification
                </a>
              </div>
              <div class="item">
                <a href="/understanding-sc-3-3-1-error-identification">
                  3.3.1 Error Identification
                </a>
              </div>
              <div class="item">
                <a href="/understanding-sc-3-3-2-labels-or-instructions">
                  3.3.2 Labels or Instructions
                </a>
              </div>
              <div class="item">
                <a href="/understanding-sc-3-3-3-error-suggestion">
                  3.3.3 Error Suggestion
                </a>
              </div>
              <div class="item">
                <a href="/understanding-sc-3-3-4-error-prevention-legal-financial-data">
                  3.3.4 Error Prevention (Legal, Financial, Data)
                </a>
              </div>
              <div class="item">
                <a href="/understanding-sc-4-1-1-parsing">4.1.1 Parsing</a>
              </div>
              <div class="item">
                <a href="/understanding-sc-4-1-2-name-role-value">
                  4.1.2 Name, Role, Value
                </a>
              </div>
              <div class="item">
                <a
                  href="/understanding-sc-4-1-3-status-messages"
                  data-type="post"
                  data-id="6578"
                >
                  4.1.3 Status messages
                </a>
              </div>

              <div class="section">
                
              </div>
            </div>
        </>
    )
    
}
export  default Name_Role_Value;