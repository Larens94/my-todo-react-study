import React, { useState, useEffect } from "react";
import Item from "./Item";

function List() {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("La mia prima lista");
  const [addValue, setAddValue] = useState('');
  const [reRender, setRender] = useState(false);

  const addElement = () => {
    setAddValue('');
    console.log('addElement:::start')
    const newData = data;
    newData.push(addValue);
    setData(newData);
  }

  const removeElement = (index) => {
    console.log('removeElement:::start::', index)
    let newData = data;
    newData.splice(index, 1);
    setData(newData);
    setRender(!reRender)
  }

  useEffect(() => {
    //dipendenze vuote è component mount
    console.log('mount')
    //prendiamo i dati dal database
    const dataDb = [];
    setData(dataDb)

    return () => {
      console.log('unmount')  
    }
  }, [])


  useEffect(() => {
    //dipendenze non vuote
    console.log("c'è stata una modifica della dipendenza citata.:::data::", data)
  }, [data])

  useEffect(() => {
    //dipendenze non vuote
    console.log("c'è stata una modifica della dipendenza citata.:::addValue::", addValue)
  }, [addValue])
  
  return (
    <div style={{ backgroundColor: 'gold'}}>
      {title && <h1>{title}</h1>}
      <ul>
        <input value={addValue} onChange={(event) => setAddValue(event.target.value)} />
        <button onClick={addElement}>ADD</button>
        {data.map((item, index) => {
          return <Item key={index} description={item} onRemove={() => removeElement(index)}/>;
        })}
      </ul>
    </div>
  );
}

export default List;
