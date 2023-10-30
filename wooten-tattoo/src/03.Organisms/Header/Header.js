// Header.js
import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Title from '../../02.Molecules/Title';
import './Header.css';

const Header = () => {
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
        <header className={ `${ location.pathname === '/pages/Portfolio' ? 'portfolio' : '' }` }>
			
			<nav>
				{location.pathname !== '/pages/Portfolio' 
					? <Title />
					: <span />
				}

				<ul id="desktop-nav-list">
					<li>
						<NavLink to="/pages/Portfolio">
							<span>Portfolio</span>
							{[...Array(4)].map((_, i) => <span key={i} />)}
						</NavLink>
					</li>
					<li>
						<NavLink to="/pages/Workflow">
							<span>Workflow</span>
							{[...Array(4)].map((_, i) => <span key={i} />)}
						</NavLink>
					</li>
					<li>
						<NavLink to="/pages/Appointments">
							<span>Appointments</span>
							{[...Array(4)].map((_, i) => <span key={i} />)}
						</NavLink>
					</li>
				</ul>

				<label id="burger" onClick={toggleMenu}>
					<span>Menu</span>
					{[...Array(4)].map((_, i) => <span key={i} />)}

					<div className="popout-menu" ref={menuRef} style={{display: menuOpen ? 'block' : 'none'}} onClick={closeMenu}>
						<ul>
							<li>
								<NavLink to="/pages/Portfolio" onClick={closeMenu}>
									<span>Portfolio</span>
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

			</nav>
		</header>
    );
}

export default Header;