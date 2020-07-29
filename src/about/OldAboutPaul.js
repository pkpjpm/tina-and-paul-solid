import React from "react";
import PaulWithAntlers01 from './PaulWithAntlers01.jpg';
import "./About.css";

export function OldAboutPaul() {
    return (
        <div className="legacy-page">
            <div className="media">
                <img className="mr-3" alt="Paul" src={PaulWithAntlers01} style={{width:248, height:337}} />
                <div className="media-body">
                    <h1>Paul</h1>
                    <p> Paul is a Taurus, born in Seattle, 
                        WA in the year of the Pig.&nbsp; He attended Bowdoin College, the University of 
                        Washington, and&nbsp;the university&nbsp;of hard knocks.</p>
                    <p>As a young man, Paul invested himself in a career in the music business.&nbsp; 
                        His last band in his hometown of Seattle, the Vacuums, was so successful that 
                        they left town immediately.&nbsp; At the time (the early 80s), there 
                        was&nbsp;very little&nbsp;chance to break into the big time from the Seattle 
                        music scene.&nbsp; Later, this changed.</p>
                    <p>Meanwhile, back in San Francisco, Paul was the bass player in a number of bands, 
                        including the Repeat Offenders, the Tibetan Boy Scouts, and Lower East 
                        Venus.&nbsp; After touring nationally and appearing on the CBS Records release <span style={{fontStyle: "italic"}}>Strange 
                            Language</span>, Paul&nbsp; had enough dirt on the entertainment industry to 
                        write his memoirs, and decided to get a paying job.</p>
                    <p>After trying many careers, ranging from bike messenger, special investigator for 
                        the Police Commission, and carpet salesman, Paul settled down to the glamourous 
                        and exciting world of software development.&nbsp; As Paul likes to say, "sooner 
                        or later everybody winds up in real estate or software."</p>
                </div>
            </div>
        </div>
    );
}