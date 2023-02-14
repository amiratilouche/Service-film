import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Film } from './film.entity';
import { FilmsService } from './films/films.service';
import { FilmsController } from './movies-controller/movies-controller.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Film])],
  controllers: [FilmsController],
  providers: [FilmsService],
})
export class AppModule {}
