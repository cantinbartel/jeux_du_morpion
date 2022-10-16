import { useState, useEffect } from 'react'
import newScoreSound from './casino-bling.wav'

// Cell Component - Chaque case de la grille
const Cell = ({ number, combination, winner, handleClick }) => {
    return (
        <div 
        className='w-20 h-20 bg-gray-100 m-1 flex justify-center items-center rounded hover:bg-gray-200 shadow-lg border-gray-200'
        onClick={() => {handleClick(number, winner)}}>{combination[number - 1]}</div>
    )
}

// Grid Component - Grille
const Grid = ({ player1Score, player2Score, setPlayer1Score, setPlayer2Score, winner, setWinner, count, setCount }) => {
const [combination, setCombination] = useState((Array(9).fill('')))

const rows = [1, 2, 3]

const audioNewScore = new Audio(newScoreSound)
audioNewScore.loop = false

console.log('combination: ', combination)
console.log('winner', winner)
console.log('count', count)
useEffect(() => {
    setCount(count + 1)
    checkCombination()
}, [combination])


useEffect(() => {
    setCombination(Array(9).fill(''))
}, [winner])

const handleClick = (number, winner) => {
    if (winner) return
    let arrayCopy = [...combination]
    if (arrayCopy[number - 1] === '') {
        arrayCopy[number - 1] = count % 2 ? 'O' : 'X'
        setCombination(arrayCopy)
    }
}

const handleNewScore = (value) => {
    audioNewScore.play()
    value === 'X' ? setPlayer1Score(player1Score + 1) : setPlayer2Score(player2Score + 1)
    setWinner(true)
}

function checkCombination () {
    ['X', 'O'].map((value) => {
        rows.map((el, i) => {
            if (combination[0 + (i * 3)] === value && combination[1 + (i * 3)] === value && combination[2 + (i * 3)] === value) {
                handleNewScore(value)
            }
            if (combination[0 + i] === value && combination[3 + i] === value && combination[6 + i] === value) {
                handleNewScore(value)
            }
        })
        if (combination[0] === value && combination[4] === value && combination[8] === value) {
            handleNewScore(value)
        }
        if (combination[2] === value && combination[4] === value && combination[6] === value) {
            handleNewScore(value)
        }
        if (!combination.includes('')) {
            setWinner(true)
        }
    })
}

    return (
        <div className='w-screen' style={{height: '20rem'}}>
            <div className='flex flex-col justify-center items-center m-1'>
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
