import React, { useEffect, useState } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { loadBooks } from '../books/booksSlice';
import styles from './SearchBar.module.css';

function SearchBar() {
    const [query, setQuery] = useState('');
    const dispatch = useAppDispatch();

    useEffect(() => {
        const delayTimer = setTimeout(() => {
            dispatch(loadBooks(query));
        }, 1000);

        return () => clearTimeout(delayTimer);
    }, [query, dispatch]);

    return (
        <div className={styles.container}>
            <div>
                <h2 className={styles.title}>Enter book's title</h2>
            </div>
            <div>
                <input
                    type="search"
                    name="booksSearch"
                    value={query}
                    onChange={(e) => {
                        setQuery(e.target.value);
                    }}
                    autoFocus
                    className={styles.searchInput}
                />
                <button
                    type="submit"
                    onClick={() => dispatch(loadBooks(query))}
                >
                    Search
                </button>
            </div>
        </div>
    );
}

export default SearchBar;
