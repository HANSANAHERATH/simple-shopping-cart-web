import { applyMiddleware, compose, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';

import monitorReducersEnhancer from './enhancers/monitorReducers'
import loggerMiddleware from './middleware/logger'
import RootReducer from './reducers/RootReducer'

export default function configureStore(preloadedState) {
  const middlewares = [loggerMiddleware, thunkMiddleware]
  const middlewareEnhancer = composeWithDevTools(applyMiddleware(...middlewares))

  const enhancers = [middlewareEnhancer, monitorReducersEnhancer]
  const composedEnhancers = compose(...enhancers)

  const store = createStore(RootReducer, preloadedState, composedEnhancers)


  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./reducers/RootReducer', () => store.replaceReducer(RootReducer))
  }
  return store
}