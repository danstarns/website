export function Socials() {
  return (
    <div className="flex-row justify-spac-between gap-y-3">
      <a rel="Github" href="https://github.com/danstarns">
        <i className="w-20 hover:text-purple-500 fa-brands fa-github fa-2x" />
      </a>
      <a rel="Twitter" href="https://twitter.com/dan_starns">
        <i className="w-20 hover:text-blue-500 fa-brands fa-twitter fa-2x" />
      </a>
      <a rel="Linkedin" href="https://www.linkedin.com/in/danielstarns/">
        <i className="w-20 hover:text-blue-800 fa-brands fa-linkedin fa-2x" />
      </a>
      <a rel="Medium" href="https://medium.com/@danstarns">
        <i className="w-20 hover:text-green-500 fa-brands fa-medium fa-2x" />
      </a>
    </div>
  );
}
