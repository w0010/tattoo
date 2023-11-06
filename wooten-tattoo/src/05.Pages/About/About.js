import React, { useState } from 'react';

import Poem from '../../03.Organisms/Poem/Poem';

import BradWooten from '../../03.Organisms/BradWooten/BradWooten';
import Bio from '../../03.Organisms/Bio/Bio';

import { Button } from '../../01.Atoms/Button/Buttons';
import './About.css';


const About = () => {

    return (
        <main id="about">
            <BradWooten />
            <Bio data-number="BIO" />
            <Poem />
        </main>
    )
}

export default About;