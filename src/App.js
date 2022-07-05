import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import { fetchData } from "./fetcher";

function App() {
  const [text, setText] = useState("");
  const [color, setColor] = useState("red");

  /*   
  onChange={onChangeCheckbox}
  const onChangeCheckbox = function (e) {
    const checked = e.target.checked;
    //const button = document.getElementById("jsonBtn");
    //const button = screen.getByRole("button");

    const button = getBy("Load"); //쿼리함수로 버튼 선택

    if (checked) {
      expect(button).toBeEnabled();
      //document.getElementById("jsonBtn").disabled = true;
    } else {
      expect(button).boBeDisabled();
      //document.getElementById("jsonBtn").disabled = false;
    }
  }; */

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>pElement</p>
        <button
          style={{ backgroundColor: color }}
          onClick={() => {
            setColor("blue");
          }}
        >
          파랑으로 변경
        </button>

        <input type="checkbox"></input>

        <p>{text}</p>

        <button
          id="Load"
          onClick={async () => {
            const res = await fetchData("3");
            setText(JSON.stringify(res));
          }}
        >
          Load
        </button>
      </header>
    </div>
  );
}

export default App;
