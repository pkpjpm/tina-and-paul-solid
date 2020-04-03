import React from "react";
import { connect } from "react-redux";
import PathHelper from '../pathHelper';
//import { DISMISS_LEGACY_INFO } from '../actions/actionTypes';
import { dismissLegacyInfoAction } from './aboutActions';
import './About.css';
import { OldAboutTina } from "./OldAboutTina";
import { OldAboutPaul } from "./OldAboutPaul";
import { HowWeMet } from "./HowWeMet";
import { TheCeremony } from "./TheCeremony";
import { AboutTina } from "./AboutTina";
import { AboutPaul } from "./AboutPaul";

class About extends React.Component {
    what;
    when;
    constructor(props) {
        super(props);
        this.dismissAlert = this.dismissAlert.bind(this);
    }
    dismissAlert() {      
        this.props.dismissLegacyInfo();        
    }
    alertBox() {
        if(this.showInfoAlert) {
            return (
                <div className="alert alert-info alert-dismissable">
                    <button className="close" aria-label="close" onClick={this.dismissAlert}>&times;</button>
                    View the original 2002 content, or an update on {this.prettyWhat}
                </div>
            );
        }
    }
    tabStrip(showTabs) {
        if(showTabs) {            
            return (
                <React.Fragment>
                    {this.alertBox()}
                    <ul className="nav nav-tabs">
                      <li className="nav-item">
                        <a className={this.oldSite ? "nav-link active" : "nav-link"} href={PathHelper(`about/${this.what}/2002`)}>2002</a>
                      </li>
                      <li className="nav-item">
                        <a className={!this.oldSite ? "nav-link active" : "nav-link"} href={PathHelper(`about/${this.what}/2020`)}>2020</a>
                      </li>
                    </ul>                                    
                </React.Fragment>
            );
        }
    };

    render() {
        this.what = this.props.match.params.aboutWhat || 'nothing';
        this.when = this.props.match.params.aboutWhen || '2002';        
        this.oldSite = this.when === "2002";
        this.showInfoAlert = this.props.showLegacyInfo && this.oldSite;
        let showTabs = false;
        let contentBody = "";
        switch(this.what){
            case 'tina':
                showTabs = true;
                this.prettyWhat = "Tina";
                contentBody = this.oldSite ? <OldAboutTina /> : <AboutTina />;
                break;

            case 'paul':
                showTabs = true;
                this.prettyWhat = "Paul";
                contentBody = this.oldSite ? <OldAboutPaul /> : <AboutPaul />;
                break;

            case 'how-we-met':
                contentBody = <HowWeMet />;
                break;

            case 'ceremony':
                contentBody = <TheCeremony />;
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
        return { showLegacyInfo: state.aboutReducer.showLegacyInfo };
    }

    function mapDispatchToProps(dispatch) {
        return {
            dismissLegacyInfo: dismissLegacyInfoAction(dispatch)
        };
    }

    return connect(mapStateToProps, mapDispatchToProps)(About);
})();
