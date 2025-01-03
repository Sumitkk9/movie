import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux'
import { store } from './store/store';
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import Detailpage from './component/detailpage';
import Searchpage from './component/saerchpage';
import Header from './component/header';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Provider store={store} >

    
    <Router>
    <Header/>
    <Routes>
      <Route  path='/' element={<App/>}  />
      <Route  path='/search/:value' element={<Searchpage/>}  />
      <Route  path='/title/:imdbid' element={<Detailpage/>}  />
    </Routes>
    </Router>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
