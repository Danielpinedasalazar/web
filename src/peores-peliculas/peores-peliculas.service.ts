import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PeoresPeliculas } from './peores-peliculas.entity';
import { Director } from '../directores/director.entity';

@Injectable()
export class PeoresPeliculasService {
  constructor(
    @InjectRepository(PeoresPeliculas)
    private readonly peoresPeliculasRepository: Repository<PeoresPeliculas>,
  ) {}

  create(peoresPelicula: Partial<PeoresPeliculas>): Promise<PeoresPeliculas> {
    return this.peoresPeliculasRepository.save(peoresPelicula);
  }

  findAll(): Promise<PeoresPeliculas[]> {
    return this.peoresPeliculasRepository.find();
  }

  findOne(id: number): Promise<PeoresPeliculas | null> {
    return this.peoresPeliculasRepository.findOneBy({ id });
  }

  async update(id: number, updateData: Partial<PeoresPeliculas>): Promise<PeoresPeliculas | null> {
    await this.peoresPeliculasRepository.update(id, updateData);
    return this.peoresPeliculasRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.peoresPeliculasRepository.delete(id);
  }

  findByDirector(directorId: number): Promise<PeoresPeliculas[]> {
    return this.peoresPeliculasRepository.find({ where: { director: { id: directorId } } });
  }
}
