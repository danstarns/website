# website

https://www.danielstarns.com/

This site is built to serve as a real-time curation of my content. The project contains a React app in `client/` and a Node.js server in `server/`.

The Client is a simple TypeScript React app, it uses Tailwind CSS for styling and pull's all its content from the Server.

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

In each folder `client` & `server` copy the `.env.example` file to `./.env` and then adjust config to your environment.

### Run Server

```
npm run server
```

TODO - Note about API KEYS

### Run Client

```
npm run client
```

## License

MIT me@danielstarns.com
