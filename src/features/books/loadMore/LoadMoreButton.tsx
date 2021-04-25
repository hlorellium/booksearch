import React from 'react';
import { useAppSelector, useAppDispatch } from '../../../app/hooks';
import {
    selectQuery,
    selectPage,
    selectNumFound,
    loadNextPage,
} from '../booksSlice';
import styles from './LoadMoreButton.module.css';
import { selectBooks, selectStatus } from '../booksSlice';

function LoadMoreButton() {
    const books = useAppSelector(selectBooks);
    const query = useAppSelector(selectQuery);
    const page = useAppSelector(selectPage);
    const numFound = useAppSelector(selectNumFound);
    const status = useAppSelector(selectStatus);
    const dispatch = useAppDispatch();

    return (
        <>
            {numFound > books.length && status === 'idle' ? (
                <button
                    className={styles.loadMore}
                    onClick={() => dispatch(loadNextPage({ query, page }))}
                >
                    Load more
                </button>
            ) : null}
        </>
    );
}

export default LoadMoreButton;
