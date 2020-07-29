import React from 'react';
import { Route, Switch } from 'react-router-dom';
import BradyBunch from './bradyBunch/BradyBunch';
import SlideShow from './slides/SlideShow';
import About from './about/About';
import PathHelper from './pathHelper';

function App() {
  return (
    <div id="app-root" className="ml-xl-5 mr-xl-5 ml-lg-3 mr-lg-3">
      <nav className="navbar navbar-expand-lg">
        <a className="navbar-brand" href={PathHelper("")}>Tina and Paul</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href={PathHelper("slide-show")} id="slideshowDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Slide Shows
              </a>
              <div className="dropdown-menu" aria-labelledby="slideshowDropdown">
                <a className="dropdown-item" href={PathHelper("slide-show/paris")}>Paris Honeymoon</a>
                <a className="dropdown-item" href={PathHelper("slide-show/engagement")}>Engagement Party</a>
                <a className="dropdown-item" href={PathHelper("slide-show/reception")}>Reception</a>
                <a className="dropdown-item" href={PathHelper("slide-show/chicago")}>Chicago 2005</a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/#/about" id="aboutDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                About
              </a>
              <div className="dropdown-menu" aria-labelledby="aboutDropdown">
                <a className="dropdown-item" href={PathHelper("about/tina")}>Tina</a>
                <a className="dropdown-item" href={PathHelper("about/paul")}>Paul</a>
                <a className="dropdown-item" href={PathHelper("about/how-we-met")}>How we met</a>
                <a className="dropdown-item" href={PathHelper("about/ceremony")}>Ceremony</a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
      <main>
        <Switch>
          <Route exact path="/" component={BradyBunch} />
          <Route path="/slide-show/:showType" component={SlideShow} />
          <Route path="/about/:aboutWhat/:aboutWhen" component={About} />
          <Route path="/about/:aboutWhat" component={About} />
        </Switch>        
      </main>
    </div>
  );
}

export default App;
