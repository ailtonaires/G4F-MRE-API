import { Controller, Get, Param } from '@nestjs/common';
import { CepService } from './cep.service';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';


@ApiTags('cep') 
@Controller('cep')
export class CepController {
  constructor(private readonly cepService: CepService) {}

  @Get(':cep')
  @ApiOperation({ summary: 'Obter informações de um CEP' })
  @ApiResponse({ status: 200, description: 'Informações do CEP retornadas com sucesso.' }) 
  @ApiResponse({ status: 404, description: 'CEP não encontrado.' }) 
  @ApiParam({ name: 'cep', required: true, description: 'O CEP a ser consultado' }) 
  async getCep(@Param('cep') cep: string) {
    return this.cepService.getCep(cep);
  }
}
