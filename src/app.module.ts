import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { typeOrmConfig } from './typeorm.config';
import { Connection } from 'typeorm';
import { FilmsService } from './films/films.service';
import { MoviesControllerController } from './movies-controller/movies-controller.controller';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig)],
  controllers: [AppController, MoviesControllerController],
  providers: [AppService, FilmsService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
