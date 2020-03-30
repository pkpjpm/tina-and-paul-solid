import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import BradyBunch from './BradyBunch';
import SlideShow from './SlideShow';
import About from './About';

function App() {
  return (
    <div id="app-root">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">Tina and Paul</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/slide-show" id="slideshowDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Slide Shows
              </a>
              <div className="dropdown-menu" aria-labelledby="slideshowDropdown">
                <a className="dropdown-item" href="/slide-show/paris">Paris Honeymoon</a>
                <a className="dropdown-item" href="/slide-show/engagement">Engagement Party</a>
                <a className="dropdown-item" href="/slide-show/reception">Reception</a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/about" id="aboutDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                About
              </a>
              <div className="dropdown-menu" aria-labelledby="aboutDropdown">
                <a className="dropdown-item" href="/about/tina">Tina</a>
                <a className="dropdown-item" href="/about/paul">Paul</a>
                <a className="dropdown-item" href="/about/how-we-met">How we met</a>
                <a className="dropdown-item" href="/about/ceremony">Ceremony</a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
      <BrowserRouter>
        <div>
          <Route exact path="/" component={BradyBunch} />
          <Route path="/slide-show/:showType" component={SlideShow} />
          <Route path="/about/:aboutWhat" component={About} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
