"use client";
import { useEffect } from "react";
import { useLocalStorage } from "./index";

function useColorMode() {
  const [colorMode, setColorMode] = useLocalStorage("color-mode", "light");

  useEffect(() => {
    const clasName = "dark";
    const bodyClasses = window.document.body.classList;

    colorMode === "dark"
      ? bodyClasses.add(clasName)
      : bodyClasses.remove(clasName);
  }, [colorMode]);

  return [colorMode, setColorMode];
}

export default useColorMode;
