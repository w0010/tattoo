//Footer.js
import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer>

	    	<section>
	    		<h2>Inquire</h2>
	    		<div>
	    			<abbr title="Wooten Tattoo">W10-T2</abbr>
	    			<p>Tech-Noir Biomechanica</p>
	    		</div>
	    		<div id="big-contact" className="flex-center">
					<button>Contact</button>
					</div>
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