import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {ThemeProvider} from "@mui/styles";
import {themes} from './theme'

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={themes}>
            <App/>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

