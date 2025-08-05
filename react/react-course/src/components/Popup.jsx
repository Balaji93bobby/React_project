function Popup({message}){
    function confirmHandler(){
        console.log('Confirm Button clicked')
    }

    function cancelhandler(){
        console.log('cancel button clicked')
    }

    return(
        <>
            <div className="popup">
                <span>{message}</span>
                <div className="popup__btns">
                    <button className="popup__btn" onClick={() => confirmHandler()}>Confirm</button>
                    <button className="popup__btn popup__btn--cancel" onClick={() => cancelhandler()}>Cancel</button>
                </div>
            </div>
            <div className="backdrop"></div>
        </>
    );
}

export default Popup