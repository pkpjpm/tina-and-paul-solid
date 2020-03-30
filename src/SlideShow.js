import React from 'react';

function SlideShow ( { match: { params } } ) {
    let show = params.showType || 'paris';
    return (
        <div>
            <h1>The {show} slide show</h1>
        </div>
    );
}

export default SlideShow;