import { Controller, Get, Param } from '@nestjs/common';
import { CepService } from './cep.service';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';


@ApiTags('cep') // Tag para agrupar os endpoints relacionados a 'cep'
@Controller('cep')
export class CepController {
  constructor(private readonly cepService: CepService) {}

  @Get(':cep')
  @ApiOperation({ summary: 'Obter informações de um CEP' }) // Descrição da operação
  @ApiResponse({ status: 200, description: 'Informações do CEP retornadas com sucesso.' }) // Resposta esperada
  @ApiResponse({ status: 404, description: 'CEP não encontrado.' }) // Possível resposta de erro
  @ApiParam({ name: 'cep', required: true, description: 'O CEP a ser consultado' }) // Parâmetro da URL
  async getCep(@Param('cep') cep: string) {
    return this.cepService.getCep(cep);
  }
}
