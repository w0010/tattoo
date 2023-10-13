//Home.js
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Genres from '../components/Genres';
import RecentWork from '../components/RecentWork';

const Home = () => {
    return (
        <div>
            <main>
                <Header />
                <Genres />
            </main>
            <ProcessPreview />
            <RecentWork />
            <Footer />
        </div>
    );
}

export default Home;