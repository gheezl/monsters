import React, { Fragment } from "react"
import Card from "../Card/Card.js"

const CardList = ({ monsters }) => {
    return (
        <Fragment>
            <div>
                {monsters.map(monster => (
                    <Card monsterName={monster.name} monsterID={monster.id} />
                ))}
            </div>
        </Fragment>
    )
}

export default CardList;