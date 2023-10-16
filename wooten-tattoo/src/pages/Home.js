//Home.js
import React from 'react';
import Genres from '../components/Genres';
import Process from '../components/Process';
import RecentWork from '../components/RecentWork';

const Home = () => {
    return (
        <main>
            <Genres />
            <Process />
            <RecentWork />
        </main>
    );
}

export default Home;