import React, { Fragment } from "react"
import "./Card.css"


const Card = ({ monster }) => {
    return (
        <Fragment>
            <div className="card">
                <img alt="monster" src={`https://robohash.org/${monster.id}?set=set4`} />
                <h2>{monster.name}</h2>
                <h2>{monster.id}</h2>
            </div>
        </Fragment>
    )
}

export default Card;