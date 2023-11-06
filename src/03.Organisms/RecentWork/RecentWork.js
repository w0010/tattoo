//Genres.js
import React from 'react';
import './RecentWork.css';

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

const RecentWork = () => {
    return (
        <section id="recent-work">
	    	<h2>Recent work</h2>
	    	<div className="flex-between">
				
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