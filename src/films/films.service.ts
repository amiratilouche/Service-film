import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Film } from '../film.entity'; 
import { CreateFilmDto } from './create-film.dto';

@Injectable()
export class FilmsService {
  constructor(
    @InjectRepository(Film)
    private readonly filmRepository: Repository<Film>,
  ) {}

  async findAll(): Promise<Film[]> {
    return this.filmRepository.find();
  }

  async create(film: CreateFilmDto): Promise<Film> {
    const newFilm = new Film();
    newFilm.name = film.name;
    newFilm.category = film.category;
    newFilm.releaseDate = film.releaseDate;
    return this.filmRepository.save(newFilm);
  }
}
