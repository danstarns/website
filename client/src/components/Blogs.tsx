import { useCallback, useEffect, useState } from "react";
import { getBlogs, Blog } from "../utils/get-blogs";
import { Section } from "./Section";
import { Time } from "./Time";

export function Blogs() {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  const init = useCallback(async () => {
    try {
      const b = await getBlogs();
      setBlogs(b);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    init();
  }, []);

  const [latestBlog, ...restOfBlogs] = blogs;

  return (
    <Section id="blog" header="Blog">
      <div>
        {latestBlog && (
          <div className="p-3 bg-white rounded border shadow leading-tight">
            <a href={latestBlog.link}>{latestBlog.title}</a>
            <div>
              <a href={latestBlog.link}>
                <img
                  loading="lazy"
                  src={latestBlog.thumbnail}
                  className="rounded w-full h-full"
                />
              </a>
            </div>

            <span className="font-bold text-sm mr-1">Latest</span>

            <span className="italic text-sm">
              - <Time str={latestBlog.pubDate}></Time>
            </span>
          </div>
        )}
        <ul className="mt-5">
          {restOfBlogs.map((b) => {
            return (
              <li key={b.title}>
                <a href={b.link}>{b.title}</a>
                <p>
                  <span className="italic text-sm">
                    - <Time str={b.pubDate}></Time>
                  </span>
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </Section>
  );
}
