import React from 'react'

export default function WithParameter(props) {
    const status = props.note >= 7 ? 'Aprovado' : 'Reprovado'
    const noteInt = Math.cell(props.note)

    return (
        <div>
            <h2>{ props.title }</h2>
            <p>
                <strong>{ props.student } </strong> 
                tem nota 
                <strong> { noteInt } </strong>
                e foi 
                <strong> { status }</strong>
            </p>
        </div>
    )
}