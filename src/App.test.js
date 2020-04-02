import React from 'react';
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { createStore } from 'redux';
import { Provider } from "react-redux";
import { render } from '@testing-library/react';
import App from './App';
import rootReducer from "./reducers";

test('The App renders navbar', () => {
  const history = createMemoryHistory();
  const { getByRole } = render(
    <Router history={history}>
      <App />
    </Router>
  );
  const navElement = getByRole("navigation");
  expect(navElement).toBeInTheDocument();
});

function testNavigationLink( menuLabelRegex, targetHeadingRegex ) {
  const store = createStore( rootReducer );
  const history = createMemoryHistory();
  const { getByText, getAllByRole } = render(
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>);
  const navLink = getByText(menuLabelRegex);
  const navUri = navLink.getAttribute("href");
  const routeWithoutHash = navUri.split("#")[1];
  history.push(routeWithoutHash);
  const heading = getAllByRole("heading")[0];
  expect(heading.innerHTML).toMatch(targetHeadingRegex);  
}

test('Paris slide show navigation works', () => {
  testNavigationLink("Paris Honeymoon", "The paris slide show");
});
 
test('Engagement slide show navigation works', () => {
  testNavigationLink("Engagement Party", "The engagement slide show");
});

test('Reception slide show navigation works', () => {
  testNavigationLink("Reception", "The reception slide show");
});

test('About Tina navigation works', () => {
  testNavigationLink("Tina", "Tina");
});

test ('About Paul navigation works', () => {
  testNavigationLink("Paul", "Paul");
});

test ('Ceremony navigation works', () => {
  testNavigationLink("Ceremony", "Our Ceremony");
});

test ('How we met navigation works', () => {
  testNavigationLink("How we met", "Tina and Paul Meet");
});

