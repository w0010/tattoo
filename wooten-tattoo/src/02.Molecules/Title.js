//Title.js
import React from 'react';
import ava from '../01.Atoms/Images/ava/ava_2020.jpg';

import { Link } from 'react-router-dom';

const Title = () => {
    return (
		<Link to="/" className="title">
			<div className="ava"><img src={ava} alt="W10" /></div>
			<h1>Wooten <span>Tattoo</span></h1>
		</Link>
    );
}

export default Title;