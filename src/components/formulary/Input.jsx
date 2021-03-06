import React, { useState } from 'react'
import "./input.css"

export default props => {
    const [value, setValue] = useState('Initial')

    return(
        <div className="Input">
            <input value={value} />
        </div>
    )
}