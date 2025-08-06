import { useState } from "react";


function Counter(){
    // const [countvalue, setCountvalue] = useState(0)
    // const [user, setUser] = useState({name: 'Balaji', age: 32})
    const [array, setArray] = useState([1,2,3,4])


    return(
        <>
        <div>
            <h1 className="counter__title">
                Counter:
                <span className="count">{ array.toString() }</span>
            </h1> 
            
        </div>
        <button className="increment__btn" 
        onClick={() => {
            setArray((prevArray) => [...prevArray, 1])
        }}
        >Increment
        </button>
        <button className="decrement__btn"
        onClick={() => {
            setArray((prevArray) => [...prevArray, -1])
        }}

        >Decrement</button>
        <button className="reset__btn"
        onClick={() => {
            setArray([])
        }}

        >Reset</button>
        </>
    )
}

export default Counter;