const Cell = ({ number, combination, winner, handleClick }) => {
    return (
        <div 
        className='w-20 h-20 bg-gray-100 m-1 flex justify-center items-center'
        onClick={() => {handleClick(number, winner)}}>{combination[number - 1]}</div>
    )
}

export default Cell