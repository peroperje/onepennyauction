import { createStore, applyMiddleware,compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import bidder from '../middleware/bidder'
import rootReducer from '../reducers'

export default function configureStore(preloadedState,isServer=false) {
    let store = {};

    if(!isServer){
        const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
        /* const store = createStore(reducer, preloadedState, composeEnhancers(
         applyMiddleware(...middleware)
         ));*/
         store = createStore(
            rootReducer,
            preloadedState,
            composeEnhancers(applyMiddleware(thunkMiddleware, createLogger(),bidder))
        )
    }else {
         store = createStore(
            rootReducer,
            preloadedState,
            applyMiddleware(thunkMiddleware,bidder)
        )
    }


    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers').default
            store.replaceReducer(nextRootReducer)
        })
    }

    return store
}