import { API_URL } from "./config";

export interface Author {
  url: string;
  id: string;
  profile_image_url: string;
  protected: boolean;
  verified: boolean;
  name: string;
  username: string;
}

export interface Attachments {
  media_keys: string[];
}

export interface ReferencedTweet {
  type: string;
  author: Author;
  text: string;
  id: string;
  created_at: Date;
  author_id: string;
  attachments: Attachments;
}

export interface Medium {
  media_key: string;
  height: number;
  type: string;
  width: number;
  url: string;
}

export interface Attachments {
  media_keys: string[];
}

export interface Tweet {
  text: string;
  referenced_tweets: ReferencedTweet[];
  id: string;
  created_at: Date;
  author_id: string;
  media: Medium[];
  author: Author;
  attachments: Attachments;
}

export const getTweets = async () => {
  const response = await fetch(`${API_URL}/api/tweets`);

  if (response.status !== 200 || !response.ok) {
    throw new Error(await response.text());
  }

  const tweets = (await response.json()) as Tweet[];

  return tweets;
};
