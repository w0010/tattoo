// Header.js
import React from 'react';
import '../styles/Header.css';

const Header = () => {
    return (
        <header class="flex-between">
			<div class="dash flex-center">
				<div></div>
			</div>
			<nav class="flex-between-center">
				<a href="/index.html" class="flex" id="title">
					<div id="ava"><img src="/img/ava/ava_2020.jpg" alt="Avatar"></img></div>
					<div>
						<h1>
							Wooten
							<span>Tattoo</span>
						</h1>
					</div>
				</a>
				<menu>
					<li>
						<a href="/tattoos.html">
							<span></span>
							<span></span>
							<span></span>
							<span></span>
							<p>Portfolio</p>
						</a>
					</li>
					<li>
						<a href="/workflow.html">
							<span></span>
							<span></span>
							<span></span>
							<span></span>
							<p>Workflow</p>
						</a>
					</li>
					<li>
						<a href="/appointments.html">
							<span></span>
							<span></span>
							<span></span>
							<span></span>
							<p>Appointments</p>
						</a>
					</li>
				</menu>
				<input type="checkbox" id="menu-toggle"></input>
				<div class="popout-menu">
					<ul>
						<li>
							<a href="/tattoos.html">
								<span></span>
								<span></span>
								<span></span>
								<span></span>
								<p>Portfolio</p>
							</a>
						</li>
						<li>
							<a href="/workflow.html">
								<span></span>
								<span></span>
								<span></span>
								<span></span>
								<p>Workflow</p>
							</a>
						</li>
						<li>
							<a href="/appointments.html">
								<span></span>
								<span></span>
								<span></span>
								<span></span>
								<p>Appointments</p>
							</a>
						</li>
					</ul>
				</div>
				<label for="menu-toggle" id="burger">
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					<p>Menu</p>
				</label>
			</nav>
			<div class="dash flex-center">
				<div></div>
			</div>
		</header>
    );
}

export default Header;