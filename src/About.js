import React from "react";

function About( { match: { params } } ) {
    return (
        <div>
            <h1>About {params.aboutWhat}</h1>
        </div>
    );
}

export default About;