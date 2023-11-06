// Buttons.js

import { Link } from 'react-router-dom';
import './Button.css';


// Higher-order component for SVG
const withSVG = (Component) => ({ children, ...props }) => (

    <Component {...props}>
      <span>{children}</span>
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
const ButtonBase = ({ onClick, type, children }) => (
  <button onClick={onClick} type={type}>
    {children}
  </button>
);

// LinkButton component
const LinkButtonBase = ({ to, children }) => (
  <Link to={to} className="button">
    {children}
  </Link>
);

// Wrapped Button with SVG
const Button = withSVG(ButtonBase);

// Wrapped LinkButton with SVG
const LinkButton = withSVG(LinkButtonBase);

export { Button, LinkButton };
