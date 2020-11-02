import React, { useState, useFeect, useEffect } from 'react';
import axios from 'axios';


const Search = () => {
    const [term, setTerm] = useState('programming');
    const apiURL = `https://en.wikipedia.org/w/api.php`;

    const [results, setResults] = useState([]);

    console.log(results);

    useEffect(() => {
        const search = async () => {
            const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: term
                }
            });
            setResults(data.query.search);
        };
        search();
    }, [term]);

    const resultsData = results.map((item) => {
        return (
            <div className="item" key={item.pageid}>
                <div className="content">
                    <div className="header">
                        {item.title}
                    </div>
                    <span dangerouslySetInnerHTML={{ __html: item.snippet }}></span>

                </div>
            </div>
        )
    });

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Search Term</label>
                    <input
                        value={term}
                        onChange={e => setTerm(e.target.value)}
                        type="text"
                    />
                </div>
            </div>
            <div className="ui cell-list">
                {resultsData}
            </div>

        </div >
    )
}

export default Search;