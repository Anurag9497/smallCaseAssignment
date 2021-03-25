import React from 'react';
import './index.css';

function ModalComponent({modalDisplay, handleDisplay, data}) {
    return (
        <div className="smallCaseModal" style={modalDisplay}>
            <h4 id="modalHeader">{data.header}</h4><hr/>
            <div id="modalBody">
                <span>{data.body}</span>
            </div><hr/>
            <div id="modalClose">
                <button id="myBtn" type="button" onClick={handleDisplay}>{data.footer}</button>
            </div>
        </div>
    );
}

export default ModalComponent;
