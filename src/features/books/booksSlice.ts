import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { fetchBooks } from './booksAPI';

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
    publisher?: string[];
    isbn?: string[];
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
    'books/loadBooks',
    async (query: string) => {
        if (!query) return { docs: [] };
        let result = await fetchBooks(query);

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
                state.docs = [...action.payload.docs].sort(
                    (a, b) => b.edition_count - a.edition_count
                );
            });
    },
});

export const selectBooks = (state: RootState) => state.books.docs;

export default booksSlice.reducer;
