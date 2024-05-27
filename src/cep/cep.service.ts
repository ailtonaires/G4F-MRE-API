import { Injectable } from '@nestjs/common';
import api from '../config/apiCep';

@Injectable()
export class CepService {
  async getCep(cep: string) {
    const response = await api.get(`${cep}/json`);
    console.log(response.data);
    return response.data;
  }
}
