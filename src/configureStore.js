import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
export default function configureStore () {
  const store = createStore(rootReducer)

  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require('./reducers').default
      store.replaceReducer(nextRootReducer)
    })
  }
  return store
}
