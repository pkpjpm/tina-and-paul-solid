import React from "react";
import AmplifiedJack from './AmplifiedJack.jpg';
import JackAndPearl from './JackAndPearl.JPG';
import "./About.css";

export function HowWeMet()
{
    return (
        <div className="legacy-page">
            <h1>Tina and Paul Meet</h1>
            <p>Tina and Paul met at a party at Lydia's apartment on August 26, 2000.&nbsp; Tina 
                was the first guest to arrive, and Paul was the second.&nbsp; Tina admired 
                Paul's vegetable chopping skills.&nbsp; Paul was intrigued by Tina's dancing 
                and encyclopedic knowledge of film, popular music, and show tunes.</p>
            <p>Paul walked Tina home that night, and the 
                    rest you can guess.</p>
            <h2>Paul and Tina are Betrothed</h2>
            <p>Paul proposed to Tina on Leavenworth Street 
                    between Sutter and Post on Valentine's Day.&nbsp; It was a wonderful evening 
                    that included dinner at Fino and a performance by the San Francisco Ballet.</p>
            <h2>Paul and Tina Live in Sin</h2>
            <p><img alt="Jack surveys the post move landscape" src={AmplifiedJack} width="512" height="384" /></p>
            <p>Paul is now happily cohabitating with Tina.&nbsp; We decided to keep Tina's 
                apartment, because she has HBO.&nbsp; This is only three blocks away from 
                Paul's old apartment, but with considerably more prestige,&nbsp;being lower Nob 
                Hill rather than Tenderloin Heights.</p>
            <p>We're now finally getting everything unpacked, but the move didn't exactly go 
                smoothly.&nbsp; On moving day, Paul had a 102� temperature.&nbsp; Fortunately, 
                the movers were very professional and took care of everything.&nbsp;&nbsp;The 
                first thing to be unpacked was the bed linens, and as soon as the bed was made, 
                Paul hit the sack and spent the next week being waited on in his new home.</p>
            <p>Paul is very is very happy in his new digs, his&nbsp;only real disappointment 
                was finding out that Tina wouldn't continue breakfast in bed service 
                after&nbsp;he recovered.</p>
            <p><img alt="Jack and Pearl getting ready for a rumble" src={JackAndPearl} width="406" height="333" /></p>
            <p>Things are not going as smoothly for our cats, however.&nbsp; Pearl, a hefty 
                girl used to having her own apartment (shared with her humans, of course), has 
                had to contend with Jack, a lean and mean (but cute) alpha male type.</p>
            <p>Since Pearl and Jack started their negotiations, Tina and I have heard noises 
                that sound like something out of a science fiction movie (Cats from the Demon 
                Planet).&nbsp; It's mostly growl and not too much bite, fortunately.</p>
        </div>
    );

}