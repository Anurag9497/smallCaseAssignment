import React,{useState} from 'react';
import './index.css';
import Image from '../../images/smallcase.jpg';
import ModalComponent from '../ModalComponent';

function Parent({modalDisplay, handleDisplay}) {
    const[data, setData] = useState({header: "Modal Header", body: "Modal Body", footer: "Close"});
    return (
        <div onClick={handleDisplay}>
            <ModalComponent modalDisplay={modalDisplay} data={data}/>
            <img id="smallCaseImg" src={Image} alt="smallCase"/>
        </div>
    );
}

export default Parent;
