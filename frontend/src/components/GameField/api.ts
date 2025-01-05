import { FilledCell } from './Cell'
import { CellValues, MoveResp } from './types'

import { API_URL } from '../../constants'
const API_ENDPOINT = API_URL + '/move'

export const makeMove = async (
  values: CellValues,
  opponentMove: FilledCell
): Promise<MoveResp> => {
  const resp = await fetch(API_ENDPOINT, {
    method: 'POST',
    body: JSON.stringify({ moves: values, nextMoveValue: opponentMove }),
    headers: new Headers({ 'content-type': 'application/json' }),
  })

  const respJson = await resp.json()

  if (!resp.ok) {
    throw new Error(respJson)
  }

  return respJson
}
