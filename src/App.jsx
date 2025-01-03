import * as React from 'react';
import List from "./List.jsx"
import Item from "./Item.jsx"
import Form from "./Form.jsx"
import { AppContext } from './ThemedApp.jsx';


function App () {
  const { mode, setMode } = React.useContext(AppContext);
  const [data, setData] = React.useState([
    { id: 1, content:"Hello, Morning", name: "Alice" },
    { id: 2, content:"React is fun", name: "Bob" },
    { id: 3, content:"Yay, interesting", name: "Chris" },
  ]);

  const [showForm, setShowForm] = React.useState(false);

  const remove = id => {
    setData(data.filter(item => item.id != id));
  };

  const add = ( content, name ) => {
    const id = data[data.length - 1].id + 1;
    setData([...data, {id, content, name}]);
  };
  return(
    <div 
      className='min-h-[1500]
                pt-[20px]'
      style={{background: mode === "dark" ? "black" : "white",
              color: mode === "dark" ? "white" : "black"}}>
      <div className='w-[600px] m-[20px] text-center'>
        <h1 className='text-2xl font-bold relative'>
        Yaycha
        <button onClick={() => setShowForm(!showForm)}
          className='w-[30px] h-[30px] rounded-full border-0 text-white flex items-center justify-center absolute right-0 top-0 text-xs'
          style={{backgroundColor: showForm ? "#dc3545" : "#0d6efd"}}>
          {showForm ? "x" : "+"}
        </button> 
         <button 
         onClick={() => 
                setMode(mode === "dark" ? "light" : "dark")
         }
         style={{
          marginLeft : 8,
          padding: "0 20px",
          height: 32,
          borderRadius: 32,
          border: "0 none",
          background: mode === "dark" ? "#333" : "#ddd",
          color : mode === "dark" ? "white" : "black",
         }}  
         >
          {mode === "dark" ? "Light" : "Dark"}
         </button>
        </h1>
        {showForm && <Form add = {add} />}
        <List>
          {data.map(item => <Item key={item.id} item={item} remove={remove}/>)}  
        </List> 
      </div>
    </div>
    
  )
}


export default App;
