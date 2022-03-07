const config = require("../../../config");
const fetch = require("node-fetch");

const query = `
    {
        viewer {
          pinnedItems(first:6) {
            nodes {
              __typename
              ... on Repository {
                name
                url
                description
                primaryLanguage {
                  color
                  name
                }
                stargazerCount
                forkCount
              }
            }
          }
        }
    }
`;

async function repos(req, res) {
  try {
    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `bearer ${config.GITHUB_API_TOKEN}`,
      },
      body: JSON.stringify({
        query,
      }),
    });

    if (!response.ok || response.status !== 200) {
      throw new Error(await response.text());
    }

    const json = await response.json();

    if (json.errors?.length) {
      throw new Error(json.errors.length.map((x) => x.message).join("\n"));
    }

    const repos = json.data.viewer.pinnedItems.nodes;

    res.json(repos);
  } catch (error) {
    console.error(error);
    res.status(400).end(error.message);
  }
}

module.exports = repos;
