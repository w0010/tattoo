//Skills.js
import React from 'react';
import SkillBar from '../../01.Atoms/SkillBar';

const Assets = (props) => {
    return (
        <section id="skills" className="number" data-number={props['data-number']}>
            <h2>Tools to create with</h2>

            <article>

                <div className="article-content">
                    <div>
                        <p>Outside of tattooing, this infographic shows my creative interests and what I am comfortable with.</p>
                        <p>Though this chart is just for fun, you can use it to consider how your idea might overlap with mine.</p>
                    </div>
                </div>

                <figure className="article-content flex-end">
                    <SkillBar knowledge={3} interest={1}> Life drawing </SkillBar>
                    <SkillBar knowledge={2} interest={1}> Drafting </SkillBar>
                    <SkillBar knowledge={3} interest={1}> Oil painting </SkillBar>
                    <SkillBar knowledge={3} interest={3}> Graphic design </SkillBar>
                    <SkillBar knowledge={2} interest={3}> Figurative sculpture </SkillBar>
                    <SkillBar knowledge={2} interest={3}> Photography </SkillBar>
                    <SkillBar knowledge={1} interest={2}> ZBrush </SkillBar>
                    <SkillBar knowledge={3} interest={3}> UI / UX design </SkillBar>
                    <SkillBar knowledge={1} interest={3}> React </SkillBar>
                </figure>

            </article>
		</section>
    );
}

export default Assets;