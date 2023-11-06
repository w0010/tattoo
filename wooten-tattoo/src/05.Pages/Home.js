//Home.js
import React from 'react';
import Genres from '../03.Organisms/Genres/Genres';
import Process from '../03.Organisms/Process/Process';
import RecentWork from '../03.Organisms/RecentWork/RecentWork';

const Home = () => {
    return (
        <main id="home">
            <Genres />
            <Process data-number="W10"/>
            <RecentWork />
        </main>
    )
}

export default Home;