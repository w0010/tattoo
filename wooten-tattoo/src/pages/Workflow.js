//Workflow.js
import React from 'react';
import Poem from '../components/Poem';
import Skills from '../components/Skills';
import Process from '../components/Process';

const Workflow =() => {
    return (
        <main>
            <div className='spacer' />
            <Poem />
            <Skills />
            <Process />
        </main>
    )
}

export default Workflow;