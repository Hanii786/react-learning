import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Banner from './components/hero';
import Header from './components/header';
import Banner1 from './media-gallery/t-shirt/image8.jpg'
import Banner2 from './media-gallery/t-shirt/image9.jpg'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <App />
    <Banner heading={'Welcome To React Learning Series'} Banner={Banner2} />
    <Banner heading={'Welcome To React Learning Series props'} Banner={Banner1} />
  </React.StrictMode>
);

reportWebVitals();
