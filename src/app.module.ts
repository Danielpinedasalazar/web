import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PeoresPeliculasModule } from './peores-peliculas/peores-peliculas.module';
import { DirectoresModule } from './directores/directores.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Dani1908',
      database: 'peliculas',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    PeoresPeliculasModule,
    DirectoresModule,
  ],
})
export class AppModule {}
