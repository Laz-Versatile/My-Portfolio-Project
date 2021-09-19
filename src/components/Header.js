import React from "react"
import Typed from "react-typed";
import { Link } from "react-scroll";


const Header = () => {
    return (
      <div id="home" className="header-wrapper">
          <div className="main-info">
            <h1>web development and graphic designs promotions</h1>
            <Typed 
                className="typed-text"
                strings={["Web Development", "Graphic Design", "Content Writer", "Data Analyst"]}
                typedSpeed={40}
                backSpeed={60}
                loop
            />
            <Link smooth={true} to="contacts" offset={-140} href="" className="btn-main-offer">contact me</Link>
          </div>
      </div>  
    )
}

export default Header
