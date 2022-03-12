import { Section } from "./Section";
// @ts-ignore
import Neo4jIcon from "../../public/neo4j-icon.svg";
// @ts-ignore
import RocketConnectIcon from "../../public/rocketconnect-icon.svg";
// @ts-ignore
import IMMJIcon from "../../public/immj-icon.png";
// @ts-ignore
import BeyondIcon from "../../public/beyondclicks-icon.png";
// @ts-ignore
import SilverhookIcon from "../../public/silverhook-icon.png";

const experiences = [
  {
    title: "Software Engineer",
    organization: {
      name: "Neo4j",
      website: "https://neo4j.com",
    },
    toFrom: "Sep 2020 - Present",
    description: `
        Building tools that people love.
    `,
    image: Neo4jIcon,
  },
  {
    title: "Software Engineer",
    organization: {
      name: "Rocket Connect",
      website: "https://rocketconnect.co.uk",
    },
    toFrom: "Mar 2019 - Present",
    description: `
        Building tools that people love.
    `,
    image: RocketConnectIcon,
  },
  {
    title: "Software Engineer",
    organization: {
      name: "IMMJ Systems",
      website: "https://immjsystems.com/",
    },
    toFrom: "May 2019 - Sep 2020",
    description: `
        Building tools that people love.
    `,
    image: IMMJIcon,
  },
  {
    title: "Developer",
    organization: {
      name: "Beyond Clicks",
      website: "https://www.beyondclicks.co.uk/",
    },
    toFrom: "Aug 2018 - Mar 2019",
    description: `
        Building tools that people love.
    `,
    image: BeyondIcon,
  },
  {
    title: "Digital Marketing",
    organization: {
      name: "Silver Hook",
      website: "https://silverhook.co.uk/",
    },
    toFrom: "Jan 2018 - Jul 2018",
    description: `
        Building tools that people love.
    `,
    image: SilverhookIcon,
  },
];

export function Experience() {
  return (
    <Section id="experience" header="Experience">
      <div className="px-8">
        <ul className="relative border-l border-black">
          {experiences.map((experience) => {
            return (
              <li
                key={experience.title + experience.organization.name}
                className="mb-10 ml-5 list-none"
              >
                <span
                  className="
                  flex 
                  absolute 
                  -left-8 
                  justify-center 
                  items-center 
                  w-16 
                  h-16 
                  bg-white 
                  border 
                  rounded  
                  shadow 
                  leading-tight  
                  p-3
                  "
                >
                  {experience.image && <img src={experience.image}></img>}
                </span>
                <p style={{ margin: "0.2rem 0" }}>
                  {experience.title} at
                  <a
                    className="m-0 ml-1"
                    href={experience.organization.website}
                  >
                    {experience.organization.name}
                  </a>
                </p>
                <div className="text-xs sm:text-sm m-0 p-0">
                  <time className="block mb-2 leading-none text-gray-400">
                    {experience.toFrom}
                  </time>

                  <p className="mb-4">{experience.description}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </Section>
  );
}
