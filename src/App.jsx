import { useState } from "react";
import { data } from "./data";
import './App.css';

function  App() {
  const [dreams, setDrems] = useState(data);
  console.log(data)
  const [showMore, setShowMore] = useState(false);
  const [showText, setShowText] = useState(false);
  let [myClassName, setMyClassName] = useState("");

  const showTextClick = (item) => {
    item.showMore = !item.showMore
    setShowText(!showText)
  }

  const setNewClass = () => {
    setMyClassName("changeClass")
  }

  const removeDream = (id) => {
    console.log(id);
    let newDreams = dreams.filter (dream =>
      dream.id !== id
    );
    console.log(newDreams);
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
            <h3 className={myClassName} onClick={setNewClass}>{showMore ? place : place.substring(0,0)}</h3>
            <p className={myClassName} onClick={setNewClass}>{showMore ? description : description.substring(0,0)}
            <button className="button" onClick={() => showTextClick(item)}>{showMore ? "Show less" : "Show more"}</button></p>
            <button className="button" onClick={() => removeDream(id)}>Dream fulfilled</button>
        </div>
        </div>

      </div>
    )
  }))}
    </div>
  )
}

// function App() {
//   const [dream, setDream] = useState(0);
//   const [places, setPlaces] = useState(data);
//   const {id, place, image, description} = data[dream];
//   const [showMore, setShowMore] = useState(false);
//   //const [showText, setShowText] = useState(false);

//   const nextDream = () => {
//     setDream ((dream => {
//       dream ++;
//       if (dream > data.length -1) {
//         dream = 0;
//       }
//       return dream;
//     }))
//   }
//   const previousDream = () => {
//     setDream ((dream => {
//       dream --;
//       if (dream < 0) {
//         return data.length - 1;
//       }
//       return dream;
//     }))
//   }
//   const removeDream = (id) => {
//     console.log(id)
//     let newDreams = places.filter(place => 
//       place.id !==id)
//     console.log(newDreams);
//     setPlaces(newDreams);
//     //почему не удаляется полностью объект со страницы, а лишь пропадает с консоли?
//   }

//   // const showTextClick = (item) => {
//   //   item.showMore = !item.showMore
//   //   setShowText(!showText)
//   // }

//   return(
//     <div>
//       <div className="container">
//         <h1>List of {places.length} places what I would like to visit</h1>
//       </div>
//       <div className="header">
//         <div className="container">
//           <img className="image" src={image} width={600} height={400} alt="place"/>
//         </div>
//         <div className="container">
//           <h2>{id} - {place}</h2>
//         </div>
//         <div className="container">
//           <p>{showMore ? description : description.substring(0, 120)}
//             <button className="showMore" onClick={() => setShowMore (!showMore)}>{showMore ? "Show less" : "Show more"}</button>
//           </p>
//         </div>
//       </div>
//       <div className="btn container">
//         <button onClick={previousDream}>Previous</button>
//         <button onClick={nextDream}>Next</button>
//       </div>
//       <div className="container">
//         <button onClick={() => removeDream(id)}>Dream fulfilled</button>
//       </div>
//     </div>
//   )
// }

export default App;
