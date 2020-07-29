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
            <div className="col-sm-4"><a href={link}>
                <img alt={description} src={image} 
                    style={{height:250, width:250, padding:3}} />
            </a></div>
        );
    }

    return (
        <div>
            <h2>This is the story&hellip;</h2>
            <h1>Tina &amp; Paul</h1>
            <div className="container-md">
                <div className="row">
                    {panel('Pete', Pete, '#/about/ceremony')}
                    {panel('Tina', Tina, '#/about/tina')}
                    {panel('Jack', Jack, '#/slide-show/paris')}
                </div>
                    <div className="row">
                    {panel('Pearl', Pearl, '#/slide-show/engagement')}
                    {panel('Paul', Paul, '#/about/paul')}
                    {panel('André', Andre, '#/about/how-we-met')}
                </div>
                    <div className="row">
                    {panel('Cyril', Cyril, '#/slide-show/reception')}
                    {panel('Anniversary', Anniversary, '#')}
                    {panel('Jules', Jules, '#/slide-show/chicago')}
                </div>            
            </div>
        </div>
        );
}

export default BradyBunch;