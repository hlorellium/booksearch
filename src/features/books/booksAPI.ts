export async function fetchBooks(query: string, page = 1) {
    const queryString = query.split(' ').join('+');
    const requestUrl = `http://openlibrary.org/search.json?q=${queryString}`;

    const response = await fetch(requestUrl);

    return await response.json();
}
