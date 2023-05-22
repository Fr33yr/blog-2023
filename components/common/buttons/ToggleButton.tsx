"use client";
import { useColorMode } from "../../../hooks/index";

function ToggleButton() {
  const [colorMode, setColorMode] = useColorMode();

  return (
    <button
      className="bg-slate-900 dark:bg-slate-100 text-cyan-50 dark:text-black"
      onClick={() => setColorMode(colorMode === "light" ? "dark" : "light")}
    >
      Toggle theme
    </button>
  );
}

export default ToggleButton;
