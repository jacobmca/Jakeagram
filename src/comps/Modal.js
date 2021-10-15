import React from 'react';

const Modal = () => {

    constHandleClick = (e) => {
        if(e.target.cassList.contains('backdrop')){
        setSelectedImg(null);
        }
        
    }

    return (
    <div className="backdrop" onClick={handleClick}>
        <img src={selectedImg} alt="picture" />
    </div>
    )

}

export default Modal;