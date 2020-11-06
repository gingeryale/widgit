import React, { useState } from 'react';
import './App.css';
import Accordion from './Accordion';
import Dropdown from './Dropdown';
import Translate from './Translate';
import Search from './Search';
import Route from './Route';


const items = [
  { id: 1, title: "What is React?", content: "A front end JS lib" },
  { id: 2, title: "Why use React?", content: "People seem to love it" },
  { id: 3, title: "What are your thoughts on Vue?", content: "Intriguing" }
]

const options = [
  { id: 1, label: "The Color Red", value: "red" },
  { id: 2, label: "Tinted Blue", value: "blue" },
  { id: 3, label: "A Shade Green", value: "green" }
]



const showAccordion = () => {
  if (window.location.pathname === '/') {
    return <Accordion items={items} />;
  }
}

const showList = () => {
  if (window.location.pathname === '/list') {
    return <Search />;
  }
}


const showDropdown = () => {
  if (window.location.pathname === '/dropdown') {
    return <Dropdown />;
  }
}


const showTranslate = () => {
  if (window.location.pathname === '/translate') {
    return <Translate />;
  }
}

const pageRouter = (route, component) => {
  return window.location.pathname === route ? component : null;
}

export default () => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div className="App">
      {/* {showAccordion()}
      {showList()}
      {showTranslate()}
      {showDropdown()} */}
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
          label="Set Color"
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div >
  );
}


