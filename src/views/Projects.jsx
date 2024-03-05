import React from "react";
import Card from "../components/Card";
import { projects } from "../constants";

const Projects = () => {
  return (
    <div id="projects" className="bg-gray-900 text-gray-100">
      <div className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4  pt-24 pb-12">
        <h2 className="text-5xl font-bold px-4 md:px-0 text-center">
          Projects
        </h2>
        <h4 className="mt-16 text-3xl font-bold text-blue-500">My Creations</h4>
        <div className="mt-8 flex justify-between items-stretch flex-wrap">
          {projects.map((project, index) => (
            <Card key={index} {...project} />
          ))}
        </div>
        <a
          href="https://github.com/vipulkumar4321"
          class=" w-32 flex items-center py-4 px-4 text-sm font-bold text-center text-gray-100 bg-blue-500 rounded-lg hover:bg-gray-100 hover:text-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 mx-auto mt-4"
          target="_blank"
          rel="noreferrer"
        >
          Show More
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
    </div>
  );
};

export default Projects;
