import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MoveController } from './move/move.controller';
import { MoveService } from './move/move.service';

@Module({
  imports: [],
  controllers: [AppController, MoveController],
  providers: [AppService, MoveService],
})
export class AppModule {}
