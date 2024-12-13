import { useState } from "react";
import { data } from "./data";
import './App.css';

function  App() {
  const [dreams, setDrems] = useState(data);
  const [showMore, setShowMore] = useState(false);
  let [myClassName, setMyClassName] = useState("");

  const setNewClass = () => {
    setMyClassName("changeClass")
  }

  const removeDream = (id) => {
    console.log(id);
    let newDreams = dreams.filter (dream =>
      dream.id !== id
    );
    setDrems(newDreams);
  }

  return (
    <div>
      <div className="container">
        <h2>My traveling</h2>
        <h1>wish list</h1>
      </div>
      {dreams.map((item => {
    const{id, place, image, description, showMore} = item
    return (
      <div key={id}>
        <div className="imageContainer">
          <img className="image" src={image}  alt="image"/>
          <div className="btn">
          <div>
            {showMore && (
              <div>
                <h3> {place} </h3>
                <p> {description} </p>
              </div>
            )}
            </div>
            <p> 
              <button className="button" onClick={() => setShowMore(!showMore )}>{showMore ? "Show less" : "Show more"}</button>
            </p>
            <button className="button" onClick={() => removeDream(id)}>Dream fulfilled</button>
        </div>
        </div>
      </div>
    )
  }))}
    </div>
  )
}

export default App;