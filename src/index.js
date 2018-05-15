import React from 'react';
import ReactDom from 'react-dom';
// step1 : create new component , declare it and return html block

const App = () => {
  return <h2>Hello world!!!</h2>;
}

// step2 : take html generate it, and put in html

ReactDom.render(<App />, document.querySelector('.container'));

