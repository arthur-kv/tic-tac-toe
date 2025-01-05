import { useState, useEffect } from 'react'
import { CellValues, UseCellValues } from './types'
import { FIELD_SIZE } from '../../constants'

export const useCellValues: UseCellValues = () => {
  const [values, setCellValues] = useState<CellValues>([])

  useEffect(() => {
    setCellValues(new Array(FIELD_SIZE).fill(null))
  }, [])

  const onCellValuesChange = (newCellValues: CellValues) => {
    setCellValues(newCellValues)
  }

  return [values, onCellValuesChange]
}
