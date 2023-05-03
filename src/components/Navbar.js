import React from "react";
import Favicon from "react-favicon";
import '../Styles/Navbar.css';
import { FaSearch } from 'react-icons/fa'

const Navbar = ()=>{
    return(
        <>
        <div className="main fixed-top">
  <nav class="navbar navbar-expand-lg ">
  <img src="https://x-port.capgemini.com/wp-content/themes/cg-portfolio-redesign/assets/images/logo.svg" alt="" />
    
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse links" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <a class="nav-link" href="/">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/">Guidelines</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/remediation">Remediation</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/wcag">WCAG</a>
      </li>


    </ul>
    <form class="my-1 my-lg-0">
    
      <input class="form-control mr-sm-2 form1" type="search" placeholder="Search" aria-label="Search"/>
    </form>
  </div>
</nav>
</div>

        </>
    )
}
export default Navbar