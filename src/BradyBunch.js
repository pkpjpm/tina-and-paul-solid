import React from 'react';

function BradyBunch () {
    let panel = function () {
        return (
            <div style={{textAlign: "center", margin: 40}}>panel</div>
        );
    }

    return (
        <div style={{backgroundColor: "blue"}}>
            <h1>Tina &amp; Paul</h1>
            <div className="container-md" style={{backgroundColor: "orange"}}>
                <div className="row">
                    <div className="col-4">{panel()}</div>
                    <div className="col-4">{panel()}</div>
                    <div className="col-4">{panel()}</div>
                </div>
                    <div className="row">
                    <div className="col-4">{panel()}</div>
                    <div className="col-4">{panel()}</div>
                    <div className="col-4">{panel()}</div>
                </div>
                    <div className="row">
                    <div className="col-4">{panel()}</div>
                    <div className="col-4">{panel()}</div>
                    <div className="col-4">{panel()}</div>
                </div>            
            </div>
        </div>
        );
}

export default BradyBunch;