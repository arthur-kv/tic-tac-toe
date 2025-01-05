export type CellValue = null | 0 | 1
export type FilledCell = Exclude<CellValue, null>

export type CellProps = {
  value: CellValue
  position: number
  isDisabled?: boolean
  onClick: (position: number) => void
}
