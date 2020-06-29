import React, { Fragment } from "react"
import "./SearchBox.css"


const SearchBox = ({ onSearchChange }) => {
    return (
        <Fragment>
            <div className="searchBox">
                <input
                    className="search"
                    placeholder="Search Cats"
                    type="search"
                    onChange={onSearchChange}
                />
            </div>
        </Fragment>
    )
}

export default SearchBox;