import { useState, useEffect } from "react";
import Grid from "./Grid";
// import '/elevator_music'
import elevatorMusic from './elevator_music.mp3'
import { IoVolumeHigh, IoVolumeMute } from 'react-icons/io5';
function App() {
  const [play, setPlay] = useState(false)
  const [player1, setPlayer1] = useState('')
  const [player2, setPlayer2] = useState('')
  const [playersValidated, setPlayersValidated] = useState(false)
  const [startGame, setStartGame] = useState(false)
  const audio = new Audio(elevatorMusic)
  audio.loop = true
  // useEffect(() => {
  //   audio.play()
  // }, [])
  // setTimeout(() => {
  //   handleMusic()
  // }, [100])
  // useEffect(() => {
  //   play ? audio.play() : audio.pause()
  // }, [play])
  // setTimeout(() => {
  //   handleMusic()
  // }, 100)
  const handlePlayers = (e) => {
    e.preventDefault()
    setPlayersValidated(true)
  }
  function handleMusic() {
    play ? audio.pause() : audio.play()
    setPlay(!play)
  }
  return (
    <div className="w-screen h-screen flex flex-col items-center">
      {!startGame && (
        <>
         <p className="text-center mt-20 text-3xl">Bienvenue au jeux du morpion</p>
         {!playersValidated && <p className="text-center mt-12 text-2xl mb-12">Entrez les noms des deux jours</p>}
   
         {!playersValidated &&
          <form className='flex-col items-center' onSubmit={handlePlayers}>
            <div className="mb-6 flex justify-between items-center" style={{width: '17rem'}}>
              <label>Player 1:</label>
              <input 
                type="text"
                placeholder="Entrez un nom"
                className="border rounded border-gray-300 px-2 py-1 !outline-none" 
                onChange={(e) => setPlayer1(e.target.value)} />
            </div>
            <div className="mb-6 flex justify-between items-center" style={{width: '17rem'}}>
              <label>Player 2:</label>
              <input 
                type="text" 
                placeholder="Entrez un nom"
                className="border rounded border-gray-300 px-2 py-1 !outline-none"
                onChange={(e) => setPlayer2(e.target.value)}/>
            </div>
         </form>
         }
         {playersValidated ? (
            <button 
              className='bg-blue-400 rounded text-white py-1.5 px-6 shadow-lg mt-20'
              onClick={() => {handleMusic(); setStartGame(true)}}>PLAY</button>
            ) : (
              <button 
                className="bg-black rounded text-white py-1.5 px-3"
                onClick={handlePlayers}>VALIDER</button>
            )
          }
   
         
         </>
      )}
      {startGame && (
        <>
          <p>Le morpion de la mort</p>
          <button className="mb-10 bg-red-40" onClick={handleMusic}>
            {play ? <IoVolumeHigh /> : <IoVolumeMute />}
          </button>
          <Grid />
          <div className="flex w-60 justify-center">
            <div className="flex-col">
              <p className="mr-12 capitalize text-lg">{player1}: <b>X</b></p>
              <p>0 point</p>
            </div>
            <div>
              <p className="mr-12 capitalize text-lg">{player2}: <b>O</b></p>
              <p>0 point</p>
            </div>
          </div>
        </>
      )}
      
    </div>
  );
}

export default App;
