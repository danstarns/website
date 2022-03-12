import { format } from "date-fns";
import { Tweet as ITweet } from "../util";

export interface Props {
  tweet: ITweet;
  nestedTweet?: boolean;
}

function RetweetIcon() {
  return (
    <svg className="mr-3" width="24" height="24" viewBox="0 0 24 24">
      <path
        className="fill-current"
        d="M23.77 15.67c-.292-.293-.767-.293-1.06 0l-2.22 2.22V7.65c0-2.068-1.683-3.75-3.75-3.75h-5.85c-.414 0-.75.336-.75.75s.336.75.75.75h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5c.294-.292.294-.767 0-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22c.148.147.34.22.532.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06l-3.5-3.5c-.293-.294-.768-.294-1.06 0l-3.5 3.5c-.294.292-.294.767 0 1.06s.767.293 1.06 0l2.22-2.22V16.7c0 2.068 1.683 3.75 3.75 3.75h5.85c.414 0 .75-.336.75-.75s-.337-.75-.75-.75z"
      />
    </svg>
  );
}

export function Tweet(props: Props) {
  const {
    id,
    author,
    created_at,
    text,
    media,
    public_metrics,
    referenced_tweets,
  } = props.tweet;
  const authorUrl = `https://twitter.com/${author.username}`;
  const likeUrl = `https://twitter.com/intent/like?tweet_id=${id}`;
  const retweetUrl = `https://twitter.com/intent/retweet?tweet_id=${id}`;
  const replyUrl = `https://twitter.com/intent/tweet?in_reply_to=${id}`;
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
          <div className="flex mt-3 pt-3">
            <a className="flex items-center mr-3" href={replyUrl}>
              <svg className="mr-2" width="24" height="24" viewBox="0 0 24 24">
                <path
                  className="fill-current"
                  d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.045.286.12.403.143.225.385.347.633.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.368-3.43-7.788-7.8-7.79zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.334-.75-.75-.75h-.395c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z"
                />
              </svg>
              <span>
                {new Number(public_metrics.reply_count).toLocaleString("en", {
                  notation: "compact",
                })}
              </span>
            </a>
            <a className="flex items-center mr-3" href={retweetUrl}>
              <RetweetIcon></RetweetIcon>
              <span>
                {new Number(public_metrics.retweet_count).toLocaleString("en", {
                  notation: "compact",
                })}
              </span>
            </a>
            <a className="flex items-center" href={likeUrl}>
              <svg className="mr-3" width="24" height="24" viewBox="0 0 24 24">
                <path
                  className="fill-current"
                  d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.813-1.148 2.353-2.73 4.644-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.375-7.454 13.11-10.037 13.156H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.035 11.596 8.55 11.658 1.52-.062 8.55-5.917 8.55-11.658 0-2.267-1.822-4.255-3.902-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.015-.03-1.426-2.965-3.955-2.965z"
                />
              </svg>
              <span>
                {new Number(public_metrics.like_count).toLocaleString("en", {
                  notation: "compact",
                })}
              </span>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
