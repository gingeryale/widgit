import React, { useState } from 'react';
import './App.css';
import Accordion from './Accordion';
import Search from './Search';
import Dropdown from './Dropdown';


const items = [
  {
    id: 1, title: "What is React?", content: "A front end JS lib"
  },
  {
    id: 2, title: "Why use React?", content: "People seem to love it"
  },
  {
    id: 3, title: "What are your thoughts on Vue?", content: "I personally never used it but it looks intriguing"
  }
]

const options = [
  {
    id: 1, label: "The Color Red", value: "red"
  },
  {
    id: 2, label: "Tinted Blue", value: "blue"
  },
  {
    id: 3, label: "A Shade Green", value: "green"
  }
]



export default () => {
  const [selected, setselected] = useState(options[0]);

  return (
    <div className="App">
      <Dropdown selected={selected} onSelectedChange={setselected} options={options} />
    </div>
  );
}


