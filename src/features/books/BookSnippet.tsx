import React from 'react';
import { Book } from './booksSlice';
import styles from './BookSnippet.module.css';

function BookSnippet(props: { book: Book }) {
    const { book } = props;
    const coverSrc = `http://covers.openlibrary.org/b/ID/${book.cover_i}-M.jpg?default=false`;

    return (
        <div className={styles.item}>
            <img src={coverSrc} alt="" />
            <div>
                <h3>{book.title}</h3>
                <span>{book.author_name} </span>
            </div>
        </div>
    );
}

export default BookSnippet;
