import React from "react";
import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";

const Header = () => {
  return (
    <header id="header" className="bg-gray-100 sticky top-0 dark:bg-white">
      <div className="container mx-auto p-4">
        <div className="hidden md:block">
          <DesktopHeader />
        </div>
        <MobileHeader />
      </div>
    </header>
  );
};

export default Header;
