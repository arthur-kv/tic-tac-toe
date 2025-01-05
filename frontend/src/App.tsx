import { Welcome } from './components/Welcome'
import { GameField } from './components/GameField'
import { GameResults } from './components/GameResults'
import { Game } from './components/Game'

import './App.css'

function App() {
  return (
    <Game
      welcomeScreen={Welcome}
      gameScreen={GameField}
      endGameScreen={GameResults}
    />
  )
}

export default App
