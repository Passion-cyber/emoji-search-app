import React, { Component } from "react";
const apiKey = process.env.REACT_APP_API_KEY;


class EmojiSearchApp extends Component {
  constructor(props) {
    super(props);
    this.state = { data: { results: [] }, input: "" };
  }

  componentDidMount () {
    fetch(`https://emoji-api.com/emojis?access_key=${apiKey}`)
      .then((reponse) => reponse.json())
      .then((data) => this.setState({ data: { results: data } }))
      .catch((error) => console.log(error));
  }

  handleSubmit = (event) => {
    event.preventDefault();
  };

  handleInputChange = (event) => {
    this.setState({ input: event.target.value });
  };

  render() {
    const { data, input } = this.state;
    return (
      <div>
        <form className="form-group" onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Search..."
            className="input"
            onChange={this.handleInputChange}
          />
        </form>
        <ul>
          {data.results.filter((emoji) => emoji.unicodeName.toLowerCase().includes(input.toLowerCase()))
            .map((emoji, index) => (<li key={index} className="list-items">{emoji.character} {emoji.unicodeName}{" "}</li>
            ))}
        </ul>
      </div>
    );
  }
}

export default EmojiSearchApp;





// SAME AS THE ABOVE CODE BUT IN FUNCTIONAL COMPONENT

// import React, { useState, useEffect } from "react";
// const apiKey = process.env.REACT_APP_API_KEY;

// const EmojiSearchApp = () => {
//   const [data, setData] = useState({ results: [] });
//   const [input, setInput] = useState("");

//   useEffect(() => {
//     fetch(`https://emoji-api.com/emojis?access_key=${apiKey}`)
//       .then((reponse) => reponse.json())
//       .then((data) => setData({ results: data }))
//       .catch((error) => console.log(error));
//   }, []);

//   const handleSubmit = (event) => {
//     return event.preventDefault();
//   };

//   return (
//     <div>
//       <form className="form-group" onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Search..."
//           className="input"
//           onChange={(e) => setInput(e.target.value)}
//         />
//       </form>
//       <ul>
//         {data.results.filter((emoji) => emoji.unicodeName.toLowerCase().includes(input.toLowerCase()))
//           .map((emoji, index) => (<li key={index} className="list-items">{emoji.character} {emoji.unicodeName}{" "}
//             </li>
//           ))}
//       </ul>
//     </div>
//   );
// };

// export default EmojiSearchApp;


