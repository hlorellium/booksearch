import React from 'react';
import './App.css';
import Books from './features/books/Books';
import SearchBar from './features/searchBar/SearchBar';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <SearchBar />
                <Books />
            </header>
        </div>
    );
}

export default App;
