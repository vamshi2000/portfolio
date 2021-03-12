import React, { useEffect } from "react";
import Main from "./Main";

const App = () => {
  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      debugger;
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  });
  return (
    <main id="app">
      <Main />
    </main>
  );
};

export default App;
