import React from 'react';
import './App.css';
import Books from './features/books/Books';
import SearchBar from './features/searchBar/SearchBar';

function App() {
    return (
        <div className="App">
                <SearchBar />
                <Books />
        </div>
    );
}

export default App;
