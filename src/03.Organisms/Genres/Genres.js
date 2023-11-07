//Genres.js
import React from 'react';
import { PopupButton } from "@typeform/embed-react";
import './Genres.css';
import '../../01.Atoms/Button/Button.css';

const Genres = () => {
	
    return (
        <section id="genres" className="dark">

			<h2>Styles</h2>
			<h3 className="block">
				<span>Procedural</span>
				<span>Cyberpunk</span>
				<span>Blackout</span>
			</h3>
            
			<PopupButton id="Ov6ioB7j">
        	    <span>Request Consult</span>
				<svg className="corner">
                    <path d="M0,7 L0,0 L7,0" stroke="var(--text-color)" strokeWidth="1" fill="none" filter="url(#glow)" />
                </svg>
                <svg className="corner">
                    <path d="M0,0 L7,0 L7,7" stroke="var(--text-color)" strokeWidth="1" fill="none" filter="url(#glow)" />
                </svg>
                <svg className="corner">
                    <path d="M0,0 L0,7 L7,7" stroke="var(--text-color)" strokeWidth="1" fill="none" filter="url(#glow)" />
                </svg>
                <svg className="corner">
                    <path d="M0,7 L7,7 L7,0" stroke="var(--text-color)" strokeWidth="1" fill="none" filter="url(#glow)" />
                </svg>
        	</PopupButton>
		
        </section>
    );
}

export default Genres;