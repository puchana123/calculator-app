import './Calculator.css'
import {useState} from 'react'
const Calculator = ()=>{

    const [inputNumber,setInputNumber] = useState('0')

    const display = (value)=>{
        if(inputNumber.toString().charAt(0) === '0'){
            setInputNumber(value)
        }else{
            setInputNumber(inputNumber+value)
        } 
    }

    const reset = ()=>{
        setInputNumber('0')
    }

    const calculate = ()=>{
        // eslint-disable-next-line no-eval
        let result = eval(inputNumber)
        setInputNumber(result)
    }

    return(
        <div className='calculator'>
            <div className='calculator-display'><h1>{inputNumber}</h1></div>
            <div className='calculator-btn'>
                <button className='operator-btn' onClick={()=>display('+')}>+</button>
                <button className='operator-btn' onClick={()=>display('-')}>-</button>
                <button className='operator-btn' onClick={()=>display('*')}>x</button>
                <button className='operator-btn' onClick={()=>display('/')}>/</button>
                <button onClick={()=>display('7')}>7</button>
                <button onClick={()=>display('8')}>8</button>
                <button onClick={()=>display('9')}>9</button>
                <button onClick={()=>display('4')}>4</button>
                <button onClick={()=>display('5')}>5</button>
                <button onClick={()=>display('6')}>6</button>
                <button onClick={()=>display('1')}>1</button>
                <button onClick={()=>display('2')}>2</button>
                <button onClick={()=>display('3')}>3</button>
                <button onClick={()=>display('.')}>.</button>
                <button onClick={()=>display('0')}>0</button>
                <button className='clear-btn' onClick={reset}>Clr</button>
                <button className='equal-btn operator-btn' onClick={calculate}>=</button>
            </div>
        </div>
        
    )
}

export default Calculator