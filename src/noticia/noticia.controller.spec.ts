import { defineFeature, loadFeature } from 'jest-cucumber';
import { Test, TestingModule } from '@nestjs/testing';
import { NoticiaController } from './noticia.controller';
import { NoticiaService } from './noticia.service';
import { CreateNoticiaDto, UpdateNoticiaDto } from './dto/noticia.dto';

const feature = loadFeature('./tests/noticia.feature');

defineFeature(feature, test => {
  let noticiaController: NoticiaController;
  let noticiaService: NoticiaService;
  let moduleRef: TestingModule;

  beforeAll(async () => {
    moduleRef = await Test.createTestingModule({
      controllers: [NoticiaController],
      providers: [NoticiaService],
    }).compile();

    noticiaService = moduleRef.get<NoticiaService>(NoticiaService);
    noticiaController = moduleRef.get<NoticiaController>(NoticiaController);
  });

  test('Obter lista de notícias', ({ given, when, then }) => {
    let noticias;

    given('que existem notícias cadastradas', () => {
      noticias = {
        "noticias": [
          {
            "id": "a78b",
            "titulo": "NOTICIA 1",
            "descricao": "DESCRICAO 1"
          },
          {
            "id": "a014",
            "titulo": "NOTICIA 2",
            "descricao": "DESCRICAO 2"
          },
          {
            "id": "5b24",
            "titulo": "NOTICIA 3",
            "descricao": "DESCRICAO 3"
          }
        ]
      };
      jest.spyOn(noticiaService, 'getNoticia').mockImplementation(async () => noticias);
    });

    when('eu solicitar a lista de notícias', async () => {
      noticias = await noticiaController.getNoticia();
    });

    then('eu devo receber um array de notícias', () => {
      console.log("TESTE 1", noticias);
      expect(noticias).toEqual(noticias);
    });
  });

  test('Criar uma nova notícia', ({ given, when, then }) => {
    let newNoticia: CreateNoticiaDto;
    let createdNoticia;
    let returnedNoticia: UpdateNoticiaDto;

    given('que eu tenho uma nova notícia para criar', () => {
      newNoticia = {
        titulo: 'NOTICIA 1',
        descricao: 'DESCRICAO 1',
      };

      returnedNoticia = {
        id: 'a78b',
        titulo: 'NOTICIA 1',
        descricao: 'DESCRICAO 1',
      };

      jest.spyOn(noticiaService, 'createNoticia').mockImplementation(async () => returnedNoticia);
    });

    when('eu enviar a nova notícia', async () => {
      createdNoticia = await noticiaController.createNoticia(newNoticia);
    });

    then('a notícia deve ser criada e retornada', () => {
      expect(createdNoticia).toEqual(returnedNoticia);
    });
  });

  test('Atualizar uma notícia existente', ({ given, when, then }) => {
    let updatedNoticia: UpdateNoticiaDto;
    let result;

    given('que existe uma notícia cadastrada', () => {
      updatedNoticia = {
        id: 'a78b',
        titulo: 'NOTICIA 1',
        descricao: 'DESCRICAO 1'
      };
      jest.spyOn(noticiaService, 'updateNoticia').mockImplementation(async () => updatedNoticia);
    });

    when('eu atualizar a notícia', async () => {
      result = await noticiaController.updateNoticia(updatedNoticia);
    });

    then('a notícia deve ser atualizada e retornada', () => {
      expect(result).toEqual(updatedNoticia);
    });
  });

  test('Deletar uma notícia existente', ({ given, when, then }) => {
    let noticiaId: string;
    let result;

    given('que existe uma notícia cadastrada', () => {
      noticiaId = 'a78b';
      jest.spyOn(noticiaService, 'deleteNoticia').mockImplementation(async () => true);
    });

    when('eu deletar a notícia', async () => {
      result = await noticiaController.deleteNoticia(noticiaId);
    });

    then('a notícia deve ser deletada com sucesso', () => {
      expect(result).toBe(true);
    });
  });
});
