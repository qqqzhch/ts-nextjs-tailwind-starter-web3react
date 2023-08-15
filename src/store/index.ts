import { configureStore } from '@reduxjs/toolkit';

import { iconslice } from '@/store/icon-slice';

// config the store
const store = configureStore({
  reducer: {
    icon: iconslice.reducer,
  },
});

// export default the store
export default store;

// export the action
export const iconAction = iconslice.actions;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
