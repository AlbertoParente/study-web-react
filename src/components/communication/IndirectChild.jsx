import React from 'react'

export default props => {
    const event = props.whenClick
    const randomAge = () => parseInt(Math.random() * (20)) + 10
    const randomAdulthood = () => randomAge() > 18

    return (
        <div>
            <div>
                Child
            </div>
            <button onClick={_ => event('Alberto Parente', randomAge(), randomAdulthood())}>
                Set Information!
            </button>
        </div>
    )
}
