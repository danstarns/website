import { Section } from "./Section";
// @ts-ignore
import Avatar from "../img/avatar.jpg";
import { Socials } from "./Socials";
import { SiteMap } from "./Sitemap";

export function About() {
  return (
    <Section id="about">
      <h1>Hi, I'm Dan 👋</h1>
      <h2>I build tools that people love.</h2>
      <div className="flex justify-center flex-wrap md:justify-between md:flex-nowrap">
        <p>
          I will collaborate with you and your team to produce products that
          your customers will love. Using modern technology and the latest
          techniques I will seamlessly fit into your organization contributing
          from the get-go.
        </p>
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
