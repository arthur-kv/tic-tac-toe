import { GAME_STATE } from '../../constants'

export type GameProps = {
  welcomeScreen: React.ComponentType<{ onGameStart: () => void }>
  gameScreen: React.ComponentType<{
    gameId: string
    onGameResult: (res: string) => void
  }>
  endGameScreen: React.ComponentType<{
    result: string
    onGameStart: () => void
  }>
}

type GameStateKeys = keyof typeof GAME_STATE
export type GameState = (typeof GAME_STATE)[GameStateKeys]
