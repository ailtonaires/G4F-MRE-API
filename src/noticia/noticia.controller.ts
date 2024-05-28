import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { NoticiaService } from './noticia.service';
import { CreateNoticiaDto, updateNoticiaDto } from './dto/noticia.dto';

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
  async updateNoticia(@Body() updateNoticiaDto: updateNoticiaDto) {
    console.log('updateNoticia');
    return await this.NoticiaService.updateNoticia(updateNoticiaDto);
  }
  @Delete(':id')
  async deleteNoticia(@Param('id') id: string) {
    console.log('deleteNoticia');
    return await this.NoticiaService.deleteNoticia(id);
  }
}
