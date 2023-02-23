import React, {useEffect, useState} from 'react';
import data from "../data.json"

const InputForm = () => {
    const userdata = data.users;
    const [input, setInput] = useState('')


    // useEffect(() => {

    // }, [input]);
    const handleSubmit = (event) => {
        event.preventDefault();
    }

  return (
    <div>
        <form className="form-group" onSubmit={handleSubmit}>
        <input type="text"
        placeholder='Search...'
        className='input'
        onChange={(e) => setInput(e.target.value)} />
        </form>
        <ul>
            {userdata.filter((user) => (user.naming.toLocaleLowerCase().includes(input))).map((user, index) =>(
            <li key={index} className="list-items">{user.naming}</li>                
            ))}
        </ul>
    </div>
  )
}

export default InputForm