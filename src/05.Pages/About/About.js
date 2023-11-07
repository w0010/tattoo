import BradWooten from '../../03.Organisms/BradWooten/BradWooten';
import Bio from '../../03.Organisms/Bio/Bio'; 
import Assets from '../../03.Organisms/Assets/Assets';
import Poem from '../../03.Organisms/Poem/Poem';

import './About.css';


const About = () => {

    return (
        <main id="about">
            <BradWooten />
            <Bio data-number="BIO" />
            <Assets data-number="02" />
            <Poem />
        </main>
    )
}

export default About;