// Workflow.js
import React, {useState} from 'react';
import Poem from '../../03.Organisms/Poem/Poem';
import Assets from '../../03.Organisms/Skills/Assets';
import Method from '../../03.Organisms/Method/Method';
import Bio from '../../03.Organisms/Bio/Bio';
import Madness from '../../02.Molecules/Flowchart/Madness';

const Workflow = () => {
    const [isBioOpen, setIsBioOpen] = useState(false);
    const openBio = () => {
        setIsBioOpen(true);
    }
    const closeBio = () => {
        setIsBioOpen(false);
    }

    return (
        <main id="workflow">
            
            <Madness data-number="TATTOO" />
            <Method data-number="DSGN" />
            <Assets data-number="SKL" />

            <section>
                <h2>About Brad</h2>
                <button onClick={openBio} className="button">
                    <span>Read more about the artist</span>
                    {[...Array(4)].map((_, i) => <span key={i} />)}
                </button>
                {isBioOpen && <Bio closeBio={closeBio} />}
            </section>
            
            <Poem data-number="RUMI" />
        </main>
    );
}

export default Workflow;