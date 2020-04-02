import React from 'react';
import Tina02 from './Tina02.jpg';
import './About.css';

export function OldAboutTina() {
    return (
        <div className="legacy-page">
            <h1>Tina</h1>
            <p><img alt="Tina" src={Tina02} width="103" height="101"/></p>
            <p>Tina, a Capricorn, was born in the City of Angels in the year of the 
                Snake.&nbsp; She moved with her family to Kalamazoo, MI and Columbus, IN before 
                settling in Cincinnati, OH.&nbsp; She received her BA in English from the 
                University of Cincinnati, and her poetry was published in small press 
                publications.</p>
            <p>After a year in Santa Rosa, CA, Tina moved to San Francisco and became active in 
                the underground literary movement.&nbsp; She published several Zines, including 
                Bridal Shower and Theoretical Detective, and performed with the band Sense 
                Surreal.&nbsp; During those years she went from redhead to platinum blonde.</p>
            <p>Tina has been an English teacher at SF Unified School District for the past ten 
                years.&nbsp; She is completing a leave of absence and can't wait to get back to 
                her youthful charges.</p>
        </div>
    );    
}

