import React, { Fragment } from "react"



const Card = ({ monsterName, monsterID }) => {
    return (
        <Fragment>
            <div>
                <h1>{monsterName}</h1>
                <h2>{monsterID}</h2>
            </div>
        </Fragment>
    )

}

export default Card;