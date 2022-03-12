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
      Building, maintaining and publishing open-source Typescript GraphQL integrations for Neo4j the database. 
    `,
    image: Neo4jIcon,
  },
  {
    title: "Software Engineer",
    organization: {
      name: "IMMJ Systems",
      website: "https://immjsystems.com/",
    },
    toFrom: "May 2019 - Sep 2020",
    description: `
      Building an EDM(Electronic Document Management) solution created specifically for UK healthcare.
    `,
    image: IMMJIcon,
  },
  {
    title: "Software Engineer",
    organization: {
      name: "Rocket Connect",
      website: "https://rocketconnect.co.uk",
    },
    toFrom: "Mar 2019 - Present",
    description: `
      Building software solutions.
    `,
    image: RocketConnectIcon,
  },
  {
    title: "Developer",
    organization: {
      name: "Beyond Clicks",
      website: "https://www.beyondclicks.co.uk/",
    },
    toFrom: "Aug 2018 - Mar 2019",
    description: `
      Building analytical PPC(Pay Per Click) dashboards and integrations. 
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
      Building, maintaining and publishing marketing content.
    `,
    image: SilverhookIcon,
  },
];

export function Experience() {
  return (
    <Section id="experience" header="Experience">
      <div className="px-8">
        <ul className="relative border-l-2 border-300">
          {experiences.map((experience) => {
            return (
              <li
                key={experience.title + experience.organization.name}
                className="mb-10 md:mb-20 ml-5 list-none"
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
                  {experience.image && (
                    <img
                      loading="lazy"
                      alt={`${experience.organization.name} Logo`}
                      src={experience.image}
                    ></img>
                  )}
                </span>
                <p className="font-bold">
                  {experience.title} at
                  <a className="ml-1" href={experience.organization.website}>
                    {experience.organization.name}
                  </a>
                </p>
                <p>{experience.description}</p>
                <p>
                  <span>- </span>
                  <time className="text-sm italic font-bold">
                    {experience.toFrom}
                  </time>
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </Section>
  );
}
