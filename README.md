# website

[![Deploy](https://github.com/danstarns/website/actions/workflows/deploy.yml/badge.svg)](https://github.com/danstarns/website/actions/workflows/deploy.yml)

[https://www.danielstarns.com/](https://www.danielstarns.com/)

This site is built to serve as a real-time curation of my content. The project contains a React app in `client/` and a Node.js server in `server/`. The `/tests` folder contains e2e tests to ensure that both the contact functionally works.

The Client is a simple TypeScript React app, it uses [Tailwind CSS](https://tailwindcss.com/) for styling and pull's all its content from the Server.

The Server interacts with various API's to integrate with the following platforms:

1. Google Mail
2. Google Sheets
3. Github
4. Medium
5. Twitter

## Screenshot

[![Image from Gyazo](https://i.gyazo.com/eaa97f17f3c944daa701fe8b1589d4da.png)](https://gyazo.com/eaa97f17f3c944daa701fe8b1589d4da)

## Development

### Clone Repo

```
git clone https://github.com/danstarns/website.git
```

### Install Dependencies

```
npm install
```

### `.env`

In each folder copy the `.env.example` file to `./.env` and then adjust config to your environment. Most default envs should be fine - **But the servers api keys will need your intervention**

### Testing

```
npm run test
```

The tests will first build the client, run the server and then use puppeteer to interact with the page. Use the `./.env` file in the `/tests` folder to override either the `client/` or `server/` env.

### Run Server

The server will require you to have the following envs set:

```
GITHUB_API_TOKEN="some-token"
TWITTER_API_TOKEN="some-token"
```

Here are the links to get them:

| Key                 | Description                                                                    | Link                                                                                                   |
| ------------------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `GITHUB_API_TOKEN`  | Token for the github GraphQL api, this is used to get the list of pinned repos | [https://docs.github.com/en/graphql](https://docs.github.com/en/graphql)                               |
| `TWITTER_API_TOKEN` | Token for the twitter api, this is used to get a list of my latest tweets      | [https://developer.twitter.com/en/docs/twitter-api](https://developer.twitter.com/en/docs/twitter-api) |

Finally, as well as the API keys you will need to specify email credentials to use nodemailer and IMAP.

```
EMAIL_CC="my-email@gmail.com"
EMAIL_SENDER_ADDRESS="my-email@gmail.com"
EMAIL_SENDER_PASSWORD="password"
EMAIL_HOST="smtp.gmail.com"
```

Then you can run:

```
npm run server
```

### Run Client

Starts webpack dev server - default: http://localhost:4000

```
npm run client
```

## Deployment

![DigitalOcean](https://img.shields.io/badge/DigitalOcean-%230167ff.svg?style=for-the-badge&logo=digitalOcean&logoColor=white)

![Nginx](https://img.shields.io/badge/nginx-%23009639.svg?style=for-the-badge&logo=nginx&logoColor=white)

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)

This site is deployed to a [Digital Ocean](https://www.digitalocean.com/) Ubuntu Droplet(the cheapest one). It is running [Nginx](https://www.nginx.com/), [Certbot](https://certbot.eff.org/) and then [PM2](https://pm2.keymetrics.io/) (that's running the Node.js server). On push to main GitHub actions will SSH into the droplet, pull the latest code, build the client and then start the server.

The domain is with [Google Domains](https://domains.google.com/).

Overall it's costing about $7-10 per month to run.

## License

MIT me@danielstarns.com
