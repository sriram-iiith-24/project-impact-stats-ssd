// frontend/src/components/Search.js
import React, { useState } from 'react';
import axios from 'axios';
import PaperList from './PaperList';

const Search = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSearch = async () => {
        setLoading(true);
        setError('');
        try {
            const response = await axios.get(`http://localhost:5000/api/search?query=${encodeURIComponent(query)}`);
            setResults(response.data);
        } catch (err) {
            setError('Error fetching data. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h1>Research Impact Analysis</h1>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Enter title, author, or DOI"
            />
            <button onClick={handleSearch} disabled={loading}>
                {loading ? 'Searching...' : 'Search'}
            </button>
            {error && <p className="error">{error}</p>}
            <PaperList results={results} />
        </div>
    );
};

export default Search;
