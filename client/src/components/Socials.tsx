import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faTwitterSquare, faMedium } from "../icons";

export function Socials() {
  return (
    <div className="flex-row justify-between">
      <a className="m-5" href="https://github.com/danstarns">
        <FontAwesomeIcon
          className="hover:text-purple-500"
          icon={faGithub}
          size="2x"
        />
      </a>
      <a className="m-5" href="https://twitter.com/dan_starns">
        <FontAwesomeIcon
          className="hover:text-blue-500"
          icon={faTwitterSquare}
          size="2x"
        />
      </a>
      <a className="m-5" href="https://www.linkedin.com/in/danielstarns/">
        <FontAwesomeIcon
          className="hover:text-blue-500"
          icon={faLinkedin}
          size="2x"
        />
      </a>
      <a className="m-5" href="https://medium.com/@danstarns">
        <FontAwesomeIcon
          className="hover:text-green-500"
          icon={faMedium}
          size="2x"
        />
      </a>
    </div>
  );
}
