import React from "react";
import mainimage from "../images/mainimage.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Home = () => {
  return (
    <section id="home" className="dark:bg-gray-700 dark:text-white">
      <div className="container mx-auto p-5 ">
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-14 mt-14">
          <div className="grid md:col-span-1">
            <div className="md:mt-8 mb-6">
              <img
                className="rounded-full h-72 w-72 mx-auto"
                alt="main"
                src={mainimage}
              />
              <br />
              <div className="text-xl font-black font-bold  text-center ">
                Vamshi Edulakanti
              </div>
              <div className="text-xl text-pink-900 text-center dark:text-white">
                UI Developer
              </div>
              <br />
              <div className="grid grid-cols-4 text-center">
                <div>
                  <FontAwesomeIcon
                    className="text-pink-900 dark:text-custom-teal"
                    icon={faEnvelope}
                    size="2x"
                  />
                </div>
                <div>
                  <FontAwesomeIcon
                    className="text-pink-900 dark:text-custom-teal"
                    icon={faGithub}
                    size="2x"
                  />
                </div>
                <div>
                  <FontAwesomeIcon
                    className="text-pink-900 dark:text-custom-teal"
                    icon={faLinkedin}
                    size="2x"
                  />
                </div>
                <div className="text-pink-900 font-bold text-2xl dark:text-custom-teal">
                  CV
                </div>
              </div>
            </div>
          </div>
          <div className="grid col-span-2">
            <div>
              <div className="text-4xl">Summary</div>
              <br />
              <div className="text-md">
                <div>
                  I am UI developer based in Chicago who has been in field for 5
                  years and counting. I have my Masters degree in computer
                  science from University of Central Missouri.{" "}
                </div>
                <br />
                <div>
                  After graduating from college, I followed my passion of
                  becoming a web developer and coding simple and beautiful
                  looking websites. I work hard and keep up with learning all
                  the new Java script frameworks. Currently I am working as a UI
                  developer at American Freight Furniture, where I develop
                  creative, performant and accesible websites.{" "}
                </div>
                <br />
                <div>
                  I enjoy taking complex problems and turning them into simple
                  user interface designs and I love to code using
                  HTML,CSS,JavaScript and React. If I am not coding you will
                  find me at gym or traveling and I also love playing sports.
                </div>
              </div>
            </div>
            <br />
            <div className="grid md:grid-cols-2">
              <div className="mb-4">
                <div className="text-xl font-black">Interests</div>
                <div className="pl-3 pt-3">
                  <li>Web development</li>
                  <li>Headless cms</li>
                  <li>Javascript Technologies </li>
                </div>
              </div>
              <div>
                <div className="text-xl font-black">Education</div>
                <div className="pl-3 pt-3">
                  <FontAwesomeIcon
                    className="text-pink-900 dark:text-custom-teal"
                    icon={faGraduationCap}
                    size="2x"
                  />{" "}
                  &nbsp;&nbsp;
                  <span>Masters in Computer Science, 2016</span>
                  <div className="pl-14 text-sm">
                    <li>University of Central Missouri</li>
                  </div>
                </div>
                <div className="pl-3">
                  <FontAwesomeIcon
                    className="text-pink-900 dark:text-custom-teal"
                    icon={faGraduationCap}
                    size="2x"
                  />{" "}
                  &nbsp;&nbsp;
                  <span className="hidden md:block">
                    Bachelors in Information Technology, 2015
                  </span>
                  <span className="md:hidden lg:hidden ">
                    Bachelors in IT, 2015
                  </span>
                  <div className="pl-14 text-sm">
                    <li>Jawaharlal Nehru Technological University,HYD</li>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
    </section>
  );
};

export default Home;
