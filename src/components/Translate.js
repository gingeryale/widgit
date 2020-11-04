import React, { useState } from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';

const options = [
    { id: 1, label: 'Afrikaans', value: 'af' }, { id: 2, label: 'Hebrew', value: 'he' }, { id: 3, label: 'Hindi', value: 'hi' }
]

const Translate = () => {
    const [lang, setLang] = useState(options[0]);
    const [text, setText] = useState("");
    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Text</label>
                    <input type="text" onChange={(e) => setText(e.target.value)} />

                </div>
            </div>
            <Dropdown
                selected={lang}
                onSelectedChange={setLang}
                options={options}
                label="Select Language" />
            <hr />
            <h3 className="ui header">Translation:</h3>
            <Convert text={text} lang={lang} />
        </div>
    )
}

export default Translate;