import React from "react";
import { motion } from "framer-motion";

const Card = ({ title, tech, content, link, live, img }) => {
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
      <img class="rounded-t-lg w-full" src={img} alt="project" />

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

        <div className="flex">
          {live && (
            <a
              href={live}
              className="inline-flex mr-4 items-center py-2 px-3 text-sm font-bold text-center text-gray-100 bg-green-500 rounded-lg hover:bg-gray-100 hover:text-green-500 focus:ring-4 focus:outline-none focus:ring-green-300"
              target="_blank"
              rel="noreferrer"
            >
              Live Link
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2 -mr-1 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M 19.980469 2.9902344 A 1.0001 1.0001 0 0 0 19.869141 3 L 15 3 A 1.0001 1.0001 0 1 0 15 5 L 17.585938 5 L 8.2929688 14.292969 A 1.0001 1.0001 0 1 0 9.7070312 15.707031 L 19 6.4140625 L 19 9 A 1.0001 1.0001 0 1 0 21 9 L 21 4.1269531 A 1.0001 1.0001 0 0 0 19.980469 2.9902344 z M 5 3 C 3.9069372 3 3 3.9069372 3 5 L 3 19 C 3 20.093063 3.9069372 21 5 21 L 19 21 C 20.093063 21 21 20.093063 21 19 L 21 13 A 1.0001 1.0001 0 1 0 19 13 L 19 19 L 5 19 L 5 5 L 11 5 A 1.0001 1.0001 0 1 0 11 3 L 5 3 z"></path>
              </svg>
            </a>
          )}
          <a
            href={link}
            className="inline-flex items-center mr-4 py-2 px-3 text-sm font-bold text-center text-gray-100 bg-blue-500 rounded-lg hover:bg-gray-100 hover:text-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300"
            target="_blank"
            rel="noreferrer"
          >
            View Code
            <svg
              className="ml-2 -mr-1 w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
