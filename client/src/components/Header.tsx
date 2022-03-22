// @ts-ignore
import Sig from "../../public/sig.svg";

export function Header() {
  return (
    <nav className="z-50 w-full bg-white p-5 flex justify-start border-b shadow leading-tight">
      <a href="/">
        <img src={Sig} alt="d.s" className="h-8 sm:h-12" />
      </a>
      <p className="ml-3 text-xl sm:text-2xl font-bold">danielstarns.com</p>
    </nav>
  );
}
