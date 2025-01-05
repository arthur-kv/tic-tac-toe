import { useState } from 'react'
import { GameProps, GameState } from './types'

import { GAME_STATE } from '../../constants'

export const Game = ({
  welcomeScreen: WelcomeScreen,
  gameScreen: GameScreen,
  endGameScreen: EndGameScreen,
}: GameProps) => {
  const [gameState, setGameState] = useState<GameState>(GAME_STATE.NEW)
  const [gameResult, setGameResult] = useState<null | string>(null)

  return (
    <div>
      {gameState === GAME_STATE.NEW ? (
        <WelcomeScreen
          onGameStart={() => {
            setGameState(GAME_STATE.PLAYING)
          }}
        />
      ) : null}
      {gameState === GAME_STATE.PLAYING ? (
        <GameScreen
          gameId={Math.random().toString()}
          onGameResult={(res: string) => {
            setGameResult(res)
            setGameState(GAME_STATE.END)
          }}
        />
      ) : null}
      {gameState === GAME_STATE.END ? (
        <EndGameScreen
          result={gameResult as string}
          onGameStart={() => {
            setGameResult(null)
            setGameState(GAME_STATE.PLAYING)
          }}
        />
      ) : null}
    </div>
  )
}
