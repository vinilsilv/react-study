import React, { useState } from "react";
import "./Lottery.css";

export default (props) => {
  const [amount, setAmount] = useState(props.amount || 6);
  const initialNumbers = Array(amount).fill(0);
  const [numbers, setNumbers] = useState(initialNumbers);

  function generateNewNumber(min, max, array) {
    const random = parseInt(Math.random() * (max + 1 - min)) + min;
    return array.includes(random) ? generateNewNumber(min, max, array) : random;
  }

  function generateNumbers(amount) {
    const numbers = Array(amount)
      .fill(0)
      .reduce((nums) => {
        const newNumber = generateNewNumber(1, 60, nums);
        return [...nums, newNumber];
      }, [])
      .sort((n1, n2) => n1 - n2);

    return numbers;
  }

  return (
    <div className="lottery">
      <h2>Lottery</h2>
      <h3>{numbers.join(" - ")}</h3>
      <div>
        <label>Amount of numbers</label>
        <input
          min="6"
          max="12"
          type="number"
          value={amount}
          onChange={(e) => {
            setAmount(+e.target.value);
            setNumbers(generateNumbers(amount));
          }}
        />
      </div>
      <button onClick={() => setNumbers(generateNumbers(amount))}>
        Generate numbers
      </button>
    </div>
  );
};
