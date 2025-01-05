import {
  Controller,
  Post,
  Body,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { MoveService } from './move.service';
import { MoveDto } from './dto';

@Controller('move')
export class MoveController {
  constructor(private moveService: MoveService) {}
  /**
   * Returns the `moves` array with the opponent's move and the game status
   * */
  @Post()
  move(@Body() { moves, nextMoveValue }: MoveDto) {
    try {
      this.moveService.validateMove(moves, nextMoveValue);
    } catch (err) {
      throw new HttpException(err.message, HttpStatus.BAD_REQUEST);
    }

    let winner = this.moveService.checkWinner(moves);
    let updatedMoves = moves;

    if (winner == null) {
      updatedMoves = this.moveService.makeMove(moves, nextMoveValue);
      winner = this.moveService.checkWinner(updatedMoves);
    }

    let gameStatus = null;

    if (winner === nextMoveValue) {
      gameStatus = 'Computer wins';
    } else if (winner === Math.abs(nextMoveValue - 1)) {
      gameStatus = 'Player wins';
    } else if (winner === this.moveService.DRAW) {
      gameStatus = 'Draw';
    }

    return {
      moves: updatedMoves,
      gameStatus,
    };
  }
}
