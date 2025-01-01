import * as React from 'react';

const list = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

const List = () => {
  return (
    <ul>
      {list.map((item) => {
        return (
          <li key={item.objectID}>
            <span>
              <a href={item.url}>{item.title}</a>
            </span><br />
            <span>{item.author}</span><br />
            <span>{item.num_comments}</span><br />
            <span>{item.points}</span>
          </li>
        );
      })}
    </ul>
  )
}

const Search = () => {
  const handleChange = (event) => {
      console.log(event.target.value);
  };
  return (
    <div>
      <label htmlFor="search">Search</label>
      <input type="text" id='search' onChange={handleChange}/>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>Hello My hackear stories</h1>
      <Search/>
      <List/>
    </div>
  
  );
}

export default App
