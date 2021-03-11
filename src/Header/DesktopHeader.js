import React from "react";

const DesktopHeader = () => {
  return (
    <div className="grid md:grid-cols-2">
      <div className="font-bold text-3xl">Vamshi Edulakanti</div>
      <div>
        <nav className="mt-1.5 ">
          <ul className="grid md:grid-cols-5 text-center">
            <div>
              <li className="hover:text-green-500">
                <a href="/">HOME</a>
              </li>
            </div>
            <div>
              <li className="hover:text-green-500">
                <a href="#skills">SKILLS</a>
              </li>
            </div>
            <div>
              <li className="hover:text-green-500">
                <a href="/projects">PROJECTS</a>
              </li>
            </div>
            <div>
              <li className="hover:text-green-500">
                <a href="/contact">CONTACT</a>
              </li>
            </div>
            <div></div>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default DesktopHeader;
