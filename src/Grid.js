import { useState, useEffect } from 'react'
import Cell from './Cell'

const Grid = () => {
const [count, setCount] = useState(0)
const [combination, setCombination] = useState((Array(9).fill('')))
const [winner, setWinner] = useState(false)

const rows = [1, 2, 3]

console.log('combination: ', combination)
console.log('winner', winner)
useEffect(() => {
    setCount(count + 1)
    checkCombination()
}, [combination])

const handleClick = (number, winner) => {
    if (winner) return
    let arrayCopy = [...combination]
    arrayCopy[number - 1] = count % 2 ? 'X' : 'O'
    setCombination(arrayCopy)
}

function checkCombination () {
    ['X', 'O'].map((value) => {
        rows.map((el, i) => {
            if (combination[0 + (i * 3)] === value && combination[1 + (i * 3)] === value && combination[2 + (i * 3)] === value) {
                setWinner(true)
            }
            if (combination[0 + i] === value && combination[3 + i] === value && combination[6 + i] === value) {
                setWinner(true)
            }
        })
        if (combination[0] === value && combination[4] === value && combination[8] === value) {
            setWinner(true)
        }
        if (combination[2] === value && combination[4] === value && combination[6] === value) {
            setWinner(true)
        }
    })
}

return (
<div className='w-screen' style={{height: '20rem'}}>
    <div className='flex flex-col justify-center items-center bg-gray-400 m-1'>
        {rows.map((row, index) => (
            <div key={index} className='flex justify-center items-center'>
                {[1, 2, 3].map(item => (
                    <Cell 
                        key={row == 1 ? item : row == 2 ? item + 3 : item + 6} 
                        number={row == 1 ? item : row == 2 ? item + 3 : item + 6}
                        combination={combination}
                        winner={winner}
                        handleClick={handleClick} />
                ))}
            </div>
        ))}
    </div>
</div>
)
}

export default Grid