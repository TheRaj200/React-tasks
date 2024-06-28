import React, { useState } from 'react';
import './App.css';
import './index.css';

function App() {
  const initialData = [];
  const [visible, setVisible] = useState(true);
  const [on, seton] = useState(false);
  const [text, setText] = useState('');
  const [data, setdata] = useState(initialData);
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [sum, setSum] = useState();
  const[counter, setCounter] =useState(0);
  const Data = ['Apple',
    'Banana',
    'Orange',
    'Strawberry',
    'Grapes',
    'Watermelon',
    'Kiwi',
    'Elderberry',
     'Fig', 
     'Grape'];
  const [searchText, setSearchText] = useState('');

  // Function to filter records based on search text
  const filteredData = Data.filter(item => 
    item.toLowerCase().includes(searchText.toLowerCase())
  );
  const removeChild = () => {
    setdata(data.slice(0, -1));
  };

  const handleSum = () => {
    const result = Number(num1) + Number(num2);
    const newRecord = `User Record Sum: ${result}`;
    setdata([...data, newRecord]);
    setSum(result);
  };

  return (
    <div className="App ">

      <section className=' relative bg-zinc-800 mb-5 p-10 border-2 rounded-md border-zinc-700'>
        <h2 >Sum Two Numbers</h2>
        <div id='inputs'>
        <input className='gap py-[5px] rounded-md pl-5'
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          />
        <input
          type="number"
           className='gap py-[5px] rounded-md pl-5'
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          /></div>
        <button id='btn' onClick={handleSum} disabled={on}>
          Sum
        </button>
        <button className='absolute left-[28vh]' id='btn' onClick={() => seton(!on)}>
        {on? 'enabled' : 'disable'}
        </button>
        <p id='btn' >Result : {sum}</p>
      </section>
      <section className='bg-zinc-800 mb-5  p-10 border-2 rounded-md border-zinc-700'>
        <h2>Records</h2>
        {visible && (
          <ol>
            {data.map((rec, index) => (
              <li key={index}>{rec}</li>
            ))}
          </ol>
        )}
        <div >
        <button className='gap' onClick={() => setVisible(!visible)}>
          {visible ? 'Hide' : 'Show'}
        </button>
        <button onClick={removeChild}>Remove Record</button>
       </div>
      </section>
      <section className='bg-zinc-800 mb-5  p-10 border-2 rounded-md border-zinc-700'>
        <h2 className='pb-5'>Counter</h2>
        <div id='flex'>
        <button  onClick={() => setCounter(pre=>  pre <= 0 ?  0 : pre - 1)}>
            -
        </button>
        <p className='pt-2'  >{counter}</p>
        <button  onClick={() => setCounter(counter + 1)}>
      +
        </button>
        </div>

      </section>
      <section className='bg-zinc-800 mb-5  p-10 border-2 rounded-md border-zinc-700'>
        <h2>Search Filter</h2>
        <input
          type="text"
           className='gap py-[5px] rounded-md pl-5'
          placeholder="Search..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <ol>
          {filteredData.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ol>
      </section>
        <section className='bg-zinc-800 mb-5  p-10 border-2 rounded-md border-zinc-700'>
          <h2>Two-Way Data Binding</h2>
          <input
           className='gap py-[5px] rounded-md pl-5'
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <p>{text}</p>
        </section>

    </div>

  );
}

export default App;