import "./Nav.css";
import tango3 from "../Portfolioimage/tango3.jpeg";
import { BsTwitter } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { ImFacebook } from "react-icons/im";
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineFile } from "react-icons/ai";
import { AiOutlineProfile } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
export default function Nav (){
    return(
            <div className="nav-bar">
                <div className="nav">
                <img src={tango3} alt="niyi" className="logo" />
                <h1 className="neme">JIMOH OLADUNNI</h1>
                <div className="media">
                    <div className="icop">
                      <a className="twi" href="/"><BsTwitter /></a>
                    </div>
                    <div className="ico">
                      <a className="face" href="/"><ImFacebook/> </a>
                  
                    </div>
                    <div className="ico">
                    <a className="link" href="/"><FaLinkedinIn/> </a>
                    </div>
                    <div className="ico">
                    <a className="what" href="/"><BsWhatsapp/> </a>
                    </div>
                </div>
                </div>
                <ul>
                    <a href="#front"><li><AiOutlineHome/> Home</li></a>
                    <a href="#about-head"><li><CgProfile/> About</li></a>
                    <a href="#skill"><li><AiOutlineProfile/> Skills</li></a>
                    <a href="#resume"><li><AiOutlineFile/> Resume</li></a>
                    <a href="#achieve"><li><AiOutlineFile/> Certifications</li></a>
                </ul>
                <p className="copyrih">&copy; Copyright. Portfolio Designed by:</p>
                <p className="copyrit">Dakieo</p>
            </div>
    )
}