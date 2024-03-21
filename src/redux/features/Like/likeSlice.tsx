import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LikeState } from '../../../models/LikeState';

const initialState: LikeState = {
    like: false,
};

export const likeSlice = createSlice({
    name: 'like',
    initialState,
    reducers: {
        getLike: (state, action: PayloadAction<boolean>) => {
            state.like = action.payload;
        },
    },
});

export const { getLike } = likeSlice.actions;

export const selectCats = (state: LikeState) => state.like;
export default likeSlice.reducer;
