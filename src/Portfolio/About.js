import "./About.css";
import tango3 from "../Portfolioimage/tango3.jpeg";
import { FiChevronRight } from "react-icons/fi";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
export default function About (){
    useEffect (()=>{
        Aos.init({duration:1000});
      }, [])
    return(
            <div id="about-head" className="rev">
                <h1 className="about-title">-About-</h1>
                <p data-aos="fade-up" className="about-text"> finance analyst with expertise in financial modeling, forecasting, and data analysis. Possesses strong analytical and problem-solving skills, with a deep understanding of financial statements and accounting principles. Proficient in Excel, SQL, and other financial software, able to manage complex financial data sets and present findings to senior management. Highly detail-oriented, with excellent communication and interpersonal skills, able to work independently or as part of a team. Committed to driving organizational success through strategic financial insights and recommendatios.  </p>
                <div className="about">
                    <div className="about-left">
                        <img src={tango3} alt="niyi" data-aos="fade-up" className="aboutimage" />
                    </div>
                    <div className="about-right">
                        <div className="abot-title">
                        <p data-aos="fade-up" className="title">Business Finacial Analyst</p>
                        </div>
                        <div className="inf">
                        <div data-aos="fade-right" className="inf-left">
                            <div className="two">
                                <p className="one-txt"><FiChevronRight/>Name: Jimoh Oladunni</p>
                            </div>
                            <div className="two">
                                <p className="one-txt"><FiChevronRight/>Phone: 07570967776</p>
                            </div>
                            <div className="two">
                                 <p className="one-txt"><FiChevronRight/>City: Derby, United Kingdom</p>
                            </div>
                        </div>
                        <div data-aos="fade-right" className="inf-right">
                            <div className="two">
                                <p className="one-txt"><FiChevronRight/>Degree: Msc</p>
                            </div>
                            <div className="two">
                                <p className="one-txt"><FiChevronRight/>Mail:jimoholadunni@gmail.com</p>
                            </div>
                            <div className="two">
                                <p className="one-txt"><FiChevronRight/>Freelance: Available</p>
                            </div>
                        </div>
                    </div>
                    </div>                    
                </div>
            </div>
    )
}