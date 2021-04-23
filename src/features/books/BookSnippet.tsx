import React from 'react';
import { Book } from './booksSlice';

function BookSnippet(props: { book: Book }) {
    const { book } = props;

    return (
        <div>
            <img
                src={`http://covers.openlibrary.org/b/ID/${book.cover_i}-S.jpg`}
                alt="cover"
            />
            <span>{book.title}</span> - <span>{book.author_name} </span>
        </div>
    );
}

export default BookSnippet;
