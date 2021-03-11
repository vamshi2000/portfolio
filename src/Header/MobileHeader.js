import React, { useState } from "react";

const MobileHeader = () => {
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
          </ul>
        </nav>
      )}
    </div>
  );
};

export default MobileHeader;
