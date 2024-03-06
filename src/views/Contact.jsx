import React from "react";
import Social from "../components/Social";

const Contact = () => {
  return (
    <div id="contact" className={"bg-gray-950 pt-24 text-gray-100 md:h-screen"}>
      <div className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4 ">
        <h2 className="text-5xl font-bold px-4 md:px-0 text-center z-0">
          Contact
        </h2>
        <div>
          <h1 className="mt-16 text-3xl font-bold text-blue-500">
            Connect with me
          </h1>
        </div>
        <div className="flex justify-between items-center md:items-stretch  flex-col md:flex-row pb-24">
          <div className="w-full md:pr-8">
            <form
              action="mailto:vipulkumar4321@gmail.com"
              method="post"
              enctype="text/plain"
            >
              <div class="my-6">
                <label
                  for="name"
                  class={"block mb-2 text-lg font-medium text-gray-100"}
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-100 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  for="email"
                  class={"block mb-2 text-lg font-medium text-gray-100"}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-100 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  for="message"
                  class={"block mb-2 text-lg font-medium text-gray-100"}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  class="bg-gray-50 border border-gray-300 text-gray-900 h-28 w-full text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-100 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter your message"
                  required
                />
              </div>
              <div className="flex justify-between ">
                <div className="underline">
                  <a href="mailto:vipulkumar4321@gmail.com">
                    vipulkumar4321@gmail.com
                  </a>
                </div>
                <button
                  type="submit"
                  value="send"
                  className="bg-blue-500 font-bold text-gray-100 px-4 py-2 w-40 rounded-md hover:bg-gray-100 hover:text-blue-500"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div className="w-full flex flex-col md:items-end  mt-12 md:mt-6">
            <h1 className="text-3xl font-bold text-blue-500">Let's connect!</h1>
            <p className="mb-12 mt-4 font-semibold md:text-right ">
              If you have any suggestion, feedback, opportunity, or are
              interested in collaborating on a project, I would love to hear
              from you! Please feel free to reach out to me using the contact
              details provided below.
            </p>
            <h1 className="text-3xl font-bold text-blue-500">Location</h1>
            <p className="mb-12 mt-4 font-semibold uppercase md:text-right ">
              Bangalore, India
            </p>

            <h1 className="text-3xl font-bold text-blue-500">Links</h1>
            <Social />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
