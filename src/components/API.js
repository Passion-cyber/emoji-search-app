import React, { useState, useEffect } from "react";

const API = () => {
  const [data, setData] = useState({ results: [] });
  const [input, setInput] = useState("");   

  useEffect(()=> {
    fetch("https://emoji-api.com/emojis?access_key=f62581d37b894df4b5acb10380682124fe0a37ab")
    .then((reponse) => reponse.json())
    .then((data) => setData({ results: data }))
    .catch((error) => console.log(error));
  
  }, [])

  const handleSubmit = (event) => {
    return event.preventDefault();
  };

  return (
    <div>
      <form className="form-group" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search..."
          className="input"
          onChange={(e) => setInput(e.target.value)}
        />
      </form>
      <ul>
      {data.results.filter((emoji) => emoji.unicodeName.toLowerCase().includes(input.toLowerCase()))
  .map((emoji, index) => (<li key={index} className="list-items">{emoji.unicodeName} {emoji.emoji}</li>))}
      </ul>
    </div>
  ); 
};

export default API;
