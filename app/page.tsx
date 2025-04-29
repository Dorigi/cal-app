'use client';
import { useState } from 'react';

export default function Home() {
  const [display, setDisplay] = useState('0');
  const [equation, setEquation] = useState('');
  const [isNewNumber, setIsNewNumber] = useState(true);
  const [memory, setMemory] = useState<number>(0);

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
    } catch {
      setDisplay('Error');
      setEquation('');
      setIsNewNumber(true);
    }
  };

  const handleCE = () => {
    setDisplay('0');
    setIsNewNumber(true);
  };

  const handleSquareRoot = () => {
    const num = parseFloat(display);
    if (num >= 0) {
      setDisplay(Math.sqrt(num).toString());
      setIsNewNumber(true);
    } else {
      setDisplay('Error');
    }
  };

  const handlePercentage = () => {
    const num = parseFloat(display);
    setDisplay((num / 100).toString());
    setIsNewNumber(true);
  };

  const handleReciprocal = () => {
    const num = parseFloat(display);
    if (num !== 0) {
      setDisplay((1 / num).toString());
      setIsNewNumber(true);
    } else {
      setDisplay('Error');
    }
  };

  const handlePlusMinus = () => {
    setDisplay((parseFloat(display) * -1).toString());
  };

  // Memory functions
  const handleMC = () => setMemory(0);
  const handleMR = () => {
    setDisplay(memory.toString());
    setIsNewNumber(true);
  };
  const handleMPlus = () => setMemory(memory + parseFloat(display));
  const handleMMinus = () => setMemory(memory - parseFloat(display));

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-gray-300 p-4 rounded-lg shadow-lg w-80 border-2 border-gray-400">
        <div className="mb-4 bg-[#e6f3f7] p-2 rounded border border-gray-400">
          <div className="text-3xl font-bold text-right">{display}</div>
        </div>
        
        <div className="grid grid-cols-5 gap-1">
          {/* Memory and Clear Row */}
          <button onClick={handleMC} className="bg-[#90EE90] p-3 rounded hover:bg-[#7FDF7F] text-sm">MC</button>
          <button onClick={handleMR} className="bg-[#90EE90] p-3 rounded hover:bg-[#7FDF7F] text-sm">MR</button>
          <button onClick={handleMPlus} className="bg-[#90EE90] p-3 rounded hover:bg-[#7FDF7F] text-sm">M+</button>
          <button onClick={handleMMinus} className="bg-[#90EE90] p-3 rounded hover:bg-[#7FDF7F] text-sm">M-</button>
          <button onClick={handleCE} className="bg-[#FFB6B6] p-3 rounded hover:bg-[#FF9999] text-sm">CE</button>

          {/* Numbers and Operations */}
          <button onClick={() => handleNumber('7')} className="bg-[#E8E8E8] p-3 rounded hover:bg-gray-300">7</button>
          <button onClick={() => handleNumber('8')} className="bg-[#E8E8E8] p-3 rounded hover:bg-gray-300">8</button>
          <button onClick={() => handleNumber('9')} className="bg-[#E8E8E8] p-3 rounded hover:bg-gray-300">9</button>
          <button onClick={() => handleOperator('÷')} className="bg-[#90EE90] p-3 rounded hover:bg-[#7FDF7F]">÷</button>
          <button onClick={handleSquareRoot} className="bg-[#90EE90] p-3 rounded hover:bg-[#7FDF7F]">√</button>

          <button onClick={() => handleNumber('4')} className="bg-[#E8E8E8] p-3 rounded hover:bg-gray-300">4</button>
          <button onClick={() => handleNumber('5')} className="bg-[#E8E8E8] p-3 rounded hover:bg-gray-300">5</button>
          <button onClick={() => handleNumber('6')} className="bg-[#E8E8E8] p-3 rounded hover:bg-gray-300">6</button>
          <button onClick={() => handleOperator('×')} className="bg-[#90EE90] p-3 rounded hover:bg-[#7FDF7F]">×</button>
          <button onClick={handlePercentage} className="bg-[#90EE90] p-3 rounded hover:bg-[#7FDF7F]">%</button>

          <button onClick={() => handleNumber('1')} className="bg-[#E8E8E8] p-3 rounded hover:bg-gray-300">1</button>
          <button onClick={() => handleNumber('2')} className="bg-[#E8E8E8] p-3 rounded hover:bg-gray-300">2</button>
          <button onClick={() => handleNumber('3')} className="bg-[#E8E8E8] p-3 rounded hover:bg-gray-300">3</button>
          <button onClick={() => handleOperator('-')} className="bg-[#90EE90] p-3 rounded hover:bg-[#7FDF7F]">-</button>
          <button onClick={handleReciprocal} className="bg-[#90EE90] p-3 rounded hover:bg-[#7FDF7F]">1/x</button>

          <button onClick={() => handleNumber('0')} className="bg-[#E8E8E8] p-3 rounded hover:bg-gray-300">0</button>
          <button onClick={() => handleNumber('.')} className="bg-[#E8E8E8] p-3 rounded hover:bg-gray-300">.</button>
          <button onClick={handlePlusMinus} className="bg-[#E8E8E8] p-3 rounded hover:bg-gray-300">+/-</button>
          <button onClick={() => handleOperator('+')} className="bg-[#90EE90] p-3 rounded hover:bg-[#7FDF7F]">+</button>
          <button onClick={handleEqual} className="bg-[#90EE90] p-3 rounded hover:bg-[#7FDF7F]">=</button>
        </div>
      </div>
    </div>
  );
}