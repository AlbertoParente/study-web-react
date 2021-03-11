import React, { useState } from 'react'
import './Mega.css'

export default props => {
    function generatesUncontainedNumbers(min, max, array) {
        const random = parseInt(Math.random() * (max + 1 - min)) + min

        return array.includes(random) ?
            generatesUncontainedNumbers(min, max, array) : random
    }


    function generatesNumbers(qtd) {
        const numbers = Array(qtd)
            .fill(0)
            .reduce((nums) => {
                const newNumber = generatesUncontainedNumbers(1, 60, nums)

                return [...nums, newNumber]
            }, [])
            .sort((n1, n2) => n1 - n2)

        return numbers
    }

    const [qtd, setQtd] = useState(props.qtd || 6)
    const initialNumbers = generatesNumbers(qtd)
    const [numbers, setNumbers] = useState(initialNumbers)

    return (
        <div className="Mega">
            <h2>Mega</h2>
            <h3>{numbers.join(' ')}</h3>
            <div>
                <label>Quantity of Numbers</label>
                <input
                    min="6"
                    max="15"
                    type="number"
                    value={qtd}
                    onChange={(e) => {
                        setQtd(+e.target.value)
                        setNumbers(generatesNumbers(+e.target.value))
                    }}
                />
            </div>
            <button onClick={_ => setNumbers(generatesNumbers(qtd))}>
                Sort
            </button>
        </div>
    )
}
