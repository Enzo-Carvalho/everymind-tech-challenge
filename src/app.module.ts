import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProdutoModule } from './tarefa/modules/produto.module';
import { Produto } from './tarefa/entities/produto.entitiy';

@Module({
  imports: [
    /*
    TypeOrmModule.forRoot({
      type:'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_challenge',
      entities: [Produto],
      synchronize: true

    }),*/
    TypeOrmModule.forRoot({
      type:'postgres',
      url: process.env.DATABASE_URL,
      logging: false,
      dropSchema: false,
      ssl: {
        rejectUnauthorized: false, 
      },
      synchronize: true,
      autoLoadEntities: true
    }), 
    ProdutoModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
