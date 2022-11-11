import { useState, useEffect } from "react"
import Grid from "./Grid"
import { IoVolumeHigh, IoVolumeMute } from 'react-icons/io5'
import elevatorMusic from './music/elevator_music.mp3'

const audio = new Audio(elevatorMusic)
audio.loop = true

function App() {
  const [player1, setPlayer1] = useState('')
  const [player2, setPlayer2] = useState('')
  const [playersNameError, setPlayersNameError] = useState('')
  const [startGame, setStartGame] = useState(false)
  const [play, setPlay] = useState(false)
  const [count, setCount] = useState(0)
  const [player1Score, setPlayer1Score] = useState(0)
  const [player2Score, setPlayer2Score] = useState(0)
  const [winner, setWinner] = useState(false)

// Repositionne la page lorsque l'on revient à l'écran d'acceuil (version mobile)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [startGame]);
  
  const startPlaying = (e) => {
    e.preventDefault()
    if (player1 !== '' && player2 !== '') {
      setPlayersNameError('')
      setStartGame(true)
      setPlay(true)
      audio.play()
    } else {
      setPlayersNameError('Entrez les noms des joueurs et deux pour continuer')
    }
    
  }
 
  return (
    <div 
      className={`w-screen h-screen flex flex-col items-center ${startGame ? 'bg-green-300' : 'bg-green-300'}`}
      style={{ fontFamily: 'Silkscreen' }}>
      {!startGame && (
        <>
         <p className="text-center mt-12 md:mt-20 text-3xl">Bienvenue au jeux du morpion</p>
         <p className="text-center mt-12 text-2xl mb-12">Entrez les noms des deux jours</p>
   
          <form className='flex-col items-center' onSubmit={(e) => startPlaying(e)}>
            <div className="md:w-104 mb-6 flex flex-col md:flex-row justify-between items-start md:items-center">
              <label>Player 1:</label>
              <input 
                type="text"
                placeholder="Entrez un nom"
                className="border rounded border-gray-300 px-2 py-1 mt-3 md:mt-0 !outline-none" 
                onChange={(e) => setPlayer1(e.target.value)} />
            </div>
            <div className="md:w-104 mb-6 flex flex-col md:flex-row justify-between items-start md:items-center">
              <label>Player 2:</label>
              <input 
                type="text" 
                placeholder="Entrez un nom"
                className="border rounded border-gray-300 px-2 py-1 mt-3 md:mt-0 !outline-none"
                onChange={(e) => setPlayer2(e.target.value)}/>
            </div>
         </form>
        <button 
          className='bg-black rounded text-white py-1.5 px-6 shadow-md mt-8 md:mt-20 hover:scale-110'
          onClick={startPlaying}>PLAY</button>
        <p className='mt-8 md:mt-20 px-8'>{playersNameError}</p>
         
         </>
      )}
      {startGame && (
        <>
          <p className="text-2xl mt-8 md:mt-16 mb-4">Le morpion de la mort</p>
          <button 
            className="mb-10 bg-red-40" 
            onClick={() => { play ? audio.pause() : audio.play(); setPlay(!play)}}>
            {play ? <IoVolumeHigh /> : <IoVolumeMute />}
          </button>
          <Grid 
            player1Score={player1Score}
            setPlayer1Score={setPlayer1Score} 
            player2Score={player2Score}
            setPlayer2Score={setPlayer2Score}
            winner={winner}
            setWinner={setWinner}
            count={count}
            setCount={setCount} />
          <div className="flex justify-center">
            <div className="flex-col ml-16 mr-4">
              <p className="mr-12 capitalize text-lg">{player1}: <b>X</b></p>
              <p>{player1Score} {`${player1Score == 0 ? 'point' : 'points'}`}</p>
            </div>
            <div>
              <p className="mr-12 capitalize text-lg">{player2}: <b>O</b></p>
              <p>{player2Score} {`${player2Score == 0 ? 'point' : 'points'}`}</p>
            </div>
          </div>
          <div>
            {winner && (
              <div className="mt-12 flex justify-center">
                <button
                  className="mr-12 border border-black px-3 py-2 rounded shadow-md hover:scale-110" 
                  onClick={() => { setWinner(false); setCount(1); setStartGame(false); audio.pause()}}>Quitter</button>
                <button 
                  className="border border-black px-3 py-2 rounded shadow-md hover:scale-110"
                  onClick={() => setWinner(false)}>continuer</button>
              </div>
            )}
          </div>
        </>
      )}
      
    </div>
  );
}

export default App;
