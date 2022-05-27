import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Clone from './Clone';
import Context from './Context';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,Routes,Route} from "react-router-dom";  
import Pdetail from './Pdetail'  
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import store from './store/store';
import Cart from './Cart';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/Pdetail" element={<Pdetail />} />
          <Route path="/clone" element={<Clone />} />
          <Route path="/context" element={<Context />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </Provider>  
    </>
);

reportWebVitals();
