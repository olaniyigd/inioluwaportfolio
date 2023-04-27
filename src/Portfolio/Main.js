import "./Main.css";
import Nav from "./Nav";
import "./Nav.css";
import "./Mnav.css";
import Front from "./Front";
import { FiArrowUp } from "react-icons/fi";
import About from "./About";
import Skill from "./Skill";
import Resume from "./Resume";
import Achieve from "./Achieve";
import Bottom from "./Bottom";
export default function Main(){
    return(
            <div className="main">
                <div className="left">
                    <Nav/>
                </div>
                <div id="home" className="right">
                    <Front/>
                    <About />
                    <Skill />
                    <Resume />
                    <Achieve />
                    <Bottom />
                    <a className="float" href="#home">
                 <button className='arbtn'> <FiArrowUp /> </button>
                 </a>
                </div>
            </div>
    )
}
