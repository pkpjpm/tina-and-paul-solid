import React from "react";
import PathHelper from './pathHelper';

function About( { match: { params } } ) {
    var tabStrip = function(showTabs, when) {
        var alert = function(oldSite) {
            if(oldSite) {
                return (
                    <div className="alert alert-info alert-dismissable">
                        <button class="close" data-dismiss="alert" aria-label="close">&times;</button>
                        View the original 2002 content, or an update on {prettyWhat}
                    </div>
                );
            }
        }
        if(showTabs) {
            let oldSite = when === "2002";
            return (
                <React.Fragment>
                    {alert(oldSite)}
                    <ul className="nav nav-tabs">
                      <li className="nav-item">
                        <a className={oldSite ? "nav-link active" : "nav-link"} href={PathHelper(`about/${what}/2002`)}>2002</a>
                      </li>
                      <li className="nav-item">
                        <a className={!oldSite ? "nav-link active" : "nav-link"} href={PathHelper(`about/${what}/2020`)}>2020</a>
                      </li>
                    </ul>                                    
                </React.Fragment>
            );
        }
    };

    let what = params.aboutWhat || 'nothing';
    let when = params.aboutWhen || '2002';

    let prettyWhat = '';
    let showTabs = false;
    switch(what){
        case 'tina':
            prettyWhat = "Tina";
            showTabs = true;
            break;

        case 'paul':
            prettyWhat = "Paul";
            showTabs = true;
            break;

        case 'how-we-met':
            prettyWhat = "how we met";
            break;

        case 'ceremony':
            prettyWhat = "the marriage ceremony";
            break;

        default:
            showTabs = false;
            break;
    }
    return (
        <div>
            {tabStrip(showTabs, when)}
            <h1>About {what} in {when}</h1>
        </div>
    );
}

export default About;