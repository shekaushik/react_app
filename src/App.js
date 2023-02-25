import './App.css';
import {React}  from 'react';
import Screen2 from './components/screen2/screen2';
import Navbar from './components/page1/navbar';
import Page1 from './components/page1/d_herolight1';
import ImageTextPage1 from './components/text_images/first';
import ImageTextPage3 from './components/text_images/third';
import ImageTextPage2 from './components/text_images/second';
import Footer from './components/footer/footer';
import Bottom from './components/footer/footerlist';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Page1></Page1>
      <Screen2></Screen2>
      <ImageTextPage1></ImageTextPage1>
      <ImageTextPage2></ImageTextPage2>
      <ImageTextPage3></ImageTextPage3>
      <Footer></Footer>
      <Bottom></Bottom>
    </div>
  );
}

export default App;
