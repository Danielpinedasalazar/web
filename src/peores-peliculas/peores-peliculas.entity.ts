import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Director } from 'src/directores/director.entity';

@Entity()
export class PeoresPeliculas {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  titulo: string;

  @Column()
  anoDeLanzamiento: number;

  @Column()
  genero: string;

  @Column()
  descripcion: string;

  @ManyToOne(() => Director, director => director.peoresPeliculas)
  director: Director;
}
