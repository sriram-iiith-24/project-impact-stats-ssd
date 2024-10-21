// frontend/src/components/PaperList.js
import React from 'react';

const PaperList = ({ results }) => {
    return (
        <div className="paper-list">
            {results.length === 0 ? (
                <p>No results found.</p>
            ) : (
                results.map((paper, index) => (
                    <div key={index} className="paper-item">
                        <h2>{paper.title}</h2>
                        <p>Authors: {paper.authors}</p>
                        <p>Year: {paper.year}</p>
                        <p>DOI: <a href={`https://doi.org/${paper.doi}`} target="_blank" rel="noopener noreferrer">{paper.doi}</a></p>
                        <p>Impact Score: {paper.citations}</p>
                    </div>
                ))
            )}
        </div>
    );
};

export default PaperList;
