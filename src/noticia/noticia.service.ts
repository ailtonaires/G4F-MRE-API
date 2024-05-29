import { BadRequestException, Injectable } from '@nestjs/common';
import api from '../config/apiNoticias';
import { CreateNoticiaDto, UpdateNoticiaDto } from './dto/noticia.dto';

@Injectable()
export class NoticiaService {
  async getNoticia() {
    try {
      console.log('getNoticia');
      const response = await api.get('noticias');
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      throw new BadRequestException('Erro ao buscar notícias.');
    }
  }

  async createNoticia(payload: CreateNoticiaDto) {
    try {
      console.log('createNoticia');
      const response = await api.post('noticias', {
        titulo: payload.titulo,
        descricao: payload.descricao,
      });
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      throw new BadRequestException('Erro ao criar notícia.');
    }
  }

  async updateNoticia(payload: UpdateNoticiaDto) {
    try {
      console.log('updateNoticia');
      const response = await api.put(`noticias/${payload.id}`, {
        titulo: payload.titulo,
        descricao: payload.descricao,
      });
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      throw new BadRequestException('Erro ao atualizar notícia.');
    }
  }

  async deleteNoticia(id: string) {
    try {
      console.log('deleteNoticia');
      const response = await api.delete(`noticias/${id}`);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      throw new BadRequestException('Erro ao deletar notícia.');
    }
  }
}
