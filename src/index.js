import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { UIProvider } from './context/uiContext';

ReactDOM.render(
    <UIProvider>
        <App />
    </UIProvider>,
    document.getElementById('root')
);
