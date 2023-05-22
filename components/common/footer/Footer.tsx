

function Footer() {
  return (
    <footer className="flex flex-col justify-center items-center">
        <ul className="w-96 flex flex-row justify-between">
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
        <div className="my-8">
            <h3>Builded with Next 13</h3>
        </div>
    </footer>
  )
}

export default Footer