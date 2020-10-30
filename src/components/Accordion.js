import React, { useState } from 'react';


const Accordion = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const onTitleClick = (el) => {
        setActiveIndex(el);
    }




    const rederedItems = items.map((el, index) => {
        const active = index === activeIndex ? 'active' : '';
        return (
            <React.Fragment key={el.id}>
                <div onClick={() => onTitleClick(index)} className={`title ${active}`}>
                    <i className="dropdown icon"></i>
                    {el.title}
                </div>
                <div className={`content ${active}`}>
                    <p>{el.content}</p>
                </div>
            </React.Fragment>)
    })
    return (
        <div className="ui styled accordion">
            {rederedItems}
        </div>
    )
}

export default Accordion;