import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';



const rootElement = document.getElementById('root');
const root = createRoot(rootElement);



root.render(
   
         <BrowserRouter>
            <App />
        </BrowserRouter>
);

reportWebVitals();







/*







ReactDOM.render(<App/>,document.getElementById('root')
);


reportWebVitals();





*/