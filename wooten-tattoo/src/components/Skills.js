//Skills.js
import React from 'react';
import '../styles/Skills.css';

const Skills = () => {
    return (
        <section id="skills" className="flex-col">
            <h2>Tools to create with</h2>
            <article className="flex">
                <div>
                    <h3>Skills</h3>
                    <p>Outside of tattooing, this shows my creative interests and what I am comfortable with.</p>
                    <p>Though this chart is just for fun, you can use it to consider how your idea might overlap with mine.</p>
                </div>
                <div>
                    <div className="skill-block"><p>Life drawing</p></div>
                    <div className="skill-block"><p>Drafting</p></div>
                    <div className="skill-block"><p>Oil painting</p></div>
                    <div className="skill-block"><p>Graphic design</p></div>
                    <div className="skill-block"><p>Figurative sculpture</p></div>
                    <div className="skill-block"><p>Photography</p></div>
                    <div className="skill-block"><p>ZBrush</p></div>
                    <div className="skill-block"><p>UI / UX design</p></div>
                    <div className="skill-block"><p>three.js</p></div>
                    <div className="skill-block"><p>Front-end development</p></div>
                </div>
            </article>
		</section>
    );
}

export default Skills;