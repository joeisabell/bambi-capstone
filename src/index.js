import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import theme from 'utils/Theme'
import App from 'pages/App';

ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider theme={ theme }>
      <App />
    </ThemeProvider>
  </BrowserRouter>

  , document.getElementById('root'));
