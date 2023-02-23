import React from "react";
import { ThemeContext } from "./utility/theme_context";
import {Outlet} from "react-router-dom";
import Header from "./Components/Header";
function App() {
  

  const isBrowserDefaultDark = () => window.matchMedia('(prefers-color-scheme: dark)').matches;
  const getDefaultTheme = ()=> {
    const localStorageTheme = localStorage.getItem('default-theme');
    const browserDefault = isBrowserDefaultDark() ? 'dark' : 'light';
    if(!localStorageTheme)
      localStorage.setItem("Theme",browserDefault)
    return localStorageTheme || browserDefault;
  };
  const [theme, setTheme] = React.useState(getDefaultTheme());
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`${theme === "dark" ? "theme-dark" : "theme-light"}`}>
      <Header/>
      <Outlet/>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
