//Title.js
import React from 'react';
import ava2020 from '../assets/images/ava/ava_2020.jpg';

const Title = () => {
    return (
		<section className='flex'>
			<div id="avatar"><img src={ava2020} alt="W10" /></div>
			<div>
				<h1>
					Wooten
			        <span>Tattoo</span>
				</h1>
			</div>
		</section>
    );
}

export default Title;