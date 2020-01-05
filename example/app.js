import React from 'react';
import ReactDOM from 'react-dom';
import useStorageInformation from 'react-storage-information';

function App() {
  useStorageInformation();

  return <p>app</p>;
}

const appNode = document.getElementById('app');

if (!appNode) {
  throw new Error('App container does not exists!');
}

ReactDOM.render(<App />, appNode);
