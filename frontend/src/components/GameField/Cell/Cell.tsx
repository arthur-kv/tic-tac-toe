import { CellProps } from './types'
import { MOVE_CHARS } from '../../../constants'
import './Cell.css'

export const Cell = ({ value, position, isDisabled, onClick }: CellProps) => {
  return (
    <button
      className="button cell"
      type="button"
      onClick={() => {
        onClick(position)
      }}
      disabled={isDisabled || value != null}
    >
      {value && MOVE_CHARS[value]}
    </button>
  )
}
