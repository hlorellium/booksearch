import React from 'react';
import { useAppSelector } from '../../app/hooks';
import BookSnippet from './BookSnippet';
import { selectBooks } from './booksSlice';
import styles from './Books.module.css';

function Books() {
    const books = useAppSelector(selectBooks);

    return (
        <div className={styles.container}>
            <div className={styles.grid}>
                {books.map((book, index) => (
                    <BookSnippet book={book} key={index} />
                ))}
            </div>
        </div>
    );
}

export default Books;
