import { Book } from './booksSlice';
export interface BooksApiResponse {
    numFound: number;
    num_found: number;
    start: number;
    docs: Book[];
}

export async function fetchBooks(
    query: string,
    page = 1
): Promise<BooksApiResponse> {
    const queryString = query.split(' ').join('+');
    const requestUrl =
        page === 1
            ? `https://openlibrary.org/search.json?q=${queryString}`
            : `https://openlibrary.org/search.json?q=${queryString}&page=${page}`;

    const response = await fetch(requestUrl);

    return await response.json();
}
