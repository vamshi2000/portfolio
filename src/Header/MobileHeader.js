import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faLightbulb } from "@fortawesome/free-solid-svg-icons";

const MobileHeader = () => {
  const handleThemeToggler = (e) => {
    debugger;
    if (e.target.checked === true) {
      document.body.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.body.classList.remove("dark");
      localStorage.theme = "light";
    }
  };
  const [showMenu, showMenuSetter] = useState(false);
  return (
    <div className="grid grid-cols-4 md:hidden lg:hidden">
      <div className="grid col-span-3">
        <div className="font-bold text-3xl">Vamshi Edulakanti</div>
      </div>
      <div className="col-span-1 pl-7 text-center">
        <button
          className=" overflow-hidden"
          onClick={() => {
            showMenuSetter(!showMenu);
          }}
        >
          <svg className="h-8 w-12 fill-current" viewBox="0 0 24 24">
            <path
              fill="#121212"
              d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
            />
          </svg>
        </button>
      </div>
      {showMenu === true && (
        <nav className="mt-1.5">
          <ul className="grid grid-col-1  text-right mr-5 pr-8 bg-white absolute left-0 w-full">
            <div className="p-2">
              <li className="hover:text-green-500">
                <a href="/">HOME</a>
              </li>
            </div>
            <div className="p-2">
              <li className="hover:text-green-500">
                <a href="#skills">SKILLS</a>
              </li>
            </div>
            <div className="p-2">
              <li className="hover:text-green-500">
                <a href="/projects">PROJECTS</a>
              </li>
            </div>
            <div className="p-2">
              <li className="hover:text-green-500">
                <a href="/contact">CONTACT</a>
              </li>
            </div>
            <div className="p-2">
              <li className="hover:text-green-500">
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
                        handleThemeToggler(e);
                      }}
                      defaultChecked={
                        localStorage.theme === "dark" ||
                        window.matchMedia("(prefers-color-scheme: dark)")
                          .matches
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
              </li>
            </div>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default MobileHeader;
