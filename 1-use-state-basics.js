import React, {useState} from "react";

const Index = () => {
    const [count, setCount] = useState(0);
   
    const incrementCount = () => {
        setCount((previousCount) =>  previousCount+1 );
        setCount((previousCount) =>  previousCount+1 );
        
    }

    const decrementCount = () => {
        setCount((previousCount) => previousCount-1);
        setCount((previousCount)=>previousCount-1 );
    }
    

       
    return(
        <div>
            <button onClick={decrementCount}>-</button>
            <span>{count}</span>
            <button onClick={incrementCount}>+</button>

        </div>
    );
};
export default Index;