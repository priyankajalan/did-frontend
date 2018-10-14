import React from 'react';
import ReactDOM from 'react-dom';
import BotImage from './bot.png';
// import Dictaphone from './Dictaphone';
import Script from './Script';

const MainApp = document.getElementById('app');

ReactDOM.render(
        <div style={{textAlign:'center',padding:'50px'}}>
            <h1 style={{color:'#26a8e0'}}>Amica</h1>
            <img src={BotImage} />
            <h3 style={{color:'#26a8e0'}}>
            Speak to me anytime when you feel lonely and I will be your friend always</h3>
            <h5 style={{color:'#26a8e0'}}>Presented by<br />
            <span style={{fontSize:'18px'}}> ISS-NUS</span><br />
            Digital Innovations and Design</h5>
            <Script />
        </div>,
    MainApp
);