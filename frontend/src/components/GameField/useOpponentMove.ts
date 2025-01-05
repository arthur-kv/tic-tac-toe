import { useState } from 'react'
import { UseOponentMove, CellValues, OpponentMoveError } from './types'
import { makeMove } from './api'

export const useOpponentMove: UseOponentMove = (opponentMove) => {
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState<OpponentMoveError>(null)

  const getMoves = async (values: CellValues) => {
    setIsPending(true)
    setError(null)

    try {
      return makeMove(values, opponentMove)
    } catch (err) {
      setError(err as Error)
      return { moves: [], gameStatus: null }
    } finally {
      setIsPending(false)
    }
  }

  return [getMoves, isPending, error]
}
