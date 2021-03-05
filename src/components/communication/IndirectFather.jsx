import React, { useState } from 'react'
import IndirectChild from './IndirectChild'

export default props => {
    const [name, setName] = useState('Juliana Cavalcante')
    const [age, setAge] = useState(0)
    const [adulthood, setAdulthood] = useState(false)
    
    function setInformation(name, age, adulthood) {
        setName(name)
        setAge(age)
        setAdulthood(adulthood)
    }
    
    return(
        <div>
            <div>
                <span>{name} </span>
                <span><strong>{age}</strong> </span>
                <span> {adulthood ? 'True' : 'False'}</span>
            </div>
            <IndirectChild whenClick={setInformation}></IndirectChild>
        </div>
    )
}