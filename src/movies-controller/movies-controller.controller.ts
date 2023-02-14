import { Controller, Get, Post, Body } from '@nestjs/common';
import { Film } from '../film.entity';
import { CreateFilmDto } from 'src/films/create-film.dto';
import { FilmsService } from 'src/films/films.service';


@Controller('films')
export class FilmsController {
  constructor(private readonly filmsService: FilmsService) {}

  @Get()
  async findAll(): Promise<Film[]> {
    return this.filmsService.findAll();
  }

  @Post()
  async create(@Body() createFilmDto: CreateFilmDto): Promise<Film> {
    return this.filmsService.create(createFilmDto);
  }
}
