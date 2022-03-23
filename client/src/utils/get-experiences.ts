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

export interface Experience {
  title: string;
  organization: { name: string; website: string };
  toFrom: string;
  description: string;
  image: any;
}

const experiences: Experience[] = [
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

export const getExperiences = async (): Promise<Experience[]> => {
  return experiences;
};
