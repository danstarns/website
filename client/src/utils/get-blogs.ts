export interface Blog {
  link: string;
  title: string;
  pubDate: string;
  thumbnail: string;
}

export const getBlogs = async (): Promise<Blog[]> => {
  const response = await fetch(
    "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@danstarns"
  );

  if (response.status !== 200 || !response.ok) {
    throw new Error(await response.text());
  }

  const json = (await response.json()) as { items: Blog[] };

  const blogs = json.items;

  return blogs;
};
