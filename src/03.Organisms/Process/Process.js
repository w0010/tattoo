// Process.js
import React from 'react';
import { LinkButton } from '../../01.Atoms/Button/Buttons';
import ttdesign from '../../01.Atoms/Images/misc/TtDesign.png';


const Process = (props) => {
	return (
		<section id="process" className="number" data-number={props['data-number']}>
			<h2>Design process</h2>
			<article>

				<div className="article-content">
					<h3>Full customizability</h3>
					<p>Tailored measurements, live video designing, and deep collaboration create a fertile environment to develop a transformative tattoo that speaks to you.</p>
					<LinkButton to="/pages/Workflow">
						See the workflow
					</LinkButton>
				</div>

				<div className="article-image-container">
					<img className="article-image" src={ttdesign} alt="Customizing a design" />
				</div>

			</article>
		</section>
	);
}

export default Process;