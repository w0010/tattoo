//Footer.js
import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="flex-col">

	    	<section className="flex-col">
	    		<h2>Inquire</h2>
	    		<div>
	    			<abbr title="Wooten Tattoo">W10-T2</abbr>
	    			<p>Tech-Noir Biomechanica</p>
	    		</div>
	    		<div id="big-contact" className="flex-center"><button>Contact</button></div>
	    	</section>

	    	<div className="flex-col-center">
	    		<p>&#9650;</p>
	    		<p>Have a tattoo in mind?</p>
	    	</div>
            
	    	<div className="flex-center">
	    		<p className="shokunin">職人気質</p>
	    	</div>

	    </footer>
    );
}

export default Footer;