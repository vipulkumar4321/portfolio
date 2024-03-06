import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Social from "../components/Social";
import background from "../assets/background.webp";
import resume from "../assets/Resume_Vipul_Kumar.pdf";

const Home = () => {
  return (
    <div
      style={{
        backgroundImage: `url('${background}'`,
        backgroundSize: "cover",
      }}
    >
      <main
        className="mx-auto max-w-7xl px-4  md:mt-0  flex flex-col md:flex-row items-center justify-center h-screen"
        id="/"
      >
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold justify-center sm:text-5xl md:text-6xl">
            <span className="text-gray-100">Hi, I am Vipul</span>
            <span className="text-blue-500 block">
              <Typewriter
                words={[
                  "Software Engineer",
                  "Front End Developer",
                  "Back End Developer",
                  "Full Stack Developer",
                ]}
                loop={Infinity}
                cursor
                cursorStyle="_"
                typeSpeed={60}
                deleteSpeed={70}
                delaySpeed={1800}
              />
            </span>
          </h1>
          <p
            className={
              "mt-3 text-base text-gray-100 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
            }
          >
            I am an engineer experienced in delivering high-quality code and
            successfully executing projects.
          </p>
          <Social />

          <div className="mt-8 flex justify-center">
            <a
              href={resume}
              target="_blank"
              rel="noreferrer"
              // download="MyExampleDoc"
              className="cursor-pointer relative border font-bold focus:ring-4 focus:outline-none focus:ring-blue-300 text-gray-100 bg-blue-500 hover:bg-gray-100 hover:text-blue-500 rounded-xl md:text-xl py-2 px-4 md:py-4 md:px-8 flex items-center"
            >
              <span className="mr-2">Resume</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 122.88 110.9"
                fill="currentColor"
              >
                <g>
                  <path
                    class="st0"
                    d="M13.09,35.65h30.58V23.2l34.49,0v12.45l31.47,0L61.39,82.58L13.09,35.65L13.09,35.65z M61.44,97.88l47.51-0.14 l4.54-21.51l9.38,0.31v34.36L0,110.9V76.55l9.39-0.31l4.54,21.51L61.44,97.88L61.44,97.88L61.44,97.88z M43.67,0h34.49v4.62H43.67 V0L43.67,0z M43.67,9.32h34.49v9.44H43.67V9.32L43.67,9.32z"
                  />
                </g>
              </svg>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
