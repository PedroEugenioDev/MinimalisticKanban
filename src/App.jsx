import { useState } from "react";
import KanbanBoard from "./Components/KanbanBoard";
import { KanbanContextProvider } from "./context/KanbanContext";
import lightIcon from '/themes/light-theme-icon.svg';
import darkIcon from '/themes/dark-theme-icon.svg';

export default function App() {
  const [theme, setTheme] = useState("light-theme")
  const themeBtnHandler = () => {
    if(theme == "light-theme"){
      setTheme("dark-theme");
    }else{
      setTheme("light-theme")
    }
  }

  return (
    <>
      <KanbanContextProvider>
        <div className={`screen ${theme}`} >
          <button className="themeBtn" onClick={themeBtnHandler}>
            <img 
              src={theme === "light-theme" ?  lightIcon : darkIcon} 
              alt="Theme Icon" 
              className="icon" 
            />
          </button>
          <KanbanBoard />
        </div>
      </KanbanContextProvider>
    </>
  );
}
