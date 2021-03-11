import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <section id="footer" className="dark:bg-gray-700 dark:text-white">
      <div className="container mx-auto">
        <div className="grid col-span-1 p-14 pb-5">
          <div className="text-center">
            {"Vamshi Edulakanti "}
            <span>
              <FontAwesomeIcon
                className="text-pink-900 dark:text-custom-teal"
                icon={faCopyright}
              />
              {" 2021"}
            </span>
          </div>
          <div className="text-right mb-3">
            <FontAwesomeIcon
              className="text-pink-900 dark:text-custom-teal"
              icon={faChevronUp}
              size="3x"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
