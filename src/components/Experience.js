import React from "react";

function Experience() {
    return (
        <div id="experience" className="pt-52 pb-16 xl:ml-[240px] 2xl:ml-[480px] ml-16 text-lg w-[600px] transition-all ease-linear duration-[250ms] space-y-3">
            <header>
                <h1 className="text-white text-3xl font-semibold">
                    Experience
                </h1>
            </header>
            <div id="fuji" className="">
                <h1 className="text-sky-200 font-semibold">
                    Fujirebio Diagnotics Inc. (September 2021-Present)
                </h1>
                <h2 className="text-white italic">
                    MES System Analyst
                </h2>
                <ul className="text-white marker:text-xs list-disc ml-10 mt-2">
                    <li>Support the creation and update of software products that are used by lab technicians 
                        during recipe creation and authorization for physical products using agile methods</li>
                    <li>Responsible for maintaining that users have the appropriate training with the system 
                        as well as appropriate system functionality</li>
                    <li>Evaluate and report existing processes in electronic manufacturing systems and 
                        developing new and more efficient reporting methods</li>
                    <li>Translation and analysis of inventory data from Oracle databases for use in our software products</li>
                </ul>
            </div>
            <div id="exelon">
                <h1 className="text-sky-200 font-semibold">
                    Exelon Generation Company (June 2018-August 2018)
                </h1>
                <h2 className="text-white italic">
                    infrastructure Design & Projects Intern
                </h2>
                <ul className="text-white marker:text-xs list-disc ml-10 mt-2">
                    <li>Supported mentor in the planning and overseeing projects for the network infrastructure team - 
                        sat in on meetings and helped create timeline of deadlines for active projects </li>
                    <li>Gained valuable insight of backend IT practices by interacting with the backend development 
                        group in my free time as well as gaining technical experience with updating and securing applications</li>
                    <li>Took part in group project with 3 other interns regarding sustainability in the workplace where 
                        our presentation won first place overall among the other groups of interns that summer </li>
                </ul>
            </div>
        </div>
    )};

export default Experience;