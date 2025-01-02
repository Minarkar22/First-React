import * as React from 'react';

const Button = () => {
  const clickHandler = () => {
    console.log ("clicked on Button");
  }
  return (
    <div>
      <button type='button' onClick={clickHandler} className='border-2 border-black hover:bg-gray-800'>
        Click
      </button>
    </div>
  )
}

const Countfun = () => {
  const [count, setCount] = React.useState(0);
  function countPlusHandle () {
    setCount(count + 1);
  }

  function countMinusHandle () {
    setCount(count - 1);
  }

  function countReset () {
    setCount (0);
  }
  return (
    <div>
      Count : {count}
      <button type='button' onClick={countPlusHandle} className='border-2 border-black rounded-lg m-3'>
        Increase count
      </button>
      <button type='button' onClick={countMinusHandle} className='border-2 border-black rounded-lg m-3'>
        Descrese count
      </button>
      <button type='button' onClick={countReset} className='border-2 border-black rounded-lg m-3'>
        Reset count
      </button>
    </div>
  );
}

const ChangeText = () => {
  const [text, setText] = React.useState("");
  function handleChange(event) {
    setText(event.target.value);
  }
  return (
    <div>
      <h3>Input field using event</h3>
      <input type="text" value={text} onChange={handleChange} className='border-2 border-black rounded-md'/><br />
      Text: {text}
    </div>
  );
}



function App() {
  return (
    <div className='p-[20px]'>
      <div className='p-4 bg-blue-500 text-white mb-[50px]'>
        <h1 className='text-2xl font-bold'>Hello My hackear stories</h1>
      </div>
      <Button/>
      <Countfun/>
      <ChangeText/>
      
    </div>
  
  );
}

export default App
