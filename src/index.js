import React from 'react';
import ReactDom from 'react-dom';

import SearchBar from './components/search_bar'

const API_KEY = 'AIzaSyARO7zct2lmuqgK1Sy0_kFjEVRsNZ4HQlQ';


// step1 : create new component , declare it and return html block

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

// step2 : take html generate it, and put in html

ReactDom.render(<App />, document.querySelector('.container'));

