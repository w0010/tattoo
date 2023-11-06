//Portfolio.js
import React from 'react';
import Title from '../../02.Molecules/Title';

import tt01 from '../../01.Atoms/Images/tt/01 Brad Wooten Tattoo.jpg';
import tt02 from '../../01.Atoms/Images/tt/02 Brad Wooten Tattoo.jpg';
import tt03 from '../../01.Atoms/Images/tt/03 Brad Wooten Tattoo.jpg';

import tt04 from '../../01.Atoms/Images/tt/04 Brad Wooten Tattoo.jpg';
import tt05 from '../../01.Atoms/Images/tt/05 Brad Wooten Tattoo.jpg'; 
import tt06 from '../../01.Atoms/Images/tt/06 Brad Wooten Tattoo.jpg';

import tt07 from '../../01.Atoms/Images/tt/07 Brad Wooten Tattoo.jpg';
import tt08 from '../../01.Atoms/Images/tt/08 Brad Wooten Tattoo.jpg';
import tt09 from '../../01.Atoms/Images/tt/09 Brad Wooten Tattoo.jpg';

import tt10 from '../../01.Atoms/Images/tt/10 Brad Wooten Tattoo.jpg';
import tt11 from '../../01.Atoms/Images/tt/11 Brad Wooten Tattoo.jpg';
import tt12 from '../../01.Atoms/Images/tt/12 Brad Wooten Tattoo.jpg';

import './Portfolio.css';

const Portfolio = () => {
    return (
        <main id="portfolio">

            <section>

				<Title />

				<h2>Portfolio</h2>

	        	<div id="portfolio-display" className="flex-start">
	        		<div className="flex-col">
	        			<img src={tt01} alt="" />
	        			<img src={tt02} alt="" />
		    			<img src={tt03} alt="" />
		    			<img src={tt10} alt="" />
	        		</div>
	        		<div className="flex-col">
		    			<img src={tt04} alt="" />
	        			<img src={tt05} alt="" />
		    			<img src={tt06} alt="" />
	        			<img src={tt11} alt="" />
	        		</div>
	        		<div className="flex-col">
	        			<img src={tt07} alt="" />
	        			<img src={tt08} alt="" />
		    			<img src={tt09} alt="" />
		    			<img src={tt12} alt="" />
	        		</div>
	        	</div>

	        </section>

        </main>
    );
}

export default Portfolio;