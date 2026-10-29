import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import databaseConfig from './config/database.config.js';
import { CatalogoModule } from './catalogo/catalogo.module.js';
import { PessoasModule } from './pessoas/pessoas.module.js';
import { AgendaModule } from './agenda/agenda.module.js';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [databaseConfig],
    }),

    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        ...configService.get('database'),
        autoLoadEntities: true,
      }),
    }),
    CatalogoModule,
    PessoasModule,
    AgendaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
