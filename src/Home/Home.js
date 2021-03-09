import React from "react";
import mainimage from "../images/mainimage.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Home = () => {
  return (
    <section id="home">
      <div className="container mx-auto p-5 mt-14">
        <div className="grid grid-cols-3 gap-14">
          <div className="grid col-span-1">
            <div className="mt-8">
              <img className="rounded-full h-72 w-72 mx-auto" src={mainimage} />
              <br />
              <div className="text-xl font-black font-bold  text-center">
                Vamshi Edulakanti
              </div>
              <div className="text-xl text-pink-900 text-center">
                UI Developer
              </div>
              <br />
              <div className="grid grid-cols-4 text-center">
                <div>
                  <FontAwesomeIcon
                    className="text-pink-900"
                    icon={faEnvelope}
                    size="2x"
                  />
                </div>
                <div>
                  <FontAwesomeIcon
                    className="text-pink-900"
                    icon={faGithub}
                    size="2x"
                  />
                </div>
                <div>
                  <FontAwesomeIcon
                    className="text-pink-900"
                    icon={faLinkedin}
                    size="2x"
                  />
                </div>
                <div className="text-pink-900 font-bold text-2xl">CV</div>
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
            <div className="grid grid-cols-2">
              <div>
                <div className="text-xl font-black font-bold">Interests</div>
                <div className="pl-3 pt-3">
                  <li>Web development</li>
                  <li>Headless cms</li>
                  <li>Javascript Technologies </li>
                </div>
              </div>
              <div>
                <div className="text-xl font-black font-bold">Education</div>
                <div className="pl-3 pt-3">
                  <FontAwesomeIcon
                    className="text-pink-900"
                    icon={faGraduationCap}
                    size="2x"
                  />{" "}
                  &nbsp;&nbsp;
                  <span>MS in computer science, 2016</span>
                  <div className="pl-14 text-sm">
                    <li>University of Central Missouri</li>
                  </div>
                </div>
                <div className="pl-3">
                  <FontAwesomeIcon
                    className="text-pink-900"
                    icon={faGraduationCap}
                    size="2x"
                  />{" "}
                  &nbsp;&nbsp;
                  <span>BTech in Information Technology, 2015</span>
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
      <br />
      <br />
    </section>
  );
};

export default Home;
