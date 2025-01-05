import { Cell } from './Cell'
import { useCellValues } from './useCellValues'
import { useOpponentMove } from './useOpponentMove'
import { PLAYER_MOVE, OPPONENT_MOVE } from '../../constants'
import { CellValues, GameFieldProps } from './types'
import './GameField.css'

export const GameField = ({ gameId, onGameResult }: GameFieldProps) => {
  const [cellValues, onCellValuesChange] = useCellValues()
  const [getMoves, isPending, error] = useOpponentMove(OPPONENT_MOVE)

  const getOpponentMove = async (values: CellValues) => {
    const { moves, gameStatus } = await getMoves(values)
    if (moves.length === 0) {
      return
    }

    if (gameStatus != null) {
      onGameResult(gameStatus)
    } else {
      onCellValuesChange(moves)
    }
  }

  const onCellClick = (cellPosition: number) => {
    cellValues[cellPosition] = PLAYER_MOVE
    const newValues = [...cellValues]
    onCellValuesChange(newValues)
    getOpponentMove(newValues)
  }

  return error != null ? (
    <p>An error occured. Please restart the page</p>
  ) : (
    <div className="game-field">
      {cellValues.map((value, index) => (
        <Cell
          key={`${index}-${gameId}`}
          position={index}
          value={value}
          isDisabled={isPending}
          onClick={onCellClick}
        />
      ))}
    </div>
  )
}
