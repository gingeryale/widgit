import React from 'react';
import './App.css';
import Accordion from './Accordion';
import Search from './Search';

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

export default () => {
  return (
    <div className="App">
      <Search />
    </div>
  );
}


