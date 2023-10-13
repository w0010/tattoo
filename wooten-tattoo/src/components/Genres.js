//Genres.js
import React from 'react';
import '../styles/Genres.css';

const Genres = () => {
    return (
        <section class="flex-col">
			<h2>Styles</h2>
			<h3>
				<span>Procedural</span>
				<span>Cyberpunk</span>
				<span>Blackout</span>
			</h3>
			<div class="flex">
				<div id="block"></div>
				<div class="flex-center" style="flex-grow: 1;">
					<button>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<p>contact</p>
					</button>
				</div>
			</div>
		</section>
    );
}