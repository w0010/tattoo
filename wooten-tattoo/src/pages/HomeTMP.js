//Home.js
import React from 'react';
import Genres from '../components/Genres';
import Process from '../components/Process';
import RecentWork from '../components/RecentWork';

const Home = () => {
    return (
        <div>
            <Genres />
            <Process />
            <RecentWork />
        </div>
    );
}

export default Home;