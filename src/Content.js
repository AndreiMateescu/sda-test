import { useState } from "react";

// implicit export
// explicit export

function Content() {
  const [counter, setCounter] = useState(0);
  const [string1, setString1] = useState("JavaScript");

  const [nume, setNume] = useState("");

  function increment() {
    setCounter(counter + 1);
  }

  function decrement() {
    setCounter(counter - 1);
  }

  function change() {
    setString1("React");
  }

  function reset() {
    setString1("");
  }

  //   function changeHandler(event) {
  //     setNume(event.target.value);
  //   }

  return (
    <div className="content common">
      Valoarea counter 1 este: {counter}
      <br />
      Valoare string este: {string1}
      <br />
      <button onClick={increment}>Incrementeaza</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={change}>Schimba text</button>
      <button onClick={reset}>Reset text</button>
      <br />
      <br />
      <br />
      <br />
      <input
        type="text"
        onChange={(event) => {
          setNume(event.target.value);
          if (event.target.value === "") {
            setCounter(0);
          } else {
            setCounter(counter + 1);
          }
        }}
      />
      <br />
      Label: {nume}
    </div>
  );
}

export default Content;
