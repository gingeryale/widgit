import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({ options, selected, onSelectedChange, label }) => {
    const ref = useRef();
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onBodyClick = (e) => {
            if (ref.current && ref.current.contains(e.target)) {
                return;
            }
            setOpen(false);
        };
        document.body.addEventListener('click', onBodyClick);

        return () => {
            document.body.removeEventListener('click', onBodyClick);
        }
    }, []);

    const renderOptions = options.map((opt) => {
        if (opt.value === selected.value) {
            return null;
        }
        return (
            <div key={opt.id}
                className="item"
                onClick={() => onSelectedChange(opt)}>
                {opt.label}
            </div >
        )
    });

    return (
        <div ref={ref} className="ui form">
            <div className="field">
                <label className="label">{label}</label>
                <div onClick={() => setOpen(!open)}
                    className={`ui selection dropdown ${open ? 'visible active' : ''}`}>
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    <div className={`menu ${open ? 'visible transition' : ''}`}>{renderOptions}</div>
                </div>
            </div>
            <h1 style={{ "color": selected.value }}>Now the text is {selected.value}</h1>
        </div>
    )
}

export default Dropdown;