import { faBookmark, faStar, faCodeBranch } from "../icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface Props {
  name: string;
  url: string;
  description: string;
  primaryLanguage: { color: string; name: string };
  stargazerCount: number;
  forkCount: number;
}

export function Repo(props: Props) {
  return (
    <div
      key={props.name}
      className="
        text-xs
        sm:text-sm 
        w-full 
        border 
        rounded  
        overflow-hidden 
        shadow 
        leading-tight 
        pt-0 
        p-3
        flex flex-col justify-between
        "
    >
      <div>
        <p>
          <FontAwesomeIcon className="m-0" size="1x" icon={faBookmark} />
          <a className="ml-3" href={props.url}>
            {props.name}
          </a>
        </p>
        <p>{props.description}</p>
      </div>
      <div className="flex-col sm:flex-row sm:flex sm:justify-start inset-x-0 bottom-0">
        <p className="flex flex-row">
          <span
            style={{ background: props.primaryLanguage.color }}
            className="w-3 h-3 rounded-full sm:mt-1 mr-1"
          ></span>
          <span>{props.primaryLanguage.name}</span>
        </p>
        <p className="sm:ml-3">
          <FontAwesomeIcon className="m-0 mr-1" size="1x" icon={faStar} />
          <span className="mr-1">{props.stargazerCount}</span>
          <span className="sm:hidden">Stars</span>
        </p>
        <p className="sm:ml-3">
          <FontAwesomeIcon size="1x" className="mr-1" icon={faCodeBranch} />
          <span className="mr-1">{props.forkCount}</span>
          <span className="sm:hidden mr-1">Forks</span>
        </p>
      </div>
    </div>
  );
}
