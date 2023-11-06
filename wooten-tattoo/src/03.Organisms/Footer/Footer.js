//Footer.js
import React from 'react';
import { PopupButton } from "@typeform/embed-react";
import './Footer.css';

const Footer = () => {
    return (
        <footer>

	    	<section className="theme">

	    		<h2>Inquire</h2>

	    		<abbr title="Wooten Tattoo">
					W10-T2<span>Tech-Noir Biomechanica</span>
				</abbr>
				
				<PopupButton id="<Ov6ioB7j>">
        		    <span>Contact</span>
        		</PopupButton>

	    		<div>
	    			<p>&#9650;</p>
					<p>Have a tattoo in mind?</p>
	    		</div>

	    	</section>

	    	<p className="shokunin">職人気質</p>

	    </footer>
    );
}

export default Footer;