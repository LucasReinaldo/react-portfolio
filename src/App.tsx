import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';

import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Home />
      </BrowserRouter>
    </>
  );
};

export default App;
