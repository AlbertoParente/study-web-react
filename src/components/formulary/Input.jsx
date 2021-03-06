import React, { useState } from 'react'
import "./input.css"

export default props => {
    const [value, setValue] = useState('Value: ')

    function whenToChange(e) {
        setValue(e.target.value)
    }

    return (
        <div className="Input">
            <h2>{value}</h2>
            <div style={{
                display: 'flex',
                flexDirection: 'column'
            }}>
                <input value={value} onChange={whenToChange} />
                <input value={value} readOnly />
                <input value={undefined} />
            </div>
        </div>
    )
}
