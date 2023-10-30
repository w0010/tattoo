// Process.js
import React from 'react';
import ttdesign from '../../01.Atoms/Images/misc/TtDesign.png';
import { Link } from 'react-router-dom';

const Process = (props) => {
    return (
        <section id="process" className="number" data-number={props['data-number']}>
		    <h2>Artist's process</h2>
		    <article>

		    	<div>
		    		<h3>A design you can be close to.</h3>
		    		<p>Tailored measurements, live video designing, and deep collaboration create a fertile environment to develop a transformative tattoo that speaks to you.</p>
		    		<Link to="/pages/Workflow" className="button">
						<span>See the workflow</span>
						{[...Array(4)].map((_, i) => <span key={i} />)}
		    		</Link>
		    	</div>
				
		    	<div>
		    		<img src={ttdesign} alt="Customizing a design" />
		    	</div>

		    </article>
	    </section>
    );
}

export default Process;