// @ts-ignore
import GraphQLTalk from "../../public/graphql-talk.png";
// @ts-ignore
import Microsoft from "../../public/microsoft-talk.jpeg";
// @ts-ignore
import JSMonthly from "../../public/js-monthly-talk.png";
import { Section } from "./Section";

function YoutubeEmbed({ embedId }) {
  return (
    <div className="p-3 bg-white rounded border shadow leading-tight">
      <div className="aspect-w-16 aspect-h-9">
        <iframe
          src={`https://www.youtube.com/embed/${embedId}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
}

export function Talks() {
  return (
    <div className="container mx-auto pt-10">
      <div className="w-full md:w-4/5 mx-auto">
        <img
          className="object-cover w-48 h-48 md:w-64 md:h-64 rounded-full"
          src={GraphQLTalk}
          alt="GraphQL Berlin 2022"
        />
        <img
          className="ml-auto object-cover w-48 h-48 md:w-64 md:h-64 rounded-full"
          src={Microsoft}
          alt="JS Monthly"
        />
        <img
          className="object-cover w-48 h-48 md:w-64 md:h-64 rounded-full"
          src={JSMonthly}
          alt="JS Monthly"
        />
      </div>

      <Section id="talks" header="Latest Talk">
        <YoutubeEmbed embedId={"iWGpTvSr-1E"} />
      </Section>
    </div>
  );
}
