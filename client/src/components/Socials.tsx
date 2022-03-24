export function Socials() {
  return (
    <div className="flex-row justify-between">
      <a className="m-5" rel="Github" href="https://github.com/danstarns">
        <i className="hover:text-purple-500 fa-brands fa-github fa-2x" />
      </a>
      <a className="m-5" rel="Twitter" href="https://twitter.com/dan_starns">
        <i className="hover:text-blue-500 fa-brands fa-twitter fa-2x" />
      </a>
      <a
        className="m-5"
        rel="Linkedin"
        href="https://www.linkedin.com/in/danielstarns/"
      >
        <i className="hover:text-blue-800 fa-brands fa-linkedin fa-2x" />
      </a>
      <a className="m-5" rel="Medium" href="https://medium.com/@danstarns">
        <i className="hover:text-green-500 fa-brands fa-medium fa-2x" />
      </a>
    </div>
  );
}
