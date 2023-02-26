import React, { useState, useEffect } from "react";
const apiKey = process.env.REACT_APP_API_KEY;

const API = () => {
  const [data, setData] = useState({ results: [] });
  const [input, setInput] = useState("");
  
  useEffect(() => {
    fetch(`https://emoji-api.com/emojis?access_key=${apiKey}`)
      .then((reponse) => reponse.json())
      .then((data) => setData({ results: data }))
      .catch((error) => console.log(error));
  }, []);

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
        {data.results
          .filter((emoji) =>
            emoji.unicodeName.toLowerCase().includes(input.toLowerCase())
          )
          .map((emoji, index) => (
            <li key={index} className="list-items">
              {emoji.character} {emoji.unicodeName}{" "}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default API;
