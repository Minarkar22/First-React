
import {useState} from "react";
import List from "./List.jsx";
import Item from "./Item.jsx";
import Form from "./Form.jsx";




function App () {
    const [data, setData] = useState([
        {id : 1, content:"Hello World", name: "Alice"},
        {id : 2, content:"Hello World", name: "Alice"}
    ]);

    const [showForm, setShowForm] = useState(false);

    const remove = (id) => {
        setData(data.filter(item => item.id != id));
    };

    const add = (content, name) => {
        const id = data[data.length - 1].id + 1;
        //console.log(id);
        setData([...data, { id , content, name }]);
    };

    return (
       <div>
           <h1 style={{
               display: "flex",
               justifyContent: "space-between",
               alignItems: "center"
           }}>
               Yaycha
               <button
                   onClick={() => setShowForm(!showForm)}
               >{showForm ? "x" : "+"}</button>
           </h1>
           {showForm && <Form add={add}/>}
           <List>
               {data.map(item => {
                   return <Item key={item.id} item={item} remove={remove} />;
               })}
           </List>
       </div>


    )
}

export default App
