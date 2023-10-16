//Genres.js
import React from 'react';

const Genres = () => {
    return (
        <section className="flex-col">
			<h2>Styles</h2>
			<h3>
				<span>Procedural</span>
				<span>Cyberpunk</span>
				<span>Blackout</span>
			</h3>
			<div className="flex">
				<div id="block" />
				<div className="flex-center" style={{ flexGrow: 1 }}>
					<button>
						<span />
						<span />
						<span />
						<span />
						<p>contact</p>
					</button>
				</div>
			</div>
		</section>
    );
}

export default Genres;