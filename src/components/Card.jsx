import React from "react";
import { motion } from "framer-motion";
import projectPic from "../assets/projectPic.webp";

const Card = ({ title, tech, content, link, img }) => {
  const bubbleColors = [
    "bg-blue-700",
    "bg-green-700",
    "bg-yellow-700",
    "bg-red-700",
    "bg-purple-700",
  ];
  return (
    <motion.div
      initial={"hidden"}
      whileInView={"visible"}
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
      class="max-w-xl bg-white rounded-lg border border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-700 my-8"
    >
      <img class="rounded-t-lg w-full" src={projectPic} alt="project" />
      {/* <img class="rounded-t-lg w-full" src={img} alt="project" /> */}

      <div class="p-5">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
          {title}
        </h5>

        {tech.map((data, index) => (
          <span
            key={index}
            className={`inline-block px-2 py-1 m-1 rounded-lg ${
              bubbleColors[index % bubbleColors.length]
            }`}
          >
            <span className="text-neon">{data}</span>
          </span>
        ))}

        {content.map((data, index) => (
          <p
            key={index}
            class="mb-3 font-normal text-gray-700 dark:text-gray-400"
          >
            {data}
          </p>
        ))}

        <a
          href={link}
          class="inline-flex items-center py-2 px-3 text-sm font-bold text-center text-gray-100 bg-blue-500 rounded-lg hover:bg-gray-100 hover:text-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300"
          target="_blank"
          rel="noreferrer"
        >
          Read more
          <svg
            class="ml-2 -mr-1 w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
    </motion.div>
  );
};

export default Card;
