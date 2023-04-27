import "./Resume.css";
import { FiChevronRight } from "react-icons/fi";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
export default function Resume () {
    useEffect (()=>{
        Aos.init({duration:1000});
      }, [])
    return(
            <div id="resume">
                <h1 data-aos="fade-up"  className="resume-title">Resume</h1>
                <div className="resum">
                    <div className="resum-left">
                         <p data-aos="fade-up"  className="expo">WORK EXPERIENCE</p>
                        <div data-aos="fade-up"  className="work">
                            <h3 className="lio">Finance Assistant</h3>
                            <h4 className="mio">Wecare24 Medicals- Derby, Derbyshire</h4>
                            <h5>June 2022 - Present</h5>
                            <div className="one">
                                <p className="tnt"><FiChevronRight/> Evaluated office processes and suggested efficiency improvements that reduced expenditures 25%.</p>
                            </div>
                            <div className="one">
                                <p className="tnt"><FiChevronRight/> Interacted and built collaborative relationships with marketing, sales and operations staff.</p>
                            </div>
                            <div className="one">
                                <p className="tnt"><FiChevronRight/> Observed strict confidentiality policies to maintain data integrity.</p>
                            </div>
                            <div className="one">
                                <p className="tnt"><FiChevronRight/> Compiled various reports relating to budget, expenses and payroll for review.</p>
                            </div>
                            <div className="one">
                                <p className="tnt"><FiChevronRight/> Managed payroll by tracking employee hours and entitlements.</p>
                            </div>
                            <div className="one">
                                <p className="tnt"><FiChevronRight/> Completed fortnightly payroll for company employees, including calculating taxes, holiday and sick leave.</p>
                            </div>
                            <div className="one">
                                <p className="tnt"><FiChevronRight/> Reconciled all company accounts, including credit cards and expenses.</p>
                            </div>
                        </div>
                        <div data-aos="fade-up"  className="work">
                            <h3 className="lio">Data Analyst Intern</h3>
                            <h4 className="mio">Babington- Birmingham, Birmingham</h4>
                            <h5>May 2022 - Present</h5>
                            <div className="one">
                                <p className="tnt"><FiChevronRight/> Used SQL to manage and retrieve data from 10+ TB databases.</p>
                            </div>
                            <div className="one">
                                <p className="tnt"><FiChevronRight/> Applied Knowledge of Classical Test Theory (CTT) in test design, revision and reporting.</p>
                            </div>
                            <div className="one">
                                <p className="tnt"><FiChevronRight/> Employed advanced knowledge of excel, including SUMIF, INDEX MATCH and Power Query formulas.</p>
                            </div>
                            <div className="one">
                                <p className="tnt"><FiChevronRight/> Collaborate with web developer to improve website performance, reducing query times by 30%.</p>
                            </div>
                            <div className="one">
                                <p className="tnt"><FiChevronRight/> Performed statistical validation and analyis throughout research and development projects using Tableau and R.</p>
                            </div>
                            <div className="one">
                                <p className="tnt"><FiChevronRight/> Enhanced strategic decision making by generating and analysing sales and customer behaviour models.</p>
                            </div>
                            <div className="one">
                                <p className="tnt"><FiChevronRight/> Supported development team to create data visualisation tools and graphics for company website.</p>
                            </div>
                            <div className="one">
                                <p className="tnt"><FiChevronRight/> Prepared Business intelligence reports tracking sales and customer insights for management team.</p>
                            </div>
                            <div className="one">
                                <p className="tnt"><FiChevronRight/> Designed impressive solutions to overcome existing system challenges.</p>
                            </div>
                        </div>
                        <div data-aos="fade-up"  className="work">
                            <h3 className="lio">Finance Assistant</h3>
                            <h4 className="mio">Techparlons- Ibadan, Lagos</h4>
                            <h5>April 2020 - Sept 2021.</h5>
                            <div className="one">
                                <p className="tnt"><FiChevronRight/> Prepared bi-weekly invoices, promptly sending out bills for customers.</p>
                            </div>
                            <div className="one">
                                <p className="tnt"><FiChevronRight/> Evaluated office processes and suggested efficiency improvements that reduced expenditures 33%.</p>
                            </div>
                            <div className="one">
                                <p className="tnt"><FiChevronRight/> Reconciled all company accounts, including credit cards, employee expenses and commission.</p>
                            </div>
                            <div className="one">
                                <p className="tnt"><FiChevronRight/> Interacted and built collaborative relationships with marketing, sales and operation staff.</p>
                            </div>
                            <div className="one">
                                <p className="tnt"><FiChevronRight/> Observed strictly confidentiality policies to maintain data integrity.</p>
                            </div>
                            <div className="one">
                                <p className="tnt"><FiChevronRight/> Compiled various reports relating to budgets, expenses and payroll for review.</p>
                            </div>
                            <div className="one">
                                <p className="tnt"><FiChevronRight/> Stayed on top of applicable government requirements to minimise legal and financial liabilities.</p>
                            </div>
                            <div className="one">
                                <p className="tnt"><FiChevronRight/> Monitored accounts payable and receivable statuses, keeping financial records up-to-date.</p>
                            </div>
                        </div>
                        <div data-aos="fade-up"  className="work">
                            <h3 className="lio">Corporate Finance Intern</h3>
                            <h4 className="mio">Tango Leadings- Ikeja, Lagos</h4>
                            <h5>Feb 2020 - Apr 2021.</h5>
                            <div className="one">
                                <p className="tnt"><FiChevronRight/> Produce up to 15 reports on industry financial trends.</p>
                            </div>
                            <div className="one">
                                <p className="tnt"><FiChevronRight/> Communicated effectively with clients and staff for smooth running of business.</p>
                            </div>
                            <div className="one">
                                <p className="tnt"><FiChevronRight/> Produced and presented performance-based presentations in PowerPoint.</p>
                            </div>
                            <div className="one">
                                <p className="tnt"><FiChevronRight/> Developed forecasting tools to analyse revenue variance, business pipeline and industry trends.</p>
                            </div>
                            <div className="one">
                                <p className="tnt"><FiChevronRight/> Delivered clear guidance and KPIs for financial planning processes to support consistent deliveries and offer sufficient information to explain drivers and trends.</p>
                            </div>
                            <div className="one">
                                <p className="tnt"><FiChevronRight/> Detailed financial data in spreadsheets to identify trends and create revenue, profitability and expense forecasts.</p>
                            </div>
                            <div className="one">
                                <p className="tnt"><FiChevronRight/> Conducted comprehensive research on corporations, industrial developments and goverment reports to inform financial assessments.</p>
                            </div>
                            <div className="one">
                                <p className="tnt"><FiChevronRight/> Compiled and assessed investment pricing, yield and expected changes.</p>
                            </div>
                            <div className="one">
                                <p className="tnt"><FiChevronRight/> Reviewed financial reports and recommended strategies to streamline operations, increase productivity and grow company profits.</p>
                            </div>
                        </div>
                        <div data-aos="fade-up" className="work">
                            <h3 className="lio">Business Development Manager</h3>
                            <h4 className="mio">Amazonia Waste Management- Ibadan, Ibadan.</h4>
                            <h5>May 2019 - Feb 2020.</h5>
                            <div className="one">
                                <p className="tnt"><FiChevronRight/> Created new client pipeline to meet monthly target.</p>
                            </div>
                            <div className="one">
                                <p className="tnt"><FiChevronRight/> Identified and closed new business opportunities through strategic networking, enhancing valuable client bases.</p>
                            </div>
                            <div className="one">
                                <p className="tnt"><FiChevronRight/> Oversaw full sales lifecycle from prospecting clients to closing deals.</p>
                            </div>
                            <div className="one">
                                <p className="tnt"><FiChevronRight/> Closed complex, lucrative deals with new customers.</p>
                            </div>
                            <div className="one">
                                <p className="tnt"><FiChevronRight/> Consistently exceeded revenue targets through new account penetration and development.</p>
                            </div>
                            <div className="one">
                                <p className="tnt"><FiChevronRight/> Prepared monthly sales forecast report detailing key metrics to examine areas of improvement.</p>
                            </div>
                            <div className="one">
                                <p className="tnt"><FiChevronRight/> Provided practical customer and market insight for improved strategic planning with shareholders.</p>
                            </div>
                        </div>
                    </div>
                    <div className="resum-right">
                        <p data-aos="fade-up"  className="educ">EDUCATION</p>
                        <div data-aos="fade-up"  className="work">
                            <h3 className="lio">Msc International Business Management and Finance.</h3>
                            <h4 className="mio">University of Derby - United Kingdom</h4>
                            <h5>Jan 2022 - May 2023.</h5>
                            <p className="wok-txt">International Business Management and Finance</p>
                        </div>
                        <div data-aos="fade-up"  className="work">
                            <h3 className="lio">Bsc Management and Economics</h3>
                            <h4 className="mio">University of Ibadan.</h4>
                            <h5>May 2016 - May 2020.</h5>
                            <p className="wok-txt">Management and Economics</p>
                        </div>
                        
                    </div>
                </div>
            </div>
    )
}
