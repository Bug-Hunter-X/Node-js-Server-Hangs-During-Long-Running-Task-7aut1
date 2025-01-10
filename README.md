# Node.js Server Hang Issue

This repository demonstrates a common issue in Node.js where a long-running task in the request handler blocks the event loop, causing the server to become unresponsive.  The `server.js` file contains the problematic code.  The solution is provided in `serverSolution.js`.

## Problem

The server uses a `while` loop to simulate a 5-second task. During this time, the event loop is blocked, preventing the server from handling other requests.  This leads to a unresponsive server and potential HTTP request timeouts for clients.