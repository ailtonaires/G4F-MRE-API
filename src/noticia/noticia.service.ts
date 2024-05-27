import { Injectable } from '@nestjs/common';
import api from '../config/apiNoticias';
import { CreateNoticiaDto, updateNoticiaDto } from './dto/noticia.dto';

@Injectable()
export class NoticiaService {
  async getNoticia() {
    const response = await api.get('noticias');
    console.log(response.data);
    return response.data;
  }

  async createNoticia(payload: CreateNoticiaDto) {
    const response = await api.post('noticias', {
        titulo: payload.titulo,
        descricao: payload.descricao,
    });
    console.log(response.data);
    return response.data;
  }

  async updateNoticia(payload: updateNoticiaDto) {
    const response = await api.put(`noticias/${payload.id}`, {
        titulo: payload.titulo,
        descricao: payload.descricao,
    });
    console.log(response.data);
    return response.data;
  }

  async deleteNoticia(id: string) {
    const response = await api.delete(`noticias/${id}`);
    console.log(response.data);
    return response.data;
  }
}
