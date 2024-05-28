import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CepModule } from './cep/cep.module';
import { NoticiaController } from './noticia/noticia.controller';
import { NoticiaService } from './noticia/noticia.service';
import { NoticiaModule } from './noticia/noticia.module';
import { AllExceptionsFilter } from './interceptor/all-exceptions.filter';

@Module({
  imports: [CepModule, NoticiaModule],
  controllers: [AppController, NoticiaController],
  providers: [
    AppService,
    NoticiaService,
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    },
  ],
})
export class AppModule {}
