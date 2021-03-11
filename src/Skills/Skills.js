import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faJava, faAws } from "@fortawesome/free-brands-svg-icons";
import { faPencilRuler, faDatabase } from "@fortawesome/free-solid-svg-icons";

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-blue-50 dark:bg-gray-800 dark:text-white"
    >
      <div className="container mx-auto pt-24 pb-24">
        <div className="grid grid-cols-1">
          <div>
            <div className="text-4xl text-center">Skills</div>
            <br />
            <br />
            <div className="grid md:grid-cols-3 md:gap-20 text-center">
              <div className="mb-4">
                <FontAwesomeIcon
                  className="text-pink-900 dark:text-custom-teal mb-1"
                  icon={faReact}
                  size="6x"
                />
                <div className="text-2xl p-1">React JS Frameworks</div>
                <div>React, Gatsby, Next JS</div>
              </div>
              <div className="mb-4">
                <FontAwesomeIcon
                  className="text-pink-900 dark:text-custom-teal mb-1"
                  icon={faJava}
                  size="6x"
                />
                <div className="text-2xl p-1">Java</div>
                <div>Spring Boot, Spring Mvc</div>
              </div>
              <div className="mb-4">
                <FontAwesomeIcon
                  className="text-pink-900 dark:text-custom-teal mb-1"
                  icon={faAws}
                  size="6x"
                />
                <div className="text-2xl p-1">Cloud Services</div>
                <div>Code pipeline, Code commit, Cloud Watch </div>
              </div>
            </div>
            <br className="hidden md:block" />
            <br className="hidden md:block" />
            <div className="grid md:grid-cols-3 md:gap-20 text-center">
              <div className="mb-4">
                <FontAwesomeIcon
                  className="text-pink-900 dark:text-custom-teal mb-1"
                  icon={faPencilRuler}
                  size="6x"
                />
                <div className="text-2xl p-1">Design</div>
                <div>Adobe XD, Sketch, Figma </div>
              </div>
              <div className="mb-4">
                <FontAwesomeIcon
                  className="text-pink-900 dark:text-custom-teal mb-1"
                  icon={faDatabase}
                  size="6x"
                />
                <div className="text-2xl p-1">Database</div>
                <div>MySql, PostgreSql </div>
              </div>
              <div className="mb-4">
                <FontAwesomeIcon
                  className="text-pink-900 dark:text-custom-teal mb-1"
                  icon={faDatabase}
                  size="6x"
                />
                <div className="text-2xl p-1">Database</div>
                <div>MySql, PostgreSql </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
