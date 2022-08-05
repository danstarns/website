// @ts-ignore
import GraphQLTalk from "../../public/graphql-talk.png";
// @ts-ignore
import JSMonthly1 from "../../public/js-monthly-talk1.png";
// @ts-ignore
import JSMonthly2 from "../../public/js-monthly-talk2.png";

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
          src={JSMonthly1}
          alt="JS Monthly"
        />
        <img
          className="object-cover w-48 h-48 md:w-64 md:h-64 rounded-full"
          src={JSMonthly2}
          alt="JS Monthly"
        />
      </div>
    </div>
  );
}
