import React from "react";
import { connect } from "react-redux";
import PathHelper from './pathHelper';
import { DISMISS_LEGACY_INFO } from './actions/actionTypes';
import PaulWithAntlers01 from './PaulWithAntlers01.jpg';
import Tina02 from './Tina02.jpg';
import AmplifiedJack from './AmplifiedJack.jpg';
import JackAndPearl from './JackAndPearl.JPG';
import './About.css';

class About extends React.Component {
    what = "tina";
    when = "2002";
    prettyWhat = "Tina";

    constructor(props) {
        super(props);
        this.dismissAlert = this.dismissAlert.bind(this);
    }

    oldAboutTina() {
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
    oldAboutPaul() {
        return (
            <div className="legacy-page">
                <h1>Paul</h1>
                <p><img alt="Paul" src={PaulWithAntlers01} width="248" height="337"/></p>
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
                <p>&nbsp;</p>
            </div>
        );
    }
    howWeMet() {
        return (
            <div className="legacy-page">
                <h1>Paul and Tina Meet</h1>
        		<p>Tina and Paul met at a party at Lydia's apartment on August 26, 2000.&nbsp; Tina 
        			was the first guest to arrive, and Paul was the second.&nbsp; Tina admired 
        			Paul's vegetable chopping skills.&nbsp; Paul was intrigued by Tina's dancing 
        			and encyclopedic knowledge of film, popular music, and show tunes.</p>
        		<p>Paul walked Tina home that night, and the 
        				rest you can guess.</p>
        		<h1>Paul and Tina are Betrothed</h1>
        		<p>Paul proposed to Tina on Leavenworth Street 
        				between Sutter and Post on Valentine's Day.&nbsp; It was a wonderful evening 
        				that included dinner at Fino and a performance by the San Francisco Ballet.</p>
        		<h1>Paul and Tina Live in Sin</h1>
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
    aboutTheCeremony() {
        return (
            <div className="legacy-page">
                <h1>Who</h1>
                <p>We were married by Rev. Mary Margaret Earl of the <a href="https://www.uusf.org/">First Unitarian 
                		Universalist Society of San Francisco</a>.
                </p>
                <p>Joel Chapman escorted the bride.&nbsp; The groom's parents, Cathy and 
                	Glenn Keister, were also in attendance.
                </p>
                <p>The wedding party also included:</p>
                <h2>Bridesmaids:</h2>
                <p>
                    Barbara Fabrizio - Matron of Honor<br />
                	Lydia Lowery<br />
                	Emily Curtis
                </p>
                <h2>Groomsmen:</h2>
                <p>
                    Steve Bauer - Best Man<br />
                	Symon Michael<br />
                	Robin Givens</p>
                <h1>When</h1>
                <p>The ceremony was held on Saturday, October 12, 2002</p>
                <h1>Where</h1>
                <p>
                    The ceremony was held on the historic tall ship, 
                    <a href="https://www.nps.gov/safr/learn/historyculture/balclutha.htm">Balclutha</a>.
                </p>
            </div>
        );
    }
    dismissAlert() {      
        this.props.dismissLegacyInfo();        
    }
    alertBox(oldSite, prettyWhat) {
        if(oldSite) {
            return (
                <div className="alert alert-info alert-dismissable">
                    <button class="close" aria-label="close" onClick={this.dismissAlert}>&times;</button>
                    View the original 2002 content, or an update on {prettyWhat}
                </div>
            );
        }
    }
    tabStrip(showTabs) {
        if(showTabs) {
            let oldSite = this.props.showLegacyInfo && ( this.when === "2002" );
            return (
                <React.Fragment>
                    {this.alertBox(oldSite, this.prettyWhat)}
                    <ul className="nav nav-tabs">
                      <li className="nav-item">
                        <a className={oldSite ? "nav-link active" : "nav-link"} href={PathHelper(`about/${this.what}/2002`)}>2002</a>
                      </li>
                      <li className="nav-item">
                        <a className={!oldSite ? "nav-link active" : "nav-link"} href={PathHelper(`about/${this.what}/2020`)}>2020</a>
                      </li>
                    </ul>                                    
                </React.Fragment>
            );
        }
    };

    render() {        
        this.what = this.props.match.params.aboutWhat || 'nothing';
        this.when = this.props.match.params.aboutWhen || '2002';        

        let showTabs = false;
        let contentBody = "";
        switch(this.what){
            case 'tina':
                showTabs = true;
                contentBody = this.oldAboutTina();
                break;

            case 'paul':
                showTabs = true;
                contentBody = this.oldAboutPaul();
                break;

            case 'how-we-met':
                contentBody = this.howWeMet();
                break;

            case 'ceremony':
                contentBody = this.aboutTheCeremony();
                break;

            default:
                showTabs = false;
                break;
        }
        return (
            <div>
                {this.tabStrip(showTabs, this.when)}
                {contentBody}
            </div>
        );
    }
}

export default (function () {
    function mapStateToProps(state) {
        return { showLegacyInfo: state.showLegacyInfo };
    }

    function mapDispatchToProps(dispatch) {
        return {
            dismissLegacyInfo: () => { dispatch({type: DISMISS_LEGACY_INFO}); }
        };
    }

    return connect(mapStateToProps, mapDispatchToProps)(About);
})();
