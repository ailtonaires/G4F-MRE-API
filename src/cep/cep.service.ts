import { Injectable, BadRequestException } from '@nestjs/common';
import api from '../config/apiCep';

@Injectable()
export class CepService {
  async getCep(cep: string) {
    const response = await api.get(`${cep}/json`);
    console.log(response.data);
    if (response.data.erro) {
      throw new BadRequestException('CEP inválido. Por favor, digite um CEP válido.');
    }
    return response.data;
  }
}
