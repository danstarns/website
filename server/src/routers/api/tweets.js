const config = require("../../../config");
const fetch = require("node-fetch");

async function repos(req, res) {
  try {
    const queryParams = new URLSearchParams({
      expansions:
        "author_id,attachments.media_keys,referenced_tweets.id,referenced_tweets.id.author_id",
      "tweet.fields":
        "attachments,author_id,public_metrics,created_at,id,in_reply_to_user_id,referenced_tweets,text",
      "user.fields":
        "id,name,profile_image_url,protected,url,username,verified",
      "media.fields":
        "duration_ms,height,media_key,preview_image_url,type,url,width,public_metrics",
    });

    const response = await fetch(
      "https://api.twitter.com/2/users/1367770314839572481/tweets?" +
        queryParams,
      {
        method: "GET",
        headers: {
          Authorization: `bearer ${config.TWITTER_API_TOKEN}`,
        },
      }
    );

    if (!response.ok || response.status !== 200) {
      throw new Error(await response.text());
    }

    const json = await response.json();

    const getAuthorInfo = (author_id) => {
      return json.includes.users.find((user) => user.id === author_id);
    };

    const getReferencedTweets = (mainTweet) => {
      return (
        mainTweet?.referenced_tweets?.map((referencedTweet) => {
          const fullReferencedTweet = json.includes.tweets.find(
            (tweet) => tweet.id === referencedTweet.id
          );

          return {
            type: referencedTweet.type,
            author: getAuthorInfo(fullReferencedTweet.author_id),
            ...fullReferencedTweet,
          };
        }) || []
      );
    };

    const tweets = json.data.reduce((allTweets, tweet) => {
      const tweetWithAuthor = {
        ...tweet,
        media:
          tweet?.attachments?.media_keys.map((key) =>
            json.includes.media.find((media) => media.media_key === key)
          ) || [],
        referenced_tweets: getReferencedTweets(tweet),
        author: getAuthorInfo(tweet.author_id),
      };

      return [...allTweets, tweetWithAuthor];
    }, []);

    res.json(tweets.slice(0, 5));
  } catch (error) {
    console.error(error);
    res.status(400).end(error.message);
  }
}

module.exports = repos;
