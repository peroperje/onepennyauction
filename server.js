import path from 'path'
import Express from 'express'
import React from 'react'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import App from './src/App'
import { RoutingContext,match } from 'react-router';
import {renderToString} from 'react-dom/server'
import configureStore from './src/store/configureStore'
import initialState from './src/store/initialState'

/*
 import counterApp from './reducers'
 import App from './containers/App'*/

const app = Express();

const port = 3000;

const handleRender = (req, res)=> {
    const store = configureStore(initialState(),true);
   /* const initialView = (
        <Provider store={store}>
            <Router history={browserHistory}>
                <Route path="/" component={App} />
            </Router>
        </Provider>
    )*/
    const html = renderToString(
        <Provider store={store}>
            <App/>
        </Provider>
    )
    console.log('heheh he');
    res.send(renderFullPage(html));
}

const renderFullPage = (html)=> {
    return `
    <!doctype html>
    <html lang="en">
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <link rel="shortcut icon" href="/favicon.ico">
            <link rel="stylesheet" href="/font-awesome/css/font-awesome.min.css">
            <title>React App</title>
        </head>
        <body>
            <div id="root">${html}</div>
        </body>
    </html>`;
}
app.use('/', express.static(path.join(__dirname, '/public')));
app.use(handleRender);

app.listen(port);