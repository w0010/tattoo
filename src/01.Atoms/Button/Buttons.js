// Buttons.js

import { Link } from 'react-router-dom';
import './Button.css';


// Higher-order component for SVG

const withSVG = (Component, withSpan = true) => ({ children, ...props }) => (
  <Component {...props}>
    {withSpan ? <span>{children}</span> : children}
    <svg className="corner">
      <path d="M0,7 L0,0 L7,0" stroke="var(--text-color)" strokeWidth="1" fill="none" />
    </svg>
    <svg className="corner">
      <path d="M0,0 L7,0 L7,7" stroke="var(--text-color)" strokeWidth="1" fill="none" />
    </svg>
    <svg className="corner">
      <path d="M0,0 L0,7 L7,7" stroke="var(--text-color)" strokeWidth="1" fill="none" />
    </svg>
    <svg className="corner">
      <path d="M0,7 L7,7 L7,0" stroke="var(--text-color)" strokeWidth="1" fill="none" />
    </svg>
  </Component>

);

// Button component
const ButtonBase = ({ onClick, type, children, label }) => (
  <button onClick={onClick} type={type} aria-label={label}>
    {children}
  </button>
);

// LinkButton component
const LinkButtonBase = ({ to, children, label }) => (
  <Link to={to} className="button" aria-label={label}>
    {children}
  </Link>
);

// Burger component
const BurgerBase = ({ onClick, children, label }) => (
  <button className="burger" onClick={onClick} aria-label={label}>
    {children}
  </button>
)

// Button and LinkButton components with span
const Button = withSVG(ButtonBase, true);
const LinkButton = withSVG(LinkButtonBase, true);

// Burger component without span
const Burger = withSVG(BurgerBase, false);


export { Button, LinkButton, Burger };
