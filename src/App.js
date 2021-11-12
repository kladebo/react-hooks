import React from 'react';
import Home from './Home.js';

const App = ({ pageName }) => {
  if (pageName === 'Home') return <Home />;
  if (pageName === 'Speakers') return <>speakers</>;
  return <div>Not Found</div>;
};

export default App;
