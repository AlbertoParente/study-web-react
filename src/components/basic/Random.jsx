import React from 'react'

export default props => {
    const { min, max } = props
    const random = parseInt(Math.random() * (max - min)) + min

    return (
        <div>
            <h2>Valor Aleatório</h2>
            <p><strong>Minimum value: </strong> {min}</p>
            <p><strong>Maximum value: </strong> {max}</p>
            <p><strong>Value chosen: </strong> {random}</p>
        </div>
    )
}