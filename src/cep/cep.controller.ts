import { Controller, Get, Param } from '@nestjs/common';
import { CepService } from './cep.service';

@Controller('cep')
export class CepController {
  constructor(private readonly CepService: CepService) {}

  @Get(':cep')
  async getCep(@Param('cep') cep: string) {
    return this.CepService.getCep(cep);
  }
}
