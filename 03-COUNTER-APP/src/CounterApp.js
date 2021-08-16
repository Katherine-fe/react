import PropTypes from 'prop-types';
import { useState } from 'react';

const CounterApp =({value}) =>{

    const [counter, setCounter] = useState(value = 10);


    const handleAdd = (e) =>{
        setCounter(counter + 1);
        /* setCounter((c) => c + 1); */
    }
    const handleMinus = (e) =>{
        setCounter(counter - 1);
    }
    const handleReset = (e) =>{
        setCounter(value);
    }

    return (
        <>
            <h1>CounterApp</h1>
            <h2> { counter }</h2>
            <button onClick={handleAdd}>+1</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleMinus}>-1</button>
        </>
    );
    }

CounterApp.propTypes={
    saludo: PropTypes.number
}
export default CounterApp;

 