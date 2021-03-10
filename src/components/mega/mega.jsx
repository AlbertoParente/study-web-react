function generatesUncontainedNumbers(min, max, array) {
    const random = parseInt(Math.random() * (max +1 - min)) + min
    
    return array.includes(random) ? 
        generatesUncontainedNumbers(min, max, array) : random
}


function generatesNumbers(qtd) {
    const numbers = Array(qtd)
        .fill(0)
        .reduce((nums) => {
            const newNumber = generatesUncontainedNumbers(1, 60, nums)

            return [ ...nums, newNumber ]
        }, [])
        .sort((n1, n2) => n1 - n2)
    
    return numbers
}

console.log(generatesNumbers(7))
