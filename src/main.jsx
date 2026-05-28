import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { WatchProvider } from './WatchContext.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WatchProvider>
      <App />
    </WatchProvider>
  </React.StrictMode>,
);