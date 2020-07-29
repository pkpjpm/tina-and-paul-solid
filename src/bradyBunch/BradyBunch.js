import React from 'react';
import Pete from './Pete.jpg';
import Tina from './Tina.jpg';
import Jack from './Jack.JPG';
import Paul from './Paul.jpg';
import Pearl from './Pearl02.jpg';
import Andre from './Andre.jpg';
import Cyril from './Cyril.jpg';
import Jules from './Jules.jpg';
import Anniversary from './Anniversary.jpg';

function BradyBunch () {
    let panel = function (description, image, link) {
        return (
            <a href={link}><img alt={description} src={image} /></a>
        );
    }

    return (
        <div>
            <h2>This is the story&hellip;</h2>
            <h1>Tina &amp; Paul</h1>
            <div className="container-md">
                <div className="row">
                    <div className="col-4">{panel('Pete', Pete, '#/about/ceremony')}</div>
                    <div className="col-4">{panel('Tina', Tina, '#/about/tina')}</div>
                    <div className="col-4">{panel('Jack', Jack, '#')}</div>
                </div>
                    <div className="row">
                    <div className="col-4">{panel('Pearl', Pearl, '#/slide-show/engagement')}</div>
                    <div className="col-4">{panel('Paul', Paul, '#/about/paul')}</div>
                    <div className="col-4">{panel('André', Andre, '#/about/how-we-met')}</div>
                </div>
                    <div className="row">
                    <div className="col-4">{panel('Cyril', Cyril, '#')}</div>
                    <div className="col-4">{panel('Anniversary', Anniversary, '#')}</div>
                    <div className="col-4">{panel('Jules', Jules, '#')}</div>
                </div>            
            </div>
        </div>
        );
}

export default BradyBunch;