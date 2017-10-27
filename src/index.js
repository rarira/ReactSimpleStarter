import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCW5Src9sAmOe-_gCXhmZULbFxXKmuzFu0';

// Create a new component. This Component should produce
// some HTML
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
};

// Take this component's　generated HTML and put it
// on the page(in the DOM)
ReactDOM.render(<App />,document.querySelector('.container'));
