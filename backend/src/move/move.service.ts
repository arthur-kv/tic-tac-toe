import { Injectable } from '@nestjs/common';
import { Moves, FilledCell, MovesToCheck, CheckWinnerResp } from './types';

@Injectable()
export class MoveService {
  readonly DRAW = -1;
  readonly EMPTY = null;
  readonly X = 1;
  readonly O = 0;

  /**
   * It is a silly implementation that chooses the first available spot
   * */
  makeMove(moves: Moves, moveValue: FilledCell) {
    const updatedMoves = [...moves];

    for (let i = 0; i < updatedMoves.length; i++) {
      if (updatedMoves[i] === null) {
        updatedMoves[i] = moveValue;
        break;
      }
    }

    return updatedMoves;
  }

  /**
   * Checks if it's valid to make the next move
   * for the passed `moveValue`
   * */
  validateMove(moves: Moves, moveValue: FilledCell): void {
    let o = 0;
    let x = 0;
    let nulls = 0;

    for (let i = 0; i < moves.length; i++) {
      const v = moves[i];

      if (v === this.O) {
        o++;
      } else if (v === this.X) {
        x++;
      } else if (v === this.EMPTY) {
        nulls++;
      }
    }

    // The moves array is empty, this is the first move
    if (nulls === moves.length) {
      return;
    }

    if (x + o < moves.length) {
      if (moveValue === this.O && o > x) {
        throw new Error('This is not "O" turn');
      } else if (moveValue === this.X && x > o) {
        throw new Error('This is not "X" turn');
      }
    }
  }

  checkWinner(cells: Moves): CheckWinnerResp {
    const movesToCheck: MovesToCheck = cells.map((m) =>
      m === null ? Number.NaN : m,
    );

    const checkVerticals = (moves: MovesToCheck) => {
      if (moves[0] === moves[3] && moves[0] === moves[6]) return moves[0];
      if (moves[1] === moves[4] && moves[1] === moves[7]) return moves[1];
      if (moves[2] === moves[5] && moves[2] === moves[8]) return moves[2];

      return null;
    };

    const checkHorizontals = (moves: MovesToCheck) => {
      if (moves[0] === moves[1] && moves[0] === moves[2]) return moves[0];
      if (moves[3] === moves[4] && moves[3] === moves[5]) return moves[3];
      if (moves[6] === moves[7] && moves[6] === moves[8]) return moves[6];

      return null;
    };

    const checkDiagonals = (moves: MovesToCheck) => {
      if (moves[0] === moves[4] && moves[0] === moves[8]) return moves[0];
      if (moves[2] === moves[4] && moves[2] === moves[6]) return moves[2];

      return null;
    };

    const checkDraw = (moves: MovesToCheck) => {
      // There's no `null` value in the `moves` array
      if (
        moves.reduce<number>((res, m) => res + Number(Number.isNaN(m)), 0) === 0
      ) {
        return this.DRAW;
      }

      return null;
    };

    for (const checker of [
      checkHorizontals,
      checkVerticals,
      checkDiagonals,
      checkDraw,
    ]) {
      const res = checker(movesToCheck);

      if (res !== null) {
        return res as CheckWinnerResp;
      }
    }

    return null;
  }
}
