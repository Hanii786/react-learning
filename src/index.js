import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Banner from './components/hero';
import Header from './components/header';
import Banner1 from './media-gallery/t-shirt/image8.jpg'
import Banner2 from './media-gallery/t-shirt/image9.jpg'
import ImageWithText from './components/image-with-text';
import image1 from './media-gallery/t-shirt/image10.jpg';
import image2 from './media-gallery/t-shirt/image11.avif';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <App />
    <ImageWithText src={image1} cstmClass='media_left' heading="See the Story, Read the Message" description="Every image tells a story—and with the right words, that story becomes even more powerful. This section combines compelling visuals with meaningful text to deliver a message that resonates, informs, and inspires. Explore the details behind the image and uncover the full narrative." linkTitle="See the Story" url="#image_banner_1" />
    <Banner heading={'Welcome To React Learning Series'} Banner={Banner2} />
    <ImageWithText src={image2} cstmClass='media_right' heading="See the Story, Read the Message" description="Every image tells a story—and with the right words, that story becomes even more powerful. This section combines compelling visuals with meaningful text to deliver a message that resonates, informs, and inspires. Explore the details behind the image and uncover the full narrative." linkTitle="See the Story" url="#image_banner_1" />
    <Banner heading={'Welcome To React Learning Series props'} Banner={Banner1} />
  </React.StrictMode>
);

reportWebVitals();
