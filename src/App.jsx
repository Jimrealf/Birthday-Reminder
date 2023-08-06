import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import data from "./data";
import "./App.css";

function App() {
  const [people, setPeople] = useState(data);

  function handleClick() {
    setPeople([]);
  }

  return (
    <main>
      <h1>{people.length} Birthdays Today</h1>
      <ul>
        <List people={people} />
      </ul>
      <button onClick={handleClick}>Clear All</button>
    </main>
  );
}

function List({ people }) {
  return (
    <>
      {people.map((person) => (
        <Person key={person.id} person={person} />
      ))}
    </>
  );
}

function Person({ person }) {
  const { id, name, age, image } = person;
  return (
    <li key={id}>
      <img src={image} alt={name} />
      <div className="content">
        <h2>{name}</h2>
        <p>{age} years</p>
      </div>
    </li>
  );
}

export default App;
