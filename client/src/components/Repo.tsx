import { faBookmark } from "../icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Repo } from "../api/get-repos";

export function Repo(props: Repo) {
  return (
    <div
      key={props.name}
      className="
        text-xs
        sm:text-base
        w-full 
        bg-white
        border 
        rounded  
        overflow-hidden 
        shadow 
        leading-tight 
        p-3
        flex flex-col justify-between
        "
    >
      <div>
        <p className="remove-p-margin-x">
          <FontAwesomeIcon size="1x" icon={faBookmark} />
          <a className="ml-3" href={props.url}>
            {props.name}
          </a>
        </p>
      </div>
      <p className="my-3">{props.description}</p>
      <p className="flex flex-row remove-p-margin-x">
        <span
          style={{ background: props.primaryLanguage.color }}
          className="w-3 h-3 rounded-full mr-1 sm:mt-1"
        ></span>
        <span>{props.primaryLanguage.name}</span>
      </p>
    </div>
  );
}
