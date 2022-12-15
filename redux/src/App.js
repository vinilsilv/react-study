import React, { useState } from 'react';
import './App.css';
import Card from './components/Card';
import Interval from './components/Interval';
import Average from './components/Average';
import Sum from './components/Sum';
import Random from './components/Random';

function App() {

  const [min, setMin] = useState(100)
  const [max, setMax] = useState(1000)

  return (
    <div className="App">
      <h1>React Redux</h1>
      <div className='line'>
        <Interval
          min={min}
          max={max}
          setMin={setMin}
          setMax={setMax}></Interval>
      </div>
      <div className='line'>
        <Average min={min} max={max}></Average>
        <Sum min={min} max={max}></Sum>
        <Random min={min} max={max}></Random>
      </div>
    </div>
  );
}

export default App;
