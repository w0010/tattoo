import React from "react";

import brad from '../../01.Atoms/Images/w10/00 Brad Wooten Portrait.jpg';

const BradWooten = () => {
    return (
        <section id="brad-wooten">
            <h2>About</h2>
            <article>
                <div className="article-content">
                    <h3>
                        <span>Brad </span><span>Wooten</span>
                    </h3>
                </div>
                <div className="article-image-container">
                    <img className="article-image" src={brad} alt="Brad tattooing" />
                </div>
            </article>
        </section>
    )
}

export default BradWooten;