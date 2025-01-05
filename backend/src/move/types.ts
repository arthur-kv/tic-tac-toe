/**
 * These types can be shared with the frontend application using a separate
 * pNPM workspace
 * */

export type CellValue = null | 0 | 1;
export type FilledCell = Exclude<CellValue, null>;
export type Moves = CellValue[];
export type MovesToCheck = (typeof Number.NaN | Exclude<CellValue, null>)[];
export type CheckWinnerResp = CellValue | -1;
