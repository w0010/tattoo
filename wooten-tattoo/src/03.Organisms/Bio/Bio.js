// Bio.js
import React from "react";
import '../Bio/Bio.css';

const Bio = (props) => {
    return (
        <div id="bio" className="bio-modal" onClick={props.closeBio}>
            <button onClick={props.closeBio}>
                <span>Close</span>
                {[...Array(4)].map((_, i) => <span key={i} />)}
            </button>

            
            <h2>Biography</h2>

            <article className="bio-content">
                <div>
                    <p>
                        I've been drawing for about as long as I have been speaking. In my youth, I focused on illustrating anatomy, robotic design, and architecture with various mediums. I initially planned to make a career in worldbuilding and game design, and this led me to consider tattoos through the lens of character design. As such, I make considerations far beyond the immediate project and help develop the client's end game to future-proof the work into the context of their "character."
                    </p>
                    <p>
                        In 2007, I began tattooing in New Orleans. 2015, I went to the Gage Academy of Art in Seattle under Michael Magrath for figurative sculpture. I have been professionally tattooing for over fifteen years now. I find great joy in using procedural techniques with computers combined with live observation of the body's natural shape and tendencies to achieve novel styles of tattoo design that fit the body's anatomy.
                    </p>
                </div>
                <div>
                    <p>
                        The three-dimensionality of tattoos and their living nature put them in an exceedingly unique place among other mediums. It can change the body's appearance like sculpting can, creating an illusion of angularity or curvature. It can make anew or reclaim the body for the client.
                    </p>
                    <p>
                        I hold a core tenet of no compromise to find ideal life-long solutions for clients. Any unknowns will be ground to dust in the process of elimination by creating and examining a surplus of ideas to ensure no stone is left unturned. The client can participate in the design, and I collaborate comfortably.
                    </p>
                    <p>
                        Tattoos can transform people. Honoring this truth is the most critical practice of my work, so my policy is to treat each new project as if it were my best work yet.
                    </p>
                </div>
            </article>
        </div>
    );
}

export default Bio;