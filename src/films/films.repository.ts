import { Injectable } from '@nestjs/common';
import { Film } from 'src/film.entity';



@Injectable()
export class FilmsRepository {
  private readonly films: Film[] = [];

  create(film: Film) {
    this.films.push(film);
  }

  findAll(): Film[] {
    return this.films;
  }
}
