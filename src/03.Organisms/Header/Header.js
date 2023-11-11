// Header.js
import React, { useContext, useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { ThemeContext } from '../../01.Atoms/ThemeProvider';
import { Burger } from '../../01.Atoms/Button/Buttons';
import Title from '../../02.Molecules/Title/Title';
import './Header.css';

// Custom hook for handling click outside of ref element
function useClickOutside(ref, handler) {
	useEffect(() => {
		const listener = (event) => {
			if (!ref.current || ref.current.contains(event.target)) {
				return;
			}
			handler(event);
		};

		document.addEventListener('mousedown', listener);
		return () => {
			document.removeEventListener('mousedown', listener);
		};
	}, [ref, handler]);
}

// Custom hook for handling scroll event and determining if the page has been scrolled
function useScroll() {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 0);
		};

		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return isScrolled;
}

const Header = () => {
	const { toggleTheme } = useContext(ThemeContext);
	const location = useLocation();
	const [menuOpen, setMenuOpen] = useState(false);
	const menuRef = useRef(null);

	const toggleMenu = () => {
		setMenuOpen(prev => !prev);
	};

	const closeMenu = () => {
		setMenuOpen(false);
	};

	// Detects when the route changes (navigation event)
	useEffect(() => {
		closeMenu(); // Close the menu whenever the location changes
	  }, [location]);

	// Use custom hook to close menu when clicking outside
	useClickOutside(menuRef, closeMenu);

	// Use custom hook to change nav bar style on scroll
	const isScrolled = useScroll();

	return (
		<header className={`${location.pathname === '/pages/Portfolio' ? 'portfolio' : ''}`}>
			<nav className={isScrolled ? 'scrolled' : ''}>
				{location.pathname !== '/pages/Portfolio' ? <Title /> : <span />}
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

					<Burger id="burger" onClick={toggleMenu} label={menuOpen ? "Close navigation menu" : "Open navigation menu"}>
						{menuOpen ? 'Close' : 'Menu'}
					</Burger>
					<ul className={`popout-menu ${menuOpen ? 'open' : ''}`} ref={menuRef}>
						<li><NavLink to="/pages/Portfolio">Portfolio</NavLink></li>
						<li><NavLink to="/pages/About">About</NavLink></li>
						<li><NavLink to="/pages/Workflow">Workflow</NavLink></li>
						<li><NavLink to="/pages/Appointments">Appointments</NavLink></li>
					</ul>
				</div>
			</nav>
		</header>
	);
}

export default Header;