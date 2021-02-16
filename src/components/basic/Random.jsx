import React from 'react'

export default props => {
    const min = props.min
    const max = props.max
    const random = parseInt(Math.random() * (max - min)) + min
    return (
        <div>
            <h2>Valor Aleatório</h2>
            <p><strong>Valor Mínimo: </strong> {min}</p>
            <p><strong>Valor Maximo: </strong> {max}</p>
            <p><strong>Valor Escolhido: </strong> {random}</p>
        </div>)
}