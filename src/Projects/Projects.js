import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const Projects = () => {
  return (
    <section className="dark:bg-gray-700 dark:text-white" id="projects">
      <div className="container mx-auto pt-24 pb-14">
        <div className="grid md:grid-cols-3">
          <div className="grid col-span-1">
            <div className="text-4xl text-center p-5">Projects</div>
          </div>
          <div className="grid col-span-2 p-5 ">
            <div className="grid grid-cols-5 gap-10">
              <div className="grid col-span-1 mx-auto ">
                <br />
                <FontAwesomeIcon
                  className="text-pink-900 dark:text-custom-teal"
                  icon={faCircle}
                  size="2x"
                />
                <div className="border-l-2 mx-auto"></div>
              </div>
              <div className="grid col-span-4 border p-5 pl-8 rounded-lg shadow-md hover:shadow-xl dark:bg-gray-500 dark:border-gray-500">
                <div className="text-2xl font-bold">UI Developer</div>
                <div>American Freight Furniture</div>
                <div className="font-light">
                  Aug-2017 - Present . Chicago, IL
                </div>
              </div>
            </div>
            <div className="grid grid-cols-5 gap-10 mt-14 ">
              <div className="grid col-span-1 mx-auto ">
                <div className="border-l-2 mx-auto"></div>
                <FontAwesomeIcon
                  className="text-pink-900 mt-5 dark:text-custom-teal"
                  icon={faCheckCircle}
                  size="2x"
                />
                <div className="border-l-2 mx-auto"></div>
              </div>
              <div className="grid col-span-4 border p-5 pl-8 rounded-lg shadow-md hover:shadow-xl dark:bg-gray-500 dark:border-gray-500">
                <div className="text-2xl font-bold">
                  Java UI Fullstack Developer
                </div>
                <div>University of Chicago Medicine</div>
                <div className="font-light">
                  Jan-2017 - Aug 2017 . Chicago, IL
                </div>
              </div>
            </div>
            <div className="grid grid-cols-5 gap-10 mt-14 ">
              <div className="grid col-span-1 mx-auto ">
                <div className="border-l-2 mx-auto"></div>
                <FontAwesomeIcon
                  className="text-pink-900 mt-5 dark:text-custom-teal"
                  icon={faCheckCircle}
                  size="2x"
                />
                <div className="border-l-2 mx-auto"></div>
              </div>
              <div className="grid col-span-4 border p-5 pl-8 rounded-lg shadow-md hover:shadow-xl dark:bg-gray-500 dark:border-gray-500">
                <div className="text-2xl font-bold">
                  Java UI Full Stack Developer
                </div>
                <div>Call one Corporation</div>
                <div className="font-light">
                  Jul-2016 - Jan 2017 . Chicago, IL
                </div>
              </div>
            </div>
            <div className="grid grid-cols-5 gap-10 mt-14 ">
              <div className="grid col-span-1 mx-auto ">
                <div className="border-l-2 mx-auto"></div>
                <FontAwesomeIcon
                  className="text-pink-900 mt-5 dark:text-custom-teal"
                  icon={faCheckCircle}
                  size="2x"
                />
                <div className="border-l-2 mx-auto"></div>
              </div>
              <div className="grid col-span-4 border p-5 pl-8 rounded-lg shadow-md hover:shadow-xl dark:bg-gray-500 dark:border-gray-500">
                <div className="text-2xl font-bold">UI Developer(Intern)</div>
                <div>Seef IT Technologies</div>
                <div className="font-light">
                  Aug-2014 - June 2015 . Chicago, IL
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
