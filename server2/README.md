npm install - install example;
npm start  - to start client site - without server rendering

if we change "start" to "nodemon server/index.js --exec babel-node" in package.json we can start simple SSR
and we change "start" to "nodemon server/index1.js - we can start SSR with react router.

Start without SSR and with react router SSR - they do the same, but the routing implement on different sides: client and server but both use the same React component, awesome!


