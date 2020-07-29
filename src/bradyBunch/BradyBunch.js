import React from 'react';

function BradyBunch () {
    let panel = function (description) {
        return (
            <div style={{textAlign: "center", margin: 40}}>{description}</div>
        );
    }

    return (
        <div>
            <h2>This is the story&hellip;</h2>
            <h1>Tina &amp; Paul</h1>
            <div className="container-md">
                <div className="row">
                    <div className="col-4">{panel('ceremony details')}</div>
                    <div className="col-4">{panel('all about Tina')}</div>
                    <div className="col-4">{panel('gift registries')}</div>
                </div>
                    <div className="row">
                    <div className="col-4">{panel('the engagement party')}</div>
                    <div className="col-4">{panel('Paul')}</div>
                    <div className="col-4">{panel('The story of Tina and Paul')}</div>
                </div>
                    <div className="row">
                    <div className="col-4">{panel('Pearl')}</div>
                    <div className="col-4">{panel('Choco-cat')}</div>
                    <div className="col-4">{panel('The Professor')}</div>
                </div>            
            </div>
        </div>
        );
}

export default BradyBunch;