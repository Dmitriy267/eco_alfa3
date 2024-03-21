import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { catsApi } from '../services/cats';
import catReducer from '../redux/features/Cat/catSlice';
import likeReduser from '../redux/features/Like/likeSlice';
export const store = configureStore({
    reducer: {
        [catsApi.reducerPath]: catsApi.reducer,
        cat: catReducer,
        like: likeReduser,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(catsApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
