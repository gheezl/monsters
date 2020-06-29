import React, { Fragment } from "react"
import "./Card.css"


const Card = ({ monster }) => {
    return (
        <Fragment>
            <div className="card">
                <img alt="monster" src={`https://robohash.org/${monster.id}?set=set2`} />
                <h1>{monster.name}</h1>
                <h2>{monster.id}</h2>
            </div>
        </Fragment>
    )
}

export default Card;