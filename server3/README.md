npm install - install example;
npm start  - to start client site - without any server rendering

to start SSR with redux we have to adjust package.json:
change value of start to "nodemon src/server.js --exec babel-node" and before run ssr by "npm start", build client site by "npm build".


