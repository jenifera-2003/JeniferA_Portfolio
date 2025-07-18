import { RevealOnScroll } from "../RevealOnScroll";
export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">
            Hi, I am <span className="text-3x bg-white bg-clip-text text-transparent text-center lg:inline">Jenifer</span>
            <br />
             
              {/*
              <span className="text-3x bg-white bg-clip-text text-transparent text-center lg:inline">
                <Typical
                  steps={[
                    "Front End Developer",
                    1000,
                    "Software Developer",
                    1000,
                  ]}
                  loop={Infinity}
                />
              </span>
              */}
              {/*
            <strong className="text-3x bg-white bg-clip-text text-transparent text-center">Jenifer </strong>*/}
          </h1>
          <div className="mt-4 text-2xl">
            
         {/*
         <Typed strings={['Frontend Developer','Software Developer']} typeSpeed={60} backSpeed={40} loop/>
         */} 

          </div>

          <p className="tex-gray-400 text-lg mb-8 max-w-lg mx-auto">
            I am a Front-End /Software Developver with a passion for building clean and responsive web applications.
            I am currently seeking exciting job opportunities...!
     
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="https://drive.google.com/file/d/1OfhwL-QOJmY9o_kkA0b5eODdSBKaLiH3/view?usp=sharing"
               target="_blank"  rel="noreferrer" 
              className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
            >
              Resume
            </a>

            <a
              href="#contact"
              className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 
             hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
