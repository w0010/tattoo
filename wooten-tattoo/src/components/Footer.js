//Footer.js
import React from 'react';
import '../Footer.css';

const Footer = () => {
    return (
        <footer class="flex-col">

	    	<section class="flex-col">
	    		<h2>Inquire</h2>
	    		<div>
	    			<abbr title="Wooten Tattoo">W10-T2</abbr>
	    			<p>Tech-Noir Biomechanica</p>
	    		</div>
	    		<div id="big-contact" class="flex-center"><button>Contact</button></div>
	    	</section>

	    	<div class="flex-col-center">
	    		<p>&#9650;</p>
	    		<p>Have a tattoo in mind?</p>
	    	</div>
            
	    	<div class="flex-center">
	    		<p class="shokunin">職人気質</p>
	    	</div>

	    </footer>
    );
}

export default Footer;