import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CatState } from '../../../models/CatState';

const initialState: CatState = {
    cat: { id: '', url: '', width: '', height: '' },
};

export const catSlice = createSlice({
    name: 'cat',
    initialState,
    reducers: {
        getIdCat: (state, action: PayloadAction<string>) => {
            state.cat.id = action.payload;
        },
        getUrlCat: (state, action: PayloadAction<string>) => {
            state.cat.url = action.payload;
        },
        getWidthCat: (state, action: PayloadAction<string>) => {
            state.cat.width = action.payload;
        },
        getHeightCat: (state, action: PayloadAction<string>) => {
            state.cat.height = action.payload;
        },
    },
});

export const { getIdCat, getUrlCat, getWidthCat, getHeightCat } =
    catSlice.actions;

export const selectCats = (state: CatState) => state.cat;
export default catSlice.reducer;
