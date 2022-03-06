import { useCallback, useEffect, useState } from "react";
import { getTweets, Tweet as ITweet } from "../util";
import { Section } from "./Section";
import { Tweet } from "./Tweet";

export function Tweets() {
  const [tweets, setTweets] = useState<ITweet[]>([]);

  const init = useCallback(async () => {
    try {
      const t = await getTweets();
      setTweets(t);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    init();
  }, []);

  return (
    <Section id="tweets" header="Tweets">
      <div className="grid gap-4 grid-cols-1">
        {tweets.map((t) => (
          <Tweet key={t.id} tweet={t}></Tweet>
        ))}
      </div>
    </Section>
  );
}
