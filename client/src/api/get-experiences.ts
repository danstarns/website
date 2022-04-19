// @ts-ignore
import PrismaIcon from "../../public/prisma-icon.svg";
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
  description: string;
  image: any;
}

const experiences: Experience[] = [
  {
    title: "Software Engineer",
    organization: {
      name: "Prisma",
      website: "https://prisma.io",
    },
    description: `
      Building, maintaining and publishing open-source Typescript tools that make working with databases easy.
    `,
    image: PrismaIcon,
  },
  {
    title: "Software Engineer",
    organization: {
      name: "Neo4j",
      website: "https://neo4j.com",
    },
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
    description: `
      Building software solutions plus providing consulting and training.
    `,
    image: RocketConnectIcon,
  },
  {
    title: "Developer",
    organization: {
      name: "Beyond Clicks",
      website: "https://www.beyondclicks.co.uk/",
    },
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
    description: `
      Building, maintaining and publishing marketing content.
    `,
    image: SilverhookIcon,
  },
];

export const getExperiences = async (): Promise<Experience[]> => {
  return experiences;
};
