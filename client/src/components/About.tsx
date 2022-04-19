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
            Exploring this page you will find a real-time reflection of my
            content. Keep scrolling to find more out about my;{" "}
            <a href="#blog">latest blogs</a>,{" "}
            <a href="#open-source">open-source work</a> and{" "}
            <a href="#tweets">tweets</a>. This site is also open source and you
            can checkout the source code{" "}
            <a href="https://github.com/danstarns/website">here</a>.
          </p>
          <p>
            <a href="https://prisma.io">@prisma</a>
          </p>
          <p>
            <a href="https://rocketconnect.co.uk/">@rocketconnect</a>
          </p>
          <p>GraphQL, TypeScript, Blockchains, Databases, Investments, Life</p>
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
