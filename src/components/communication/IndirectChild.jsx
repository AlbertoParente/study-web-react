import React from 'react'


export default props => {
    const event = props.whenClick 
    
    return(
        <div>
            <div>
                Child
            </div>
            <button onClick={_ => event('Alberto Parente', 28, true)}>
                Set Information!
            </button>
        </div>
    )
}
