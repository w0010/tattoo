import React from "react";

const SkillBar = ({ knowledge, interest, children }) => {

    let width;
    switch (knowledge) {
        case 3:
            width = '100%';
            break;
        case 2:
            width = '66.66%';
            break;
        case 1:
        default:
            width = '33.33%';
            break;
    }

    let opacity;
    switch (interest) {
        case 3:
            opacity = '100%';
            break;
        case 2:
            opacity = '66.66%';
            break;
        case 1:
        default:
            opacity = '33.33%';
            break;
    }

    return (
        <div style={{
            alignItems: 'flex-end',
            background: 'var(--text-color)',
            boxSizing: 'border-box',
            color: 'var(--bg-color)',
            display: 'flex',
            fontSize: '0.8em',
            fontVariationSettings: '"wght" 500, "wdth" 100, "slnt" -10',
            letterSpacing: '0em',
            margin: '5px 0',
            opacity: opacity,
            padding: '0.7em 1.8em',
            whiteSpace: 'nowrap',
            width: width,
        }}>
            {children}
        </div>
    );
};

export default SkillBar;