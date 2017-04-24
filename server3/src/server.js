import path from 'path'
import Express from 'express'
import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import counterApp from './reducers'
import Counter from './components/Counter'

import qs from 'qs' // Add this at the top of the file


import { renderToString } from 'react-dom/server'

const app = Express()
const port = 3001

//Serve static files
app.use('/static', Express.static('static'));

// This is fired every time the server side receives a request
app.use(handleRender)

// We are going to fill these out in the sections to follow
function handleRender(req, res) {
	const params = qs.parse(req.query)
	const counter = parseInt(params.counter, 10) || 0
//console.log(counter)
	// Create a new Redux store instance
	const store = createStore(counterApp)
	const html = renderToString(
		<Provider store={store}>
			<Counter
			/>
		</Provider>
	)
	// Grab the initial state from our Redux store
	const preloadedState = store.getState()

	// Send the rendered page back to the client
	res.send(renderFullPage(html, counter || preloadedState))
}

function renderFullPage(html, preloadedState ) {
	return `
		<!doctype html>
		<html>
		<head>
			<title>Server Rendering #3</title>
		</head>
		<body>
			<div id="root">${html}</div>
			<script>
				window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
			</script>
			<script src="/static/bundle.js"></script>
		</body>
		</html>
		`
}

app.listen(port)