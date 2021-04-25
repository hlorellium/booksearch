import React from 'react';
import { useAppSelector } from '../../app/hooks';
import BookSnippet from './bookSnippet/BookSnippet';
import { selectBooks, selectStatus } from './booksSlice';
import styles from './Books.module.css';
import LoadingSpinner from './loadingSpinner/LoadingSpinner';
import LoadMoreButton from './loadMore/LoadMoreButton';

function Books() {
    const books = useAppSelector(selectBooks);
    const status = useAppSelector(selectStatus);

    return (
        <div className={styles.container}>
            <div className={styles.grid}>
                {books.map((book, index) => (
                    <BookSnippet book={book} key={index} />
                ))}
            </div>
            {status === 'loading' ? <LoadingSpinner /> : null}
            <LoadMoreButton />
        </div>
    );
}

export default Books;
