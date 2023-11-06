// Header.js
import React, { useContext, useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { ThemeContext } from '../../01.Atoms/ThemeProvider';
import Title from '../../02.Molecules/Title';
import './Header.css';

const Header = () => {
	const { toggleTheme } = useContext(ThemeContext); // Use useContext to consume the ThemeContext


	const location = useLocation();
	const [menuOpen, setMenuOpen] = useState(false);
	const menuRef = useRef(null); // Ref for the popout menu

	const toggleMenu = () => setMenuOpen(!menuOpen);
	const closeMenu = () => setMenuOpen(false);

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (menuRef.current && !menuRef.current.contains(event.target)) {
				closeMenu();
			}
		}
		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);  // Cleanup the listener on unmount
	}, []);

	return (
		<header className={`${location.pathname === '/pages/Portfolio' ? 'portfolio' : ''}`}>

			<nav>
				{location.pathname !== '/pages/Portfolio'
					? <Title /> : <span />
				}
				<div className="nav-bar">
					<ul id="desktop-nav-list">
						<li>
							<NavLink to="/pages/Portfolio">
								<span>Portfolio</span>
							</NavLink>
						</li>
						<li>
							<NavLink to="/pages/About">
								<span>About</span>
							</NavLink>
						</li>
						<li>
							<NavLink to="/pages/Workflow">
								<span>Workflow</span>
							</NavLink>
						</li>
						<li>
							<NavLink to="/pages/Appointments">
								<span>Appointments</span>
							</NavLink>
						</li>
					</ul>

					<label id="burger" onClick={toggleMenu}>
						Menu

						<div className="popout-menu" ref={menuRef} style={{ display: menuOpen ? 'block' : 'none' }} onClick={closeMenu}>
							<ul>
								<li>
									<NavLink to="/pages/Portfolio" onClick={closeMenu}>
										<span>Portfolio</span>
										{[...Array(4)].map((_, i) => <span key={i} />)}
									</NavLink>
								</li>
								<li>
									<NavLink to="/pages/About" onClick={closeMenu}>
										<span>About</span>
										{[...Array(4)].map((_, i) => <span key={i} />)}
									</NavLink>
								</li>
								<li>
									<NavLink to="/pages/Workflow" onClick={closeMenu}>
										<span>Workflow</span>
										{[...Array(4)].map((_, i) => <span key={i} />)}
									</NavLink>
								</li>
								<li>
									<NavLink to="/pages/Appointments" onClick={closeMenu}>
										<span>Appointments</span>
										{[...Array(4)].map((_, i) => <span key={i} />)}
									</NavLink>
								</li>
							</ul>
						</div>
						
					</label>

					<label className="theme-switch" htmlFor="checkbox">
						<input type="checkbox" id="checkbox" onChange={toggleTheme} />
						<div className="slider"></div>
					</label>
				</div>
			</nav>
		</header>
	);
}

export default Header;