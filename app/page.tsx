'use client';
import { useState } from 'react';

export default function Home() {
  const [display, setDisplay] = useState('0');
  const [equation, setEquation] = useState('');
  const [isNewNumber, setIsNewNumber] = useState(true);

  const handleNumber = (num: string) => {
    if (isNewNumber) {
      setDisplay(num);
      setIsNewNumber(false);
    } else {
      setDisplay(display + num);
    }
  };

  const handleOperator = (operator: string) => {
    setEquation(display + ' ' + operator + ' ');
    setIsNewNumber(true);
  };

  const handleEqual = () => {
    const finalEquation = equation + display;
    try {
      const result = eval(finalEquation.replace('×', '*').replace('÷', '/'));
      setDisplay(result.toString());
      setEquation('');
      setIsNewNumber(true);
    } catch (_) {
      setDisplay('Error');
      setEquation('');
      setIsNewNumber(true);
    }
  };

  const handleClear = () => {
    setDisplay('0');
    setEquation('');
    setIsNewNumber(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-lg w-80">
        <div className="mb-4">
          <div className="text-gray-500 text-sm h-6">{equation}</div>
          <div className="text-3xl font-bold text-right">{display}</div>
        </div>
        
        <div className="grid grid-cols-4 gap-2">
          <button onClick={handleClear} 
            className="col-span-2 bg-red-500 text-white p-4 rounded hover:bg-red-600">
            C
          </button>
          <button onClick={() => handleOperator('÷')} 
            className="bg-blue-500 text-white p-4 rounded hover:bg-blue-600">
            ÷
          </button>
          <button onClick={() => handleOperator('×')} 
            className="bg-blue-500 text-white p-4 rounded hover:bg-blue-600">
            ×
          </button>
          
          {[7, 8, 9].map((num) => (
            <button key={num} onClick={() => handleNumber(num.toString())}
              className="bg-gray-200 p-4 rounded hover:bg-gray-300">
              {num}
            </button>
          ))}
          <button onClick={() => handleOperator('-')} 
            className="bg-blue-500 text-white p-4 rounded hover:bg-blue-600">
            -
          </button>
          
          {[4, 5, 6].map((num) => (
            <button key={num} onClick={() => handleNumber(num.toString())}
              className="bg-gray-200 p-4 rounded hover:bg-gray-300">
              {num}
            </button>
          ))}
          <button onClick={() => handleOperator('+')} 
            className="bg-blue-500 text-white p-4 rounded hover:bg-blue-600">
            +
          </button>
          
          {[1, 2, 3].map((num) => (
            <button key={num} onClick={() => handleNumber(num.toString())}
              className="bg-gray-200 p-4 rounded hover:bg-gray-300">
              {num}
            </button>
          ))}
          <button onClick={handleEqual} 
            className="bg-green-500 text-white p-4 rounded hover:bg-green-600">
            =
          </button>
          
          <button onClick={() => handleNumber('0')} 
            className="col-span-2 bg-gray-200 p-4 rounded hover:bg-gray-300">
            0
          </button>
          <button onClick={() => handleNumber('.')} 
            className="bg-gray-200 p-4 rounded hover:bg-gray-300">
            .
          </button>
        </div>
      </div>
    </div>
  );
}