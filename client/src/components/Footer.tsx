import { SiteMap } from "./Sitemap";
// @ts-ignore
import Sig from "../img/sig.svg";

export function Footer() {
  return (
    <footer className="w-full bg-white p-5">
      <article className="prose lg:prose-xl mx-auto">
        <div className="flex flex-row align-center justify-between">
          <div className="mt-5">
            <SiteMap></SiteMap>
          </div>
          <img src={Sig} alt="d.s" className="h-8 sm:h-12 ml-10" />
        </div>
        <div className="mt-10 flex-column sm:flex justify-between align-center">
          <p className="font-bold text-center m-1">
            <span dangerouslySetInnerHTML={{ __html: "&copy;" }} /> MIT License
          </p>
          <p className="font-bold text-center m-1">
            <a href="mailto:me@danielstarns.com">me@danielstarns.com</a>
          </p>
          <p className="font-bold text-center m-1">
            <a href="https://github.com/danstarns/website">Source Code</a>
          </p>
        </div>
      </article>
    </footer>
  );
}
