import React from 'react'
import IndirectChild from './IndirectChild'

export default props => {
    let name = 'Juliana Cavalcante'
    let age = 24
    let adulthood = true
    
    function setInformation(nameParam, ageParam, adulthoodParam) {
        name = nameParam 
        age = ageParam
        adulthood = adulthoodParam
        
        console.log(nameParam, ageParam, adulthoodParam)
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