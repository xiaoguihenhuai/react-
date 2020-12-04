import React from 'react'
import PropTypes from 'prop-types'

export default function TodoHeader(props) {
    return (
        <div>
            <h1>{props.title}</h1>
            <p>{props.x + props.y}</p>
            <p>{props.children}</p>
        </div>
    )
}

TodoHeader.propTypes = {
    title: PropTypes.string,
    x: PropTypes.number,
    y: PropTypes.number,
}