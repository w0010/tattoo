//Home.js
import React from 'react';
import Genres from '../03.Organisms/Genres/Genres';
import Process from '../03.Organisms/Process/Process';
import RecentWork from '../03.Organisms/RecentWork/RecentWork';

const Home = () => {
    return (
        <main>
            <Genres />
            <Process />
            <RecentWork />
        </main>
    )
}

export default Home;