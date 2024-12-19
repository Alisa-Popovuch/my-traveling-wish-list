import { useState } from "react";
import { data } from "./data";
import './App.css';
import DreamCard from "./dreamCard";

function App() {
  const [dreams, setDrems] = useState(data);

  const removeDream =(id) => {
    let newDreams = dreams.filter( dream => dream.id !== id );
    setDrems( newDreams );
  }

  return(
    <div>
      <div className="nameContainer">
        <h2>My traveling</h2>
        <h1>wish list</h1>
      </div>
      {dreams.map(dream => (
        <DreamCard
          key={dream.id}
          dream={dream}
          removeDream={removeDream}
        />
      ))}
    </div>
  )
}

export default App;

