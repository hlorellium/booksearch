import React from 'react';
import { useAppSelector } from '../../app/hooks';
import BookSnippet from './BookSnippet';
import { selectBooks } from './booksSlice';

function Books() {
    const books = useAppSelector(selectBooks);

    return (
        <div>
            <ul>
                {books.map((book, index) => (
                    <li key={index}>
                        <BookSnippet book={book} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Books;
