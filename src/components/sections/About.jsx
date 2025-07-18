import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const Skills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "TailwindCSS",
    "Bootstrap",
    "React.js",
    "Node.js",
     "Java",
      "Mysql",
       "MongoDB",
        "SQL",
        "REST API",
        "POSTMAN",
        "JWT",
        "GIT"
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">

            
            <p className="text-gray-300 mb-6 text-xl">
               I am a self-taught Front-End Developer with hands-on experience in transforming ideas into fully functional, high-performance applications. I specialize in turning wireframes and design flows into seamless, responsive user interfaces. My work blends creativity, technology, and innovation—bringing projects to life from initial concept through to final release.

Currently, I am expanding my skills and focusing on backend development to become a more versatile and well-rounded developer.
            </p>

            <div className="flex justify-center ">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-2xl font-bold mb-4 px-15 flex justify-center "> Skills</h3>
                <div className="flex flex-wrap gap-5 ">
                  {Skills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-xl hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition 
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-2xl font-bold mb-4"> 🏫 Education </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong className="text-1xl  mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center"> M.Sc Computer Science </strong>
                  <br/> - Sri Manakula Vinaygar Engineering College,
                  Madagadipet Puducherry 
                  (2023-2025)
                
                </li>
              
                 <li>
                  <strong className="text-1xl  mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center"> B.Sc Computer Science </strong>
                  <br/> - Bharathidasan Government College for Women,
                  Muthiyapet Puducherry 
                  (2020-2023)
                </li>
              
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-2xl font-bold mb-4"> 💼 Experience </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    {" "}
                    SQL Developer Intern - <bold className="text-1xl  mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">  Elevate Labs </bold> (Jun 2025 - Present){" "}
                  </h4>
                  <ul>
                    <li>- Possess a strong understanding of relational database concepts and data modelling  principles.</li>
                    <li>- Worked on MySQL-based projects involving end-to-end database development.</li>
                  </ul>
                  
                </div>

                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Web Developer Intern -
                    <bold className="text-1xl  mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">Zidio Development </bold>(Mar 2025 -Apr 2025){" "}
                  </h4>
                  <ul>
                    <li>- Developed a full-stack e-commerce website using MERN stack (MongoDB, Express.js, React.js, Node.js) with 100+ product listings and user authentication features.</li>
                    <li>- Collaborated with a team of 5 developers , focusing on both frontend and backend development.</li>
                  </ul>
                  
                </div>
                  <div>
                  <h4 className="font-semibold">
                    {" "}
                    Web Technology Intern - <bold className="text-1xl  mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">Seyfert InfoTech </bold>(May 2024 -Jun 2024){" "}
                  </h4>
                  <ul>
                    <li>- Designed and Expanded 8+ responsive web pages using HTML, CSS, JavaScript  and Bootstrap.</li>
                  
                  </ul>
                  
                </div>
                  <div>
                  <h4 className="font-semibold">
                    {" "}
                    Cloud Computing Intern - <bold className="text-1xl  mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">Li Creative Technologies </bold> (Mar 2022 -Jun 2022){" "}
                  </h4>
                  <ul>
                    <li>- Configured cloud-based environments ,Exposure to AWS services improving system performance </li>
                  </ul>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
