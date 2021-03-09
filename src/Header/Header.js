import React from "react";

const Header = () => {
  return (
    <header id="header" className="bg-gray-100">
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-2">
          <div className="font-bold text-3xl">Vamshi Edulakanti</div>
          <div>
            <nav className="mt-1.5 ">
              <ul className="grid grid-cols-5">
                <li className="hover:text-green-500">
                  <a href="/">HOME</a>
                </li>
                <li className="hover:text-green-500">
                  <a href="/skills">SKILLS</a>
                </li>
                <li className="hover:text-green-500">
                  <a href="/projects">PROJECTS</a>
                </li>
                <li className="hover:text-green-500">
                  <a href="/resume">RESUME</a>
                </li>
                <li className="hover:text-green-500">
                  <a href="/contact">CONTACT</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
