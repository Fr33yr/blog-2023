"use client";
import { useColorMode } from "../../../hooks/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import sun from '../../../assets/icons/sun-svgrepo-com.svg'
import Image from "next/image";

function ToggleButton() {
  const [colorMode, setColorMode] = useColorMode();

  return (
    <button
      className="ml-12 text-cyan-50 dark:text-black"
      onClick={() => setColorMode(colorMode === "light" ? "dark" : "light")}
    >
      {colorMode === "light" ? (
          <FontAwesomeIcon icon={faMoon} className="text-white"/>
      ) : (
        <span className="rounded-full">
          <Image src={sun} width={25} height={25} alt="sun-icon"/>
        </span>
      )}
    </button>
  );
}

export default ToggleButton;
