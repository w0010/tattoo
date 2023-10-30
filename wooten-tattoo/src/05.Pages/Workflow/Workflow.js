// Workflow.js
import React, {useState} from 'react';
import Poem from '../../03.Organisms/Poem/Poem';
import Skills from '../../03.Organisms/Skills/Skills';
import Method from '../../03.Organisms/Method/Method';
import Bio from '../../03.Organisms/Bio/Bio';
import Flow from '../../02.Molecules/Flowchart/Flow';

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
            <Method data-number="DSGN" />
            <Flow data-number="TATTOO" />
            <Skills data-number="SKL" />

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