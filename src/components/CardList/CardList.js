import React, { Fragment } from "react"
import "./CardList.css"
import Card from "../Card/Card.js"

const CardList = ({ monsters }) => {
    return (
        <Fragment>
            <div className="cardList">
                {monsters.map(monster => (
                    <Card monster={monster} />
                ))}
            </div>
        </Fragment>
    )
}

export default CardList;