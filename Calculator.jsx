import { useState } from 'react';
import './App.css';

function App() {
    const[math, mathSet]=useState('');
    const clearDisplay = () => mathSet('');

    function appendValue(n) {
        mathSet(prevMath => prevMath + n);
    }

    function calculate() {
        try {
            mathSet(eval(math));
        } catch {
            mathSet('Error');
        }
    }
    
  return (
    <>
        <div className='calculator'>
            <h2>Math: {math}</h2>
            <div className='rols'>
                <button onClick={clearDisplay}>C</button>
                <button onClick={() => appendValue('/')}>/</button>
                <button onClick={() => appendValue('*')}>*</button>
                <button onClick={() => appendValue('-')}>-</button>
            </div>

            <div className='rols'>
                <button onClick={() => appendValue('7')}>7</button>
                <button onClick={() => appendValue('8')}>8</button>
                <button onClick={() => appendValue('9')}>9</button>
                <button onClick={() => appendValue('+')}>+</button>
            </div>

            <div className='rols'>
                <button onClick={() => appendValue('4')}>4</button>
                <button onClick={() => appendValue('5')}>5</button>
                <button onClick={() => appendValue('6')}>6</button>
                <button onClick={calculate}>=</button>
            </div>

            <div className='rols'>
                <button onClick={() => appendValue('1')}>1</button>
                <button onClick={() => appendValue('2')}>2</button>
                <button onClick={() => appendValue('3')}>3</button>
                <button onClick={() => appendValue('0')}>0</button>
            </div>
        </div>

    </>
  )
}

export default App
