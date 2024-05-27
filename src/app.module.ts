import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CepModule } from './cep/cep.module';
import { NoticiaController } from './noticia/noticia.controller';
import { NoticiaService } from './noticia/noticia.service';
import { NoticiaModule } from './noticia/noticia.module';

@Module({
  imports: [CepModule, NoticiaModule],
  controllers: [AppController, NoticiaController],
  providers: [AppService, NoticiaService],
})
export class AppModule {}
