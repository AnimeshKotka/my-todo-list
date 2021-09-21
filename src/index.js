import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore  from './store/configureStore';
import { BrowserRouter as Router } from "react-router-dom";

import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';


const THEME = createMuiTheme({
  typography: {
   "fontFamily": `-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji`,
  },
  overrides: {
    MuiButton: {
      root: {
        margin: '5px 0 5px',
      },
    },
  },
});

const store = configureStore();

ReactDOM.render(
  <MuiThemeProvider theme={THEME}>
    <Provider store={store}>
      <React.StrictMode>
        <Router>
          <App />
        </Router>
      </React.StrictMode>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
