import { Test, TestingModule } from '@nestjs/testing';
import { NoticiaController } from './noticia.controller';
import { NoticiaService } from './noticia.service';
import { CreateNoticiaDto, updateNoticiaDto } from './dto/noticia.dto';

describe('NoticiaController', () => {
  let controller: NoticiaController;
  let service: NoticiaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NoticiaController],
      providers: [NoticiaService],
    }).compile();

    controller = module.get<NoticiaController>(NoticiaController);
    service = module.get<NoticiaService>(NoticiaService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create a noticia', async () => {
    const noticia: CreateNoticiaDto = {
      titulo: 'titulo',
      descricao: 'descricao',
    };
    jest.spyOn(service, 'createNoticia').mockImplementation(async () => noticia);
    expect(await controller.createNoticia(noticia)).toBe(noticia);
  });

  it('should update a noticia', async () => {
    const noticia: updateNoticiaDto = {
      id: 1,
      titulo: 'titulo',
      descricao: 'descricao',
    };
    jest.spyOn(service, 'updateNoticia').mockImplementation(async () => noticia);
    expect(await controller.updateNoticia(noticia)).toBe(noticia);
  });

  it('should delete a noticia', async () => {
    const id = '1';
    jest.spyOn(service, 'deleteNoticia').mockImplementation(async () => id);
    expect(await controller.deleteNoticia(id)).toBe(id);
  });

  it('should get a noticia', async () => {
    const noticia = {
      titulo: 'titulo',
      descricao: 'descricao',
    };
    jest.spyOn(service, 'getNoticia').mockImplementation(async () => noticia);
    expect(await controller.getNoticia()).toBe(noticia);
  });
});