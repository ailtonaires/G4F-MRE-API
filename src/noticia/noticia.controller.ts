import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { NoticiaService } from './noticia.service';
import { CreateNoticiaDto, UpdateNoticiaDto } from './dto/noticia.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';

@ApiTags('noticia') // Tag para agrupar os endpoints relacionados a 'noticia'
@Controller('noticia')
export class NoticiaController {
  constructor(private readonly noticiaService: NoticiaService) {}

  @Get()
  @ApiOperation({ summary: 'Obter todas as notícias' }) // Descrição da operação
  @ApiResponse({ status: 200, description: 'Lista de notícias retornada com sucesso.' }) // Resposta esperada
  async getNoticia() {
    console.log('getNoticia');
    return await this.noticiaService.getNoticia();
  }

  @Post()
  @ApiOperation({ summary: 'Criar uma nova notícia' })
  @ApiResponse({ status: 201, description: 'Notícia criada com sucesso.' })
  @ApiBody({ type: CreateNoticiaDto }) // Definição do corpo da requisição
  async createNoticia(@Body() createNoticiaDto: CreateNoticiaDto) {
    console.log('createNoticia');
    return await this.noticiaService.createNoticia(createNoticiaDto);
  }

  @Put()
  @ApiOperation({ summary: 'Atualizar uma notícia existente' })
  @ApiResponse({ status: 200, description: 'Notícia atualizada com sucesso.' })
  @ApiBody({ type: UpdateNoticiaDto })
  async updateNoticia(@Body() updateNoticiaDto: UpdateNoticiaDto) {
    console.log('updateNoticia');
    return await this.noticiaService.updateNoticia(updateNoticiaDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Deletar uma notícia pelo ID' })
  @ApiParam({ name: 'id', required: true, description: 'ID da notícia a ser deletada' })
  @ApiResponse({ status: 200, description: 'Notícia deletada com sucesso.' })
  async deleteNoticia(@Param('id') id: string) {
    console.log('deleteNoticia');
    return await this.noticiaService.deleteNoticia(id);
  }
}
