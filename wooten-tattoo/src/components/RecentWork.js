//Genres.js
import React from 'react';
import '../styles/RecentWork.css';

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

const RecentWork = () => {
    return (
        <section className="flex-col">
	    	<h2>Recent work</h2>
	    	<div className="flex-end" id="recent-work">
				
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
    );
}

export default RecentWork;