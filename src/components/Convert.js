import React, { useState, useEffect } from 'react';
import axios from 'axios';

const demoKEY = `AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM`;
const googURL = `https://translation.googleapis.com/language/translate/v2`;
// props.lang props.text
const Convert = ({ lang, text }) => {
    const [translated, setTranslated] = useState('');
    const [debouncedText, setDebounceText] = useState(text);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebounceText(text);
        }, 500);
        // return cleanup function if user types within the time limit
        return () => {
            clearTimeout(timerId);
        };
    }, [text]);

    // make the request using debounced data
    useEffect(() => {

        const translating = async () => {
            // response.data
            const { data } = await axios.post(googURL, {}, {
                params: {
                    q: debouncedText, //text,
                    target: lang.value,
                    key: demoKEY
                }
            });
            setTranslated(data.data.translations[0].translatedText)
        }
        translating();
    }, [lang, debouncedText]);//[lang, text]);

    return (
        <div>
            <h1 className="ui header">{translated}</h1>
        </div>
    )
}

export default Convert;