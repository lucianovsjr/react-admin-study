# steps

https://www.youtube.com/watch?v=HRmdj-HpJyE&t=1478s

- `client/` move `../crash-course-clinet`

## Init

```bash
npm init -y
```

## Json-server

```bash
npm i json-server
```

- Create db.json
- Create server script in package.json

```bash
npm run server
```

## React setup

```bash
npx create-react-app client
```

- Create proxy in package.json (client)
- Create client script in package.json

```bash
npm i concurrently
```

- Create dev in package.json
- delete many files not used in client/src

## React admin setup

```bash
cd /client
npm i react-admin ra-data-simple-rest @material-ui/core
```

- Edit client/src/App.js
- Create client/src/components/PostList.js

## Content range header

- Create range.js
- Add middlewares param in server script
- restart `npm run dev`

## Create

- Create client/components/src/PostCreate.js
- Create client/components/src/PostEdit.js and add in client/src/App.js

## Users

- Create client/src/components/UserList.js
- Create client/src/components/UserCreate.js
- Create client/src/components/UserEdit.js
- Add in client/src/App.js
