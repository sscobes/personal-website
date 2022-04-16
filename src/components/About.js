import React from "react";

function About() {
    return (
    <div className="pb-60">
        <div className="flex flex-col xl:ml-[240px] 2xl:ml-[480px] ml-16 pt-[200px] space-y-3 transition-all ease-linear duration-[250ms]" id="about">
            <header>
                <h2 className="font-semibold text-3xl text-white">
                    About Me
                </h2>
            </header>
            <div className="w-[590px] text-sky-200 text-lg">  
                <p className="mb-4">
                    I'm a Computer Engineering graduate from Penn State University with a focus in Cybersecurity 
                    with a passion for Full-Stack and Web3 Development.
                </p>
                <p className="mb-4">
                    I have been obsessed with the internet and technology ever since I was a young kid,
                    from building my own computer many times over to making my own custom plugins for games I played.
                </p>
                <p className="mb-4">
                    This leads us to today, where I continue to hone my Full-Stack Development skills, 
                    as well as learning new skills with the rise of Web3 technologies.
                </p>
                <p className="mb-4">
                    Some of the technologies I use: 
                </p>
            </div>
        </div>
        <div className="xl:ml-[240px] 2xl:ml-[480px] ml-16 text-lg h-[120px] w-[600px] transition-all ease-linear duration-[250ms]">
            <ul className="grid grid-cols-3 list-disc marker:text-xs ml-4 text-white">
                <li>Javascript</li>
                <li>Python</li>
                <li>Solidity</li>
                <li>Typescript</li>
                <li>Node</li>
                <li>Ethers.js</li>
                <li>React</li>
                <li>Express</li>
                <li>Web3.js</li>
                <li>TailwindCSS</li>
                <li>MongoDB</li>
                <li>Rust</li>
                <li>Next.js</li>
                <li>Oracle</li>
                <li>Git</li>
            </ul>
        </div>
    </div>
    )
};

export default About;