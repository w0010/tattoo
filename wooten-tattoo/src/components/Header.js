// Header.js
import React, { useState } from 'react';
import ava2020 from '../assets/images/ava/ava_2020.jpg';
import '../styles/Header.css';
import { Link, NavLink, useLocation } from 'react-router-dom';

const Header = () => {
	const location = useLocation();
	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => setMenuOpen(!menuOpen);
	const closeMenu = () => setMenuOpen(false);


    return (
        <header>
			<nav className={ `${ location.pathname === '/pages/Portfolio' ? 'portfolio' : '' }` }>
				{location.pathname !== '/pages/Portfolio' && (
					<Link to="/" className="flex" id="title">
						<div id="ava"><img src={ava2020} alt="W10" /></div>
						<div>
							<h1>
								Wooten
								<span>Tattoo</span>
							</h1>
						</div>
					</Link>
				)}
				<menu>
					<li>
						<NavLink to="/pages/Portfolio">
							{[...Array(4)].map((_, i) => <span key={i} />)}
							<p>Portfolio</p>
						</NavLink>
					</li>
					<li>
						<NavLink to="/pages/Workflow">
							{[...Array(4)].map((_, i) => <span key={i} />)}
							<p>Workflow</p>
						</NavLink>
					</li>
					<li>
						<NavLink to="/pages/Appointments">
							{[...Array(4)].map((_, i) => <span key={i} />)}
							<p>Appointments</p>
						</NavLink>
					</li>
				</menu>

				<label for="menu-toggle" id="burger" onClick={toggleMenu}>
					<input type="checkbox" id="menu-toggle" />
					<span /><span /><span /><span />
					<p>Menu</p>
					<div className="popout-menu" onClick={closeMenu}>
						<ul>
							<li>
								<NavLink to="/pages/Portfolio" onClick={closeMenu}>
									{[...Array(4)].map((_, i) => <span key={i} />)}
									<p>Portfolio</p>
								</NavLink>
							</li>
							<li>
								<NavLink to="/pages/Workflow" onClick={closeMenu}>
									{[...Array(4)].map((_, i) => <span key={i} />)}
									<p>Workflow</p>
								</NavLink>
							</li>
							<li>
								<NavLink to="/pages/Appointments" onClick={closeMenu}>
									{[...Array(4)].map((_, i) => <span key={i} />)}
									<p>Appointments</p>
								</NavLink>
							</li>
						</ul>
					</div>
				</label>
			</nav>
		</header>
    );
}

export default Header;