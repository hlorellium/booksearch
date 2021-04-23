import React, { useEffect, useState } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { loadBooks } from '../books/booksSlice';

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
        <div>
            <div>
                <span>Enter book's title</span>
            </div>
            <input
                type="search"
                name="booksSearch"
                value={query}
                onChange={(e) => {
                    setQuery(e.target.value);
                }}
            />
            <button type="submit" onClick={() => dispatch(loadBooks(query))}>
                Search
            </button>
        </div>
    );
}

export default SearchBar;
