//Genres.js
import React from 'react';
import { PopupButton } from "@typeform/embed-react";
import './Genres.css';

const Genres = () => {
	
    return (
        <section id="genres" className="dark">

			<h2>Styles</h2>

			<h3 className="block">
				<span>Procedural</span>
				<span>Cyberpunk</span>
				<span>Blackout</span>
			</h3>

			<PopupButton id="<Ov6ioB7j>" className="button">
        	    <span>Request Consult</span>
				{[...Array(4)].map((_, i) => <span key={i} />)}
        	</PopupButton>

		</section>
    );
}

export default Genres;