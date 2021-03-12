import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faLightbulb } from "@fortawesome/free-solid-svg-icons";

const DesktopHeader = () => {
  const handleThemeToggle = (e) => {
    debugger;
    if (e.target.checked === true) {
      document.body.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.body.classList.remove("dark");
      localStorage.theme = "light";
    }
  };
  return (
    <div className="grid md:grid-cols-2">
      <div className="font-bold text-3xl">Vamshi Edulakanti</div>
      <div>
        <nav className="mt-1.5 ">
          <ul className="grid md:grid-cols-5 ">
            <div className="text-center">
              <li className="hover:text-green-500">
                <a href="/">HOME</a>
              </li>
            </div>
            <div className="text-center">
              <li className="hover:text-green-500">
                <a href="#skills">SKILLS</a>
              </li>
            </div>
            <div className="text-center">
              <li className="hover:text-green-500">
                <a href="/projects">PROJECTS</a>
              </li>
            </div>
            <div className="text-center">
              <li className="hover:text-green-500">
                <a href="/contact">CONTACT</a>
              </li>
            </div>
            <div>
              <span>
                {" "}
                <FontAwesomeIcon
                  className="text-pink-900 dark:text-custom-teal"
                  icon={faLightbulb}
                  size="2x"
                />
              </span>
              <span>
                <div class="relative inline-block m-1 w-10 select-none transition duration-200 ease-in">
                  <input
                    type="checkbox"
                    name="toggle"
                    id="toggle"
                    onChange={(e) => {
                      handleThemeToggle(e);
                    }}
                    defaultChecked={
                      localStorage.theme === "dark" ||
                      window.matchMedia("(prefers-color-scheme: dark)").matches
                    }
                    className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 focus:outline-none appearance-none cursor-pointer"
                  />
                  <label
                    for="toggle"
                    className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
                  ></label>
                </div>
              </span>
              <span>
                {" "}
                <FontAwesomeIcon className="" icon={faMoon} size="2x" />
              </span>
            </div>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default DesktopHeader;
