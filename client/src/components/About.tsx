import { Section } from "./Section";
// @ts-ignore
import Avatar from "../../public/avatar.jpg";
import { Socials } from "./Socials";
import { SiteMap } from "./Sitemap";

export function About() {
  return (
    <Section id="about">
      <h1>Hi, I'm Dan 👋</h1>
      <h2>I build tools that people love.</h2>
      <div className="flex justify-center flex-wrap md:justify-between md:flex-nowrap">
        <div>
          <p>
            I will collaborate with you and your team to produce products that
            your customers will love. Using modern technology and the latest
            techniques I will seamlessly fit into your organization contributing
            from the get-go.
          </p>
          <p>
            <a href="https://neo4j.com/product/graphql-library/">
              @graphql @neo4j
            </a>
          </p>
          <p>
            <a href="https://rocketconnect.co.uk/">@rocketconnect</a>
          </p>
          <p>GraphQL, TypeScript, Blockchain, Databases</p>
        </div>
        <img
          className="inline object-cover w-64 h-64 mr-2 rounded-full"
          src={Avatar}
          alt="Profile image"
        />
      </div>
      <div className="flex justify-center align-center">
        <Socials></Socials>
      </div>
      <div className="mt-5 sm:mt-0">
        <SiteMap></SiteMap>
      </div>
    </Section>
  );
}
