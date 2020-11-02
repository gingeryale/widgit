import React, { useState, useFeect, useEffect } from 'react';
import axios from 'axios';


const Search = () => {
    const [term, setTerm] = useState('programming');
    const [results, setResults] = useState([]);
    const [debouncedTerm, setDebouncedTerm] = useState(term);
    const apiURL = `https://en.wikipedia.org/w/api.php`;
    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedTerm(term);
        }, 1000);
        return () => {
            clearTimeout(timerId);
        }
    }, [term]);

    useEffect(() => {
        const search = async () => {
            const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: debouncedTerm
                }
            });
            setResults(data.query.search);
        };
        search();
    }, [debouncedTerm])


    // useEffect(() => {
    // const search = async () => {
    //     const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
    //         params: {
    //             action: 'query',
    //             list: 'search',
    //             origin: '*',
    //             format: 'json',
    //             srsearch: debouncedTerm
    //         }
    //     });
    //     setResults(data.query.search);
    // };
    //     if (term && !results.length) {
    //         search()
    //     } else {
    //         const timeOutId = setTimeout(() => {
    //             if (term) {
    //                 search();
    //             }
    //         }, 1000);

    //         return () => {
    //             clearTimeout(timeOutId);
    //         }
    //     }

    // }, [term]);

    const resultsData = results.map((item) => {
        return (
            <div className="item" key={item.pageid}>
                <div className="right floated content">
                    <a href={`https://en.wikipedia.org?curid=${item.pageid}`}
                        className="ui button">GO</a>
                </div>
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