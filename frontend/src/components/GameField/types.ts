import { CellValue, FilledCell } from './Cell'

export type CellValues = CellValue[]

export type UseCellValues = () => [CellValues, (values: CellValues) => void]

export type OpponentMoveError = null | Error

export type MoveResp = { moves: CellValues; gameStatus: null | string }

export type UseOponentMove = (
  opponentMove: FilledCell
) => [
  getMoves: (values: CellValues) => Promise<MoveResp>,
  isPending: boolean,
  error: OpponentMoveError,
]

export type GameFieldProps = {
  gameId: string
  onGameResult: (res: string) => void
}
