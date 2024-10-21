// backend/controllers/paperController.js
const axios = require('axios');
const Paper = require('../models/Paper');

const searchPapers = async (req, res) => {
    const query = req.query.query;
    const url = `https://api.crossref.org/works?query=${encodeURIComponent(query)}`;

    try {
        const result = await axios.get(url);
        const papers = result.data.message.items.map(item => ({
            title: item.title[0],
            authors: item.author.map(a => `${a.family} ${a.given}`).join(', '),
            year: item.created['date-parts'][0][0],
            doi: item.DOI,
            citations: item.citation_count || 0,
        }));

        res.json(papers);
    } catch (error) {
        res.status(500).send('Error retrieving data from CrossRef API');
    }
};

module.exports = { searchPapers };
