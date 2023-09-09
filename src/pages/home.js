import React from 'react';
import Header from '../components/header';
import MainContent from '../components/MainContent';
import Footer from '../components/footer';


const Home = () => {
    return (
        <>
            <Header />
            <MainContent nameMine="Home" />
            <Footer />
        </>
    );
}

export default Home;
