import { Section } from "./Section";
// @ts-ignore
import Avatar from "../../public/avatar.jpg";
import { Socials } from "./Socials";

export function About() {
  return (
    <Section id="about">
      <div className="w-100 mx-auto">
        <div className="flex justify-center flex-wrap md:justify-between md:flex-nowrap">
          <div className="">
            <h1>Hi, I'm Dan 👋</h1>
            <Socials />
            <div>
              <p>GraphQL, TypeScript, Databases</p>
              <p>
                Currently Building {""}
                <a href="https://spreadzword.com/">@spreadzword</a>
              </p>
              <p>
                Former Engineer at <a href="https://prisma.io/">@prisma</a> &{" "}
                <a href="https://www.neo4j.com/">@neo4j</a>
              </p>
              <p>Speaker 🗣️ OSS 👨‍💻</p>

              <a href="mailto:me@danielstarns.com">me@danielstarns.com</a>
            </div>
          </div>
          <img
            className="inline object-cover w-64 h-64 rounded-full"
            src={Avatar}
            alt="Profile image"
          />
        </div>
      </div>
    </Section>
  );
}
