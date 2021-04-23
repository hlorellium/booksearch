import React from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import BookSnippet from './BookSnippet';
import { selectBooks, loadBooks } from './booksSlice';

function Books() {
    const books = useAppSelector(selectBooks);
    const dispatch = useAppDispatch();

    return (
        <div>
            <button
                aria-label="Decrement value"
                onClick={() => dispatch(loadBooks('harry potter'))}
            >
                +
            </button>
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
