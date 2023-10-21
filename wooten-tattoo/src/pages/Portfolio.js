//Portfolio.js
import React from 'react';

import ava2020 from '../assets/images/ava/ava_2020.jpg';

import tt01 from '../assets/images/tt/01 Brad Wooten Tattoo.jpg';
import tt02 from '../assets/images/tt/02 Brad Wooten Tattoo.jpg';
import tt03 from '../assets/images/tt/03 Brad Wooten Tattoo.jpg';

import tt04 from '../assets/images/tt/04 Brad Wooten Tattoo.jpg';
import tt05 from '../assets/images/tt/05 Brad Wooten Tattoo.jpg'; 
import tt06 from '../assets/images/tt/06 Brad Wooten Tattoo.jpg';

import tt07 from '../assets/images/tt/07 Brad Wooten Tattoo.jpg';
import tt08 from '../assets/images/tt/08 Brad Wooten Tattoo.jpg';
import tt09 from '../assets/images/tt/09 Brad Wooten Tattoo.jpg';

import tt10 from '../assets/images/tt/10 Brad Wooten Tattoo.jpg';
import tt11 from '../assets/images/tt/11 Brad Wooten Tattoo.jpg';
import tt12 from '../assets/images/tt/12 Brad Wooten Tattoo.jpg';

import '../styles/Portfolio.css';
import '../styles/RecentWork.css';

const Portfolio = () => {
    return (
        <main id="portfolio">

            <section className="flex-col">
				
				<div className="flex">
					<div id="avatar"><img src={ava2020} alt="W10" /></div>
					<div><h1>Wooten <span>Tattoo</span></h1></div>
	        	</div>

				<h2>Portfolio</h2>

	        	<div id="portfolio-display" className="flex-end">
	        		<div className="flex-col">
	        			<img src={tt01} alt="" />
	        			<img src={tt02} alt="" />
		    			<img src={tt03} alt="" />
	        		</div>
	        		<div className="flex-col">
		    			<img src={tt04} alt="" />
	        			<img src={tt05} alt="" />
		    			<img src={tt06} alt="" />
	        		</div>
	        		<div className="flex-col">
	        			<img src={tt07} alt="" />
	        			<img src={tt08} alt="" />
		    			<img src={tt09} alt="" />
	        		</div>
	        		<div className="flex-col">
		    			<img src={tt10} alt="" />
	        			<img src={tt11} alt="" />
		    			<img src={tt12} alt="" />
	        		</div>
	        	</div>

	        </section>

        </main>
    );
}

export default Portfolio;