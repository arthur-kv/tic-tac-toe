export const GAME_STATE = {
  NEW: 'new',
  PLAYING: 'playing',
  END: 'end',
} as const

export const FIELD_SIZE = 9
export const PLAYER_MOVE = 1
export const OPPONENT_MOVE = 0
export const MOVE_CHARS = ['O', 'X']

export const API_URL = 'http://localhost:3000'
