import { format } from "date-fns";
import { Tweet as ITweet } from "../util";

export interface Props {
  tweet: ITweet;
  nestedTweet?: boolean;
}

export function Tweet(props: Props) {
  const { id, author, created_at, text, media, referenced_tweets } =
    props.tweet;
  const authorUrl = `https://twitter.com/${author.username}`;
  const tweetUrl = `https://twitter.com/${author.username}/status/${id}`;
  const createdAt = new Date(created_at);
  const formattedText = text.replace(/https:\/\/[\n\S]+/g, "");
  const quoteTweet =
    referenced_tweets && referenced_tweets.find((t) => t.type === "retweeted");

  return (
    <div
      key={id}
      className={`
        w-full
        p-3
        bg-white
        ${!props.nestedTweet && `border shadow rounded leading-tight`} 
        `}
    >
      <div className="flex items-center">
        <a href={authorUrl}>
          <img
            loading="lazy"
            alt={author.username}
            src={author.profile_image_url}
            className="inline object-cover w-8 h-8 rounded-full"
            style={{ margin: 0 }}
          />
        </a>
        <a href={authorUrl} className="flex flex-col ml-3">
          @{author.username}
        </a>
      </div>
      {!quoteTweet && <p>{formattedText}</p>}
      {!quoteTweet && media && media.length
        ? media.map((m) => (
            <img
              loading="lazy"
              key={m.media_key}
              alt={text}
              height={m.height}
              width={m.width}
              src={m.url}
              className="rounded"
              style={{ margin: 0 }}
            />
          ))
        : null}
      {quoteTweet ? (
        <div className="mt-3">
          <Tweet
            nestedTweet={true}
            /* @ts-ignore */
            tweet={{ ...quoteTweet, ...(media ? { media } : {}) }}
          />
        </div>
      ) : null}
      {!props.nestedTweet && (
        <div className="text-sm mt-3">
          <a href={tweetUrl} className="italic">
            <time
              title={`Time Posted: ${createdAt.toUTCString()}`}
              dateTime={createdAt.toISOString()}
            >
              {format(createdAt, "h:mm a - MMM d, y")}
            </time>
          </a>
        </div>
      )}
    </div>
  );
}
