import "./Bottom.css";
import { BsTwitter } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { ImFacebook } from "react-icons/im";
import { FaLinkedinIn } from "react-icons/fa";
export default function Bottom (){
    return(
        <div className="bottom">
            <hr></hr>
                    <div className="medi">
                    <div className="ico">
                      <a className="twii" href="/"><BsTwitter /></a>
                    </div>
                    <div className="ico">
                      <a className="facee" href="/"><ImFacebook/> </a>
                  
                    </div>
                    <div className="ico">
                    <a className="linkk" href="/"><FaLinkedinIn/> </a>
                    </div>
                    <div className="ico">
                    <a className="whatt" href="/"><BsWhatsapp/> </a>
                    </div>
                </div>
                <p className="copyright">&copy; Copyright. Portfolio Designed by:</p>
                <a href="https://dakieodev-portfolio.vercel.app/" className="copyrigt">Dakieo</a>
        </div>
    )
}