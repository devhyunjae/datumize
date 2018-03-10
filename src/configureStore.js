import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducers'

const configureStore = () => {
  const middleWares = [thunk]

  return createStore(
    reducer,
    compose(applyMiddleware(...middleWares)),
  )
}

export default configureStore
