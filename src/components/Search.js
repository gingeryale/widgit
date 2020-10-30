import React, { useState } from 'react';


const Search = () => {
    const [term, setTerm] = useState('');
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
        </div >
    )
}

export default Search;