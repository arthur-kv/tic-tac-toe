import {
  ArrayMinSize,
  ArrayMaxSize,
  IsIn,
  IsInt,
  Min,
  Max,
} from 'class-validator';
import { FilledCell, Moves } from '../types';

const CELLS_QTY = 9;

export class MoveDto {
  @IsInt()
  @Min(0)
  @Max(1)
  nextMoveValue: FilledCell;

  @ArrayMinSize(CELLS_QTY)
  @ArrayMaxSize(CELLS_QTY)
  @IsIn([null, 0, 1], { each: true })
  moves: Moves;
}
