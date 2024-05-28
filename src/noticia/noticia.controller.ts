import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { NoticiaService } from './noticia.service';
import { CreateNoticiaDto, UpdateNoticiaDto } from './dto/noticia.dto';

@Controller('noticia')
export class NoticiaController {
  constructor(private readonly NoticiaService: NoticiaService) {}

  @Get()
  async getNoticia() {
    console.log('getNoticia');
    return await this.NoticiaService.getNoticia();
  }

  @Post()
  async createNoticia(@Body() CreateNoticiaDto: CreateNoticiaDto) {
    console.log('createNoticia');
    return await this.NoticiaService.createNoticia(CreateNoticiaDto);
  }

  @Put()
  async updateNoticia(@Body() UpdateNoticiaDto: UpdateNoticiaDto) {
    console.log('updateNoticia');
    return await this.NoticiaService.updateNoticia(UpdateNoticiaDto);
  }
  @Delete(':id')
  async deleteNoticia(@Param('id') id: string) {
    console.log('deleteNoticia');
    return await this.NoticiaService.deleteNoticia(id);
  }
}
