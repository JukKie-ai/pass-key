import "./styles.css";
import { useState } from "react";

function App() {
  const [data, setData] = useState(null);
  const [add, setAdd] = useState([]);

  function getData(val) {
    setData(val.target.value);
    console.warn(data);
  }

  const addNumber = (e) => {
    add.push(e.target.value);
    setAdd(add);
    console.log(add);
  };

  function compare() {
    let text = add.join("");

    if (data === text) {
      alert("Congratulations! Successfully Unlocked!");
      setAdd([]);
    } else {
      alert("Try again! Passkey is " + data + ", Combo inputted is " + text);
      setAdd([]);
    }
  }

  return (
    <div className="grid">
      <input
        type="text"
        className="input"
        name="input"
        placeholder="Pass Key"
        onChange={getData}
      ></input>
      <button onClick={(e) => addNumber(e)} value="1">
        1
      </button>
      <button onClick={(e) => addNumber(e)} value="2">
        2
      </button>
      <button onClick={(e) => addNumber(e)} value="3">
        3
      </button>
      <button onClick={(e) => addNumber(e)} value="4">
        4
      </button>
      <button onClick={(e) => addNumber(e)} value="5">
        5
      </button>
      <button onClick={(e) => addNumber(e)} value="6">
        6
      </button>
      <button onClick={(e) => addNumber(e)} value="7">
        7
      </button>
      <button onClick={(e) => addNumber(e)} value="8">
        8
      </button>
      <button onClick={(e) => addNumber(e)} value="9">
        9
      </button>
      <button className="span-three" id="green" onClick={compare}>
        CHECK
      </button>
    </div>
  );
}

export default App;
