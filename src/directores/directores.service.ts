import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Director } from './director.entity';

@Injectable()
export class DirectoresService {
  constructor(
    @InjectRepository(Director)
    private readonly directorRepository: Repository<Director>,
  ) {}

  create(director: Partial<Director>): Promise<Director> {
    return this.directorRepository.save(director);
  }

  findAll(): Promise<Director[]> {
    return this.directorRepository.find();
  }

  findOne(id: number): Promise<Director | null> {
    return this.directorRepository.findOneBy({ id });
  }

  async update(id: number, updateData: Partial<Director>): Promise<Director | null> {
    await this.directorRepository.update(id, updateData);
    return this.directorRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.directorRepository.delete(id);
  }
}
