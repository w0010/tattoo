// Header.js
import React from 'react';
import '../styles/Header.css';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header className="flex-between">
			<div className="dash flex-center">
				<div></div>
			</div>
			<nav className="flex-between-center">
				<Link to="/" className="flex" id="title">
					<div id="ava"><img src="/img/ava/ava_2020.jpg" alt="Avatar"></img></div>
					<div>
						<h1>
							Wooten
							<span>Tattoo</span>
						</h1>
					</div>
				</Link>
				<menu>
					<li>
						<NavLink to="/pages/Portfolio">
							<span></span>
							<span></span>
							<span></span>
							<span></span>
							<p>Portfolio</p>
						</NavLink>
					</li>
					<li>
						<NavLink to="/pages/Workflow">
							<span></span>
							<span></span>
							<span></span>
							<span></span>
							<p>Workflow</p>
						</NavLink>
					</li>
					<li>
						<NavLink to="/pages/Appointments">
							<span></span>
							<span></span>
							<span></span>
							<span></span>
							<p>Appointments</p>
						</NavLink>
					</li>
				</menu>
				<input type="checkbox" id="menu-toggle"></input>
				<div className="popout-menu">
					<ul>
						<li>
							<NavLink to="/pages/Portfolio">
								<span></span>
								<span></span>
								<span></span>
								<span></span>
								<p>Portfolio</p>
							</NavLink>
						</li>
						<li>
							<NavLink to="/pages/Workflow">
								<span></span>
								<span></span>
								<span></span>
								<span></span>
								<p>Workflow</p>
							</NavLink>
						</li>
						<li>
							<NavLink to="/pages/Appointments">
								<span></span>
								<span></span>
								<span></span>
								<span></span>
								<p>Appointments</p>
							</NavLink>
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
			<div className="dash flex-center">
				<div></div>
			</div>
		</header>
    );
}

export default Header;