//Poem.js
import React from 'react';
import './Poem.css';

const Poem = (props) => {
    return (
        <section id="poem" className="number" data-number={props['data-number']}>
            <div className="polygon-card">
    		    <p>
                    Who makes these changes?<br />
                    I shoot an arrow right.<br />
                    It lands left.
                </p>
                <p>
                    I ride after a deer and I find myself<br />
                    chased by a hog.
                </p>
                <p>
                    I plot to get what I want<br />
                    and end up in prison.
                </p>
                <p>
                    I dig pits to trap others<br />
                    and fall in.
                </p>
                <p>
                    I should be suspicious<br />
                    of what I want.
                </p>
            </div>
		</section>
    );
}

export default Poem;