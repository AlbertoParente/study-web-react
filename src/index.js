import ReactDOM from 'react-dom'
import React from 'react'

const tag = <strong>Hello...!</strong>

ReactDOM.render(
    <div>
        { tag }
    </div>,
    document.getElementById('root')
)
