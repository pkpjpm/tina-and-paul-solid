import React from "react";
import { render, fireEvent } from '@testing-library/react';
import About from './About';
import rootReducer from '../reducers';
import { Provider } from "react-redux";
import { createStore } from "redux";

const ALERT_BOX_MATCHER = /View the original 2002 content.*/;

function testForElementAtPath(pathParams, elementMatch) {
    const store = createStore(rootReducer);
    const { queryByText } = render(
        <Provider store={store}>
            <About match={{ params: pathParams }} />
        </Provider>
    );
    return queryByText(elementMatch);
}

test('About Tina page has tabs', () => {
    const navElement = testForElementAtPath( { aboutWhat: "tina", aboutWhen: "2002" }, "2002" );
    expect(navElement).toBeInTheDocument();
});

test('About Paul page has tabs', () => {
    const navElement = testForElementAtPath( { aboutWhat: "paul", aboutWhen: "2002" }, "2002" );
    expect(navElement).toBeInTheDocument();
});

test('Reception page does not have tabs', () => {
    const navElement = testForElementAtPath( { aboutWhat: "reception" }, "2002" );
    expect(navElement).not.toBeInTheDocument();    
});

test('Ceremony page does not have tabs', () => {
    const navElement = testForElementAtPath( { aboutWhat: "ceremony" }, "2002" );
    expect(navElement).not.toBeInTheDocument();    
});

test('About Tina page has info alert by default', () => {
    const navElement = testForElementAtPath( 
        { aboutWhat: "tina", aboutWhen: "2002" }, 
        ALERT_BOX_MATCHER);
    expect(navElement).toBeInTheDocument();
});

test('Ceremony page does not have an alert', () => {
    const navElement = testForElementAtPath( 
        { aboutWhat: "ceremony"}, 
        ALERT_BOX_MATCHER);
    expect(navElement).not.toBeInTheDocument();    
});

test('Close click will dismiss the info alert', () => {
    const store = createStore(rootReducer);
    const { getByRole, queryByText } = render(
        <Provider store={store}>
            <About match={{ params: { aboutWhat: "tina", aboutWhen: "2002" } }} />
        </Provider>
    );
    var closeBox = getByRole("button", { name: "close" });
    expect(closeBox).toBeInTheDocument();
    fireEvent(closeBox, new MouseEvent('click', { bubbles: true, cancelable: true }));
    
    var alertInfoBox = queryByText(ALERT_BOX_MATCHER);
    expect(alertInfoBox).not.toBeInTheDocument();
});