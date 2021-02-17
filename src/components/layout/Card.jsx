import React from 'react'
import './Card.css'

export default props => {
    return(
        <div className="Card">
            <div className="Title">{props.title}</div>
            <div className="Content">Content</div>
        </div>
    )
}
