import Link from "next/link";

function Navigator() {
  return (
    <header>
      <nav className="w-full flex flex-row justify-center my-12">
        <ul className="w-96 flex flex-row justify-between">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <a href={"https://github.com/Fr33yr"} target="_blank">
              Github
            </a>
          </li>
          <li>
            <a href={"https://twitter.com/AgustinCristobo"} target="_blank">
              Twitter
            </a>
          </li>
          <li>
            <a
              href={"https://www.linkedin.com/in/agustin-cristobo/"}
              target="_blank"
            >
              Linkedin
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigator;
