import { format } from "date-fns";
import { useCallback, useEffect, useState } from "react";
import { getBlogs, Blog } from "../utils/get-blogs";
import { Section } from "./Section";

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

  return (
    <Section id="blog" header="Blog">
      <div>
        <ul>
          {blogs.map((b) => {
            const strippedDate = b.pubDate.split(" ").join("T");

            return (
              <li key={b.title}>
                <a href={b.link}>{b.title}</a>
                <p>
                  <span className="italic text-sm">
                    -{" "}
                    <time
                      title={`Time Posted: ${new Date(
                        strippedDate
                      ).toUTCString()}`}
                      dateTime={new Date(
                        strippedDate.split(" ")[0]
                      ).toISOString()}
                    >
                      {format(new Date(strippedDate), "h:mm a - MMM d, y")}
                    </time>
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
