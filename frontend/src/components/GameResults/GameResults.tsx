import { GameResultsProps } from './types'

export const GameResults = ({ result, onGameStart }: GameResultsProps) => {
  return (
    <div>
      <h3>{result}!</h3>
      <p>Click the button below to start again</p>
      <button type="button" className="button" onClick={() => onGameStart()}>
        Start again!
      </button>
    </div>
  )
}
