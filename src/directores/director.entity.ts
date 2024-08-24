import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { PeoresPeliculas } from '../peores-peliculas/peores-peliculas.entity';

@Entity()
export class Director {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  fechaDeNacimiento: string;

  @Column()
  nacionalidad: string;

  @Column()
  biografia: string;

  @OneToMany(() => PeoresPeliculas, peoresPeliculas => peoresPeliculas.director)
  peoresPeliculas: PeoresPeliculas[];
}
