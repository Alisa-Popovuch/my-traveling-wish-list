import { useState } from "react";

function dreamCard ({ dream, removeDream }) {
    const { id, place, image, description } = dream;
    const [ showMore, setShowMore ] = useState(false);

    return (
        <div>
            <div className="container">
                <img className="image" src={ image } width={400} alt="place"/>
                {showMore&& (
                    <div className="nameContainer">
                        <h3>{ id } - { place }</h3>
                        <p>{ description }</p>
                    </div>
                )}
            <div className="btn">
                <button 
                    className="button"
                    onClick={() => {setShowMore(!showMore)}}>
                        { showMore ? "Show less" : "Show more" }
                </button>
                <button 
                    className="button" 
                    onClick={() => removeDream(id)}>
                        Dream fulfilled
                </button>
            </div>
            </div>
        </div>
    )
}

export default dreamCard;