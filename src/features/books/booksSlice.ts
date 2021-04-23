import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface Book {
    cover_i: number;
    has_fulltext: boolean;
    edition_count: number;
    title: string;
    author_name: string[];
    first_publish_year: number;
    key: string;
    ia: string[];
    author_key: string[];
    public_scan_b: boolean;
}

export interface booksState {
    docs: Book[];
    status: 'idle' | 'loading' | 'failed';
}

const initialState: booksState = {
    docs: [],
    status: 'idle',
};

export const loadBooks = createAsyncThunk(
    'books',
    async (query: string) => {
const queryString = query.split(' ').join('+');
    const response = await fetch(
        `http://openlibrary.org/search.json?title=${queryString}`
    );
        // The value we return becomes the `fulfilled` action payload
        let result = await response.json();
        console.log(result);
        return result;
    }
);

export const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loadBooks.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(loadBooks.fulfilled, (state, action) => {
                state.status = 'idle';
                state.docs = [...state.docs, ...action.payload.docs];
            });
    },
});


export const selectBooks = (state: RootState) => state.books.docs;

export default booksSlice.reducer;