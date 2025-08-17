import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function ThemeToggleComp() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div style={{ textAlign: "center", margin: "20px 0" }}>
      <h3>Current theme: {theme.toUpperCase()}</h3>
      <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "dark" : "light"} theme
      </button>
    </div>
  );
}

export default ThemeToggleComp;
