import { useState } from "react";
import Number from "./Number";
import "./App.scss";

function App() {
  const [result, setResult] = useState(0);
  const [err, setErr] = useState("");
  const numbers = [
    "1",
    "2",
    "3",
    "+",
    "4",
    "5",
    "6",
    "-",
    "7",
    "8",
    "9",
    "*",
    "0",
    "=",
    "/",
  ];

  const handleClick = number => {
    setErr("");
    let data = number.innerHTML;
    if (data == "=") {
      try {
        let newResult = Math.round(eval(result));
        console.log(newResult);
        setResult(newResult);
        console.log(result);
      } catch {
        setResult(0);
        setErr("Expression not correct!");
      }
    } else {
      setResult(result == 0 ? data : result + data);
    }
  };
  return (
    <>
      {err ? <div className="err">{err}</div> : ""}
      <div className="result">{result}</div>
      <div className="calculator">
        {numbers.map(number => {
          return (
            <Number
              handleClick={handleClick}
              key={number}
              number={number}></Number>
          );
        })}
      </div>
    </>
  );
}

export default App;
