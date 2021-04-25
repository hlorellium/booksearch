import React from 'react';
import { useAppSelector } from '../../app/hooks';
import BookSnippet from './bookSnippet/BookSnippet';
import { selectBooks, selectStatus } from './booksSlice';
import styles from './Books.module.css';
import LoadingSpinner from './loadingSpinner/LoadingSpinner';

function Books() {
    const books = useAppSelector(selectBooks);
    const status = useAppSelector(selectStatus);

    return (
        <div className={styles.container}>
            {status === 'loading' ? <LoadingSpinner /> : null}
            <div className={styles.grid}>
                {books.map((book, index) => (
                    <BookSnippet book={book} key={index} />
                ))}
            </div>
        </div>
    );
}

export default Books;
