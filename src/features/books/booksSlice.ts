import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { fetchBooks, BooksApiResponse } from './booksAPI';

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
    page: number;
    status: 'idle' | 'loading' | 'failed';
    query: string;
    numFound: number;
}

const initialState: booksState = {
    docs: [],
    page: 1,
    status: 'idle',
    query: '',
    numFound: 0,
};

export const loadNextPage = createAsyncThunk<
    any,
    { query: string; page: number }
>('books/loadNextPage', async (props: { query: string; page: number }) => {
    const { page, query } = props;

    if (!query) return { docs: [] };
    let result = await fetchBooks(query, page);

    return result as BooksApiResponse;
});

export const loadBooks = createAsyncThunk<any, string>(
    'books/loadBooks',
    async (query: string) => {
        if (!query) return { docs: [] };
        let result = await fetchBooks(query);

        return [result, query] as [BooksApiResponse, string];
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
                state.docs = [];
                state.page = 2;
            })
            .addCase(loadBooks.fulfilled, (state, action) => {
                state.status = 'idle';
                if (action.payload[0]) {
                    state.docs = [...action.payload[0].docs].sort(
                        (a, b) => b.edition_count - a.edition_count
                    );

                    state.query = action.payload[1];
                    state.numFound = action.payload[0].numFound;
                }
            })
            .addCase(loadNextPage.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(loadNextPage.fulfilled, (state, action) => {
                state.status = 'idle';
                state.docs = [
                    ...state.docs,
                    ...[...action.payload.docs].sort(
                        (a, b) => b.edition_count - a.edition_count
                    ),
                ];
                state.page = state.page + 1;
                state.numFound = action.payload.numFound;
            });
    },
});

export const selectBooks = (state: RootState) => state.books.docs;
export const selectStatus = (state: RootState) => state.books.status;
export const selectQuery = (state: RootState) => state.books.query;
export const selectPage = (state: RootState) => state.books.page;
export const selectNumFound = (state: RootState) => state.books.numFound;

export default booksSlice.reducer;
