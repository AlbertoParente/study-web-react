import React from 'react'

export default function WithParameter(props) {
    const status = props.note >= 7 ? 'Aprovado' : 'Reprovado'

    return (
        <div>
            <h2>{ props.title }</h2>
            <p>
                <strong>{ props.student } </strong> 
                tem nota 
                <strong> { props.note } </strong>
                e foi 
                <strong> { status }</strong>
            </p>
        </div>
    )
}