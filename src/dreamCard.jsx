import { useState } from "react";

function DreamCard ({ dream, removeDream }) {
    const { id, place, image, description } = dream;
    const [ showMore, setShowMore ] = useState(false);

    return (
        <div>
            <div className="container">
                <img src={ image } width={300} alt="place"/>
            </div>
            <div>
                {showMore&& (
                    <h3>{ id } - { place }</h3>,
                    <p>{ description }</p>
                )}
            </div>
            <div className="btn">
                <button 
                    className="button"
                    onClick={() => {setShowMore(!showMore)}}>
                        { showMore? "Show less" : "Show more" }
                </button>
                <button 
                    className="button" 
                    onClick={() => removeDream(id)}>
                        Dream fulfilled
                </button>
            </div>
        </div>
    )
}

export default DreamCard;