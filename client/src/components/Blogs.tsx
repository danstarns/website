import { format } from "date-fns";
import { useCallback, useEffect, useState } from "react";
import { Section } from "./Section";

interface IBlog {
  link: string;
  title: string;
  pubDate: string;
}

export function Blogs() {
  const [blogs, setBlogs] = useState<IBlog[]>([]);

  const getBlogs = useCallback(async () => {
    try {
      const response = await fetch(
        "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@danstarns"
      );

      if (response.status !== 200 || !response.ok) {
        throw new Error(await response.text());
      }

      const json = (await response.json()) as { items: any[] };

      setBlogs(json.items);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <Section id="blog" header="Blog">
      <div>
        <ul>
          {blogs.map((b) => (
            <li key={b.title}>
              <a href={b.link}>{b.title}</a>
              <p>
                <span className="italic text-sm">
                  -{" "}
                  <time
                    title={`Time Posted: ${new Date(b.pubDate).toUTCString()}`}
                    dateTime={new Date(b.pubDate).toISOString()}
                  >
                    {format(new Date(b.pubDate), "h:mm a - MMM d, y")}
                  </time>
                </span>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
