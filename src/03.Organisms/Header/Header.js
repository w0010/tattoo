// Header.js
import React, { useContext, useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { ThemeContext } from '../../01.Atoms/ThemeProvider';
import { Burger } from '../../01.Atoms/Button/Buttons';
import Title from '../../02.Molecules/Title/Title';
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
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);

	const [isScrolled, setIsScrolled] = useState(false);

	const handleScroll = () => {
		// Check if the page has been scrolled down
		const scrolled = window.scrollY > 0;
		setIsScrolled(scrolled);
	};

	useEffect(() => {
		// Add scroll event listener when the component mounts
		window.addEventListener('scroll', handleScroll);

		// Clean up the event listener when the component unmounts
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<header className={`${location.pathname === '/pages/Portfolio' ? 'portfolio' : ''}`}>

			<nav className={isScrolled ? 'scrolled' : ''}>
				{location.pathname !== '/pages/Portfolio'
					? <Title /> : <span />
				}
				<div className="nav-bar">
					<ul id="desktop-nav-list">
						<li><NavLink to="/pages/Portfolio">Portfolio</NavLink></li>
						<li><NavLink to="/pages/About">About</NavLink></li>
						<li><NavLink to="/pages/Workflow">Workflow</NavLink></li>
						<li><NavLink to="/pages/Appointments">Appointments</NavLink></li>
					</ul>

					<label className="theme-switch" htmlFor="checkbox">
						<input type="checkbox" id="checkbox" onChange={toggleTheme} />
						<div className="slider"></div>
					</label>

					<Burger id="burger" onClick={toggleMenu} label="Toggle navigation menu">
						Menu
					</Burger>
					<ul className={`popout-menu ${menuOpen ? 'open' : ''}`} ref={menuRef} onClick={closeMenu}>
						<li><NavLink to="/pages/Portfolio" onClick={closeMenu}>Portfolio</NavLink></li>
						<li><NavLink to="/pages/About" onClick={closeMenu}>About</NavLink></li>
						<li><NavLink to="/pages/Workflow" onClick={closeMenu}>Workflow</NavLink></li>
						<li><NavLink to="/pages/Appointments" onClick={closeMenu}>Appointments</NavLink></li>
					</ul>
				</div>
			</nav>
		</header>
	);
}

export default Header;