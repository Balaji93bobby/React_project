function Popup({message, cancelPopup}){
    return(
        <>
            <div className="popup">
                <span>{message}</span>
                <div className="popup__btns">
                    <button className="popup__btn">Confirm</button>
                    <button className="popup__btn popup__btn--cancel" onClick={() => cancelPopup()}>Cancel</button>
                </div>
            </div>
            <div className="backdrop" onClick={() => cancelPopup()}></div>
        </>
    );
}

export default Popup