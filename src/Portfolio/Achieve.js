import "./Achieve.css";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
export default function Achieve () {
    useEffect (()=>{
        Aos.init({duration:1000});
      }, [])
    return(
            <div id="achieve">
                <p data-aos="fade-up" className="achieve-title">Certifications</p>
                <div className="achie">
                    <div className="achie-left">
                        <div data-aos="fade-up" className="work">
                            <p className="wrk-txt">Bloomberg Market Concept, Bloomberg- (2022).</p>
                            <p className="wrk-txt">Equity Management certificate, Bloomberg- (2022).</p>
                        </div>
                    </div>
                    <div className="achie-right">
                        <div data-aos="fade-up" className="work">
                            <p className="wrk-txt">Portfolio Management Certificate, Bloomberg- (2022).</p>
                            <p className="wrk-txt">Data Analysis Certification, Babigton- (2022).</p>
                        </div>
                        
                    </div>
                </div>
            </div>
    )
}
