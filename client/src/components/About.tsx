import { Section } from "./Section";
// @ts-ignore
import Avatar from "../img/avatar.jpg";

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
      <div>
        <nav>
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href="#open-source">Open Source</a>
            </li>
            <li>
              <a href="#tweets">Tweets</a>
            </li>
            <li>
              <a href="#blog">Blog</a>
            </li>
          </ul>
        </nav>
      </div>
    </Section>
  );
}
