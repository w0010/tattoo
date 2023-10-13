//Head.js
import React from 'react';
import { Helmet } from 'react-helmet';

const Head = () => {
    return (
        <Helmet>
            <title>Wooten Tattoo</title>
        	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
        	<meta
                name="description"
                content="Procedural, cyberpunk, and blackwork tattoo artist"
            />
        	<meta name="author" content="Brad Wooten" />
        	<meta name="keywords" content=" cyberpunk, tattoo, brad wooten, bodysuit, black tattoo, minimal tattoo, cyberpunk tattoo " />
        	<link rel="stylesheet" href="https://use.typekit.net/pha7yfy.css" />
        	<link rel="stylesheet" href="css/root.css" />
        	<script type="module" src="js/polyspace.js"></script>
        	<script type="module" src="js/main.js"></script>
        </Helmet>
    );
}

export default Head;