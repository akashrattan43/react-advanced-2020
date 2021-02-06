import React from "react";
import { data } from "../../../data";



const UseStateArray = () => {
  const [person, setPerson] = React.useState(data)

  const removeItem = (id) => {
    const newPeople = person.filter((people) => people.id !== id)
    setPerson(newPeople)
    
  }
  return (
    <>
      {person.map((people) => {
        const {id, name} = people
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>CLEAR</button>
          </div>
        )
      })}
      <button className='btn' onClick={() => setPerson([])}>Clear Names</button>
    </>
  )
}



export default UseStateArray;
