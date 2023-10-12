import { configureStore } from "@reduxjs/toolkit"
import createSagaMiddleware from "redux-saga"
import rootSaga from "./rootSaga"
const sagaMiddleware = createSagaMiddleware()
const store = configureStore({
  reducer: {},
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({ thunk: false }).prepend(sagaMiddleware)
  },
})
sagaMiddleware.run(rootSaga)

export default store

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {post: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
