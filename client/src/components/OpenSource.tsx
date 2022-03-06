import { Section } from "./Section";
import GitHubCalendar from "react-github-calendar";

export function OpenSource() {
  return (
    <Section id="open-source" header="Open Source">
      <ul>
        <li>
          <a href="https://github.com/danstarns">
            https://github.com/danstarns
          </a>
        </li>
      </ul>

      <div className="container mx-auto px-4">
        <h3>Contributions</h3>

        <div className="pt-5">
          <GitHubCalendar username="danstarns" />
        </div>
        <h3>Pinned Projects</h3>
      </div>
    </Section>
  );
}
