import React from 'react';
import Header from './components/header';
import SiteInfo from './components/main';
import Footer from './components/footer';
import './assets/scss/main.scss';


function App() {
    return (
        <div className='App-body'>
            <Header />
            <SiteInfo />
            <Footer />
        </div>
    )
}

export default App;
