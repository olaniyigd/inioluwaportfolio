import "./Skill.css";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
export default function Skill (){
    useEffect (()=>{
        Aos.init({duration:1000});
      }, [])
    return(
            <div id="skill">
                <h1 data-aos="fade-up" className="skill-title">Skills</h1>
                <div className="skills">
                <div className="skill-left">
                    <div className="skill-html">
                    <p className="heading">Data Analysis</p>
                    <p className="skit">100%</p>
                    </div>
                    <div className="bak">
                        <div data-aos="fade-right" className="html">
                        </div>
                    </div>
                    <div className="skill-css">
                    <p className="heading">Budgets and Forecasting</p>
                    <p className="skit">100%</p>
                    </div>
                    <div className="bak">
                        <div data-aos="fade-right" className="css">
                        </div>
                    </div>
                    <div className="skill-css">
                    <p className="heading">File and Database Management</p>
                    <p className="skit">100%</p>
                    </div>
                    <div className="bak">
                        <div data-aos="fade-right" className="tail">
                        </div>
                    </div>
                    <div className="skill-java">
                    <p className="heading">Variance Analysis</p>
                    <p className="skit">100%</p>
                    </div>
                    <div className="bak">
                        <div data-aos="fade-right" className="javascript">
                        </div>
                    </div>
                    <div className="skill-boot">
                    <p className="heading">Power BI</p>
                    <p className="skit">100%</p>
                    </div>
                    <div className="bak">
                        <div data-aos="fade-right" className="bootstrap">
                        </div>
                    </div> 
                </div>
                <div className="skill-right">
                    <div className="skill-react">
                    <p className="heading">Excel</p>
                    <p className="skit">100%</p>
                    </div>
                    <div className="bak">
                        <div data-aos="fade-right" className="react">
                    </div>
                    </div>
                    <div className="skill-react">
                    <p className="heading">Statistical and Descriptive Analysis</p>
                    <p className="skit">100%</p>
                    </div>
                    <div className="bak">
                        <div data-aos="fade-right" className="reactI">
                    </div>
                    </div>
                    <div className="skill-canva">
                    <p className="heading">Financial Reporting</p>
                    <p className="skit">100%</p>
                    </div>
                    <div className="bak">
                        <div data-aos="fade-right" className="canva">
                        </div>
                    </div>
                    <div className="skill-com">
                    <p className="heading">Financial Modeling</p>
                    <p className="skit">100%</p>
                    </div>
                    <div className="bak">
                        <div data-aos="fade-right" className="com">
                        </div>
                    </div>
                </div>

                </div>
                
            </div>
    )
}