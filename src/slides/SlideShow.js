import React from 'react';
import ImageGallery from 'react-image-gallery';
import './SlideShow.css';
import {chicagoImages} from './shows/chicago/chicago';


function SlideShow ( { match: { params } } ) {
    let show = params.showType || 'paris';
    let images = [];
    let caption = "Unkown slide show";

    switch(show) {
        case 'paris':
            caption = "Honeymoon in Paris";
            break;

        case 'engagement':
            caption = "The Engagement Party";
            break;

        case 'reception':
            caption = "The Reception";
            break;

        case 'chicago':
            caption = "2005 Trip to Chicago";
            images = chicagoImages;
            break;
    }

    return (
        <div>
            <h1>{caption}</h1>
            <div>
                <ImageGallery items={images} />
            </div>
        </div>
    );
}

export default SlideShow;