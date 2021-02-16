import React from 'react'
import PropTypes from 'prop-types'


export const ShowIncrement = ({increment}) => {
    return (
        <button
            className = "btn btn-outline-primary"
            onClick = {() => {
                increment();
            }}
        >
            Increment
        </button>
    )
}

ShowIncrement.propTypes = {
    increment: PropTypes.func.isRequired
}
    