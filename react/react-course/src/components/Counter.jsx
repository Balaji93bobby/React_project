import { useState } from "react";


function Counter(){
    const [countvalue, setCountvalue] = useState(0)


    return(
        <>
        <div>
            <h1 className="counter__title">
                Counter:
                <span className="count">{ countvalue }</span>
            </h1> 
            
        </div>
        <button className="increment__btn" onClick={() => setCountvalue((prevCount) => prevCount + 1)}>Increment</button>
        <button className="decrement__btn"onClick={() => setCountvalue((prevCount) => prevCount - 1
        )}>Decrement</button>
        <button className="reset__btn" onClick={() => setCountvalue(0)}>Reset</button>
        </>
    )
}

export default Counter;