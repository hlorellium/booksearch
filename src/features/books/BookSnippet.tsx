import React from 'react';
import { Book } from './booksSlice';

function BookSnippet(props: { book: Book }) {
    const { book } = props;
    const coverSrc = `http://covers.openlibrary.org/b/ID/${book.cover_i}-M.jpg`;

    return (
        <div>
            <img src={coverSrc} alt="" />
            <span>{book.title}</span> - <span>{book.author_name} </span>
        </div>
    );
}

export default BookSnippet;
