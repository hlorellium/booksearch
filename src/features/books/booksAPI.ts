export async function fetchBooks(query: string, page = 1) {
    const queryString = query.split(' ').join('+');
    const response = await fetch(
        `http://openlibrary.org/search.json?title=${queryString}`
    );

    return await response.json();
}
