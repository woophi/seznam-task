import { configureFela } from 'core/fela';
import React from 'react';
import ReactDOM from 'react-dom';
import { RendererProvider as Fela } from 'react-fela';
import { App } from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';

const felaRenderer = configureFela();

ReactDOM.render(
  <Fela renderer={felaRenderer}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Fela>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
