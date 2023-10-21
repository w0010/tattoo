//Workflow.js
import React from 'react';
import { Link } from 'react-router-dom';

import Poem from '../components/Poem';
import Skills from '../components/Skills';
import Process from '../components/Process';

const Workflow =() => {
    return (
        <main>
            <div className='spacer' />
            <Poem />
            <Skills />
            <section>
                <h2>Biography</h2>
                <Link to='/pages/Bio'>
                    {[...Array(4)].map((_, i) => <span key={i} />)}
                    <p>Read my bio</p>
                </Link>
            </section>
            <Process />
        </main>
    )
}

export default Workflow;