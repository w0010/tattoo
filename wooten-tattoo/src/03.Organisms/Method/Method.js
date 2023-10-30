import React from 'react';

import mind from '../../01.Atoms/Images/des/Design-Neo.jpg'

const Method = (props) => {
    return (
        <section id="method" className="number" data-number={props['data-number']}>
            <h2>Method</h2>
            <h3>Before we begin</h3>

            <article>
                <div>
                    <h4>What's on your mind?</h4>
                    <p>
                        Whether you know exactly what you want, or don't have a clue, we begin with a simple phone call.
                        In it, we'll discuss what's on your mind, no commitment necessary.
                        I wish only to help people find their ideal solution, even if that means taking a different direction.
                    </p>
                </div>
                <div><img src={mind} alt="" /></div>
            </article>

            <article>
                <div>
                    <h4>See or even participate in the design</h4>
                    <p>
                        Not only will you see the design long before you get tattooed, but *many pieces* of potential design along the way.
                        I design by process of elimination, leaving no stone unturned.
                    </p>
                </div>
                <div><img src={mind} alt="" /></div>
            </article>

            <article>
                <div>
                    <h4>Collaborate or just watch</h4>
                    <p>
                        The design process is digitally simulated over photos of the client, and in person via freehand.
                        The entire process is visible, and you can help guide the outcome.
                    </p>
                </div>
                <div><img src={mind} alt="" /></div>
            </article>

            <article>
                <div>
                    <h4>Local or long distance</h4>
                    <p>
                        Designs are constructed over photographs via digital simulation, and in-person via freehand.
                        If you're traveling here to get tattooed, we can focus on the digital side of things before you make arrangements to visit.
                        That way, we'll have a solid plan before you get here.
                    </p>
                </div>
                <div><img src={mind} alt="" /></div>
            </article>

            <article>
                <div>
                    <h4>Made one with the body</h4>
                    <p>
                        The body influences the appearance of the tattoo as much as the tattoo influences the perception of the body.
                        For tattoos, that link is inseparable, and so it is one of my highest priorities to make sure they compliment one another. 
                    </p>
                </div>
                <div><img src={mind} alt="" /></div>
            </article>
        </section>
    )
}

export default Method;