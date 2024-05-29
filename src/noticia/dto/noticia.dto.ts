import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, MinLength } from 'class-validator';

export class CreateNoticiaDto {
  @ApiProperty({ example: 'Título da Notícia' })
  @IsNotEmpty({ message: 'O título não pode estar vazio' })
  @MinLength(5, { message: 'O título deve ter pelo menos 5 caracteres' })
  titulo: string;

  @ApiProperty({ example: 'Esta é a descrição da notícia.' })
  @IsNotEmpty({ message: 'A descrição não pode estar vazia' })
  @MinLength(5, { message: 'A descrição deve ter pelo menos 5 caracteres' })
  descricao: string;
}

export class UpdateNoticiaDto {
  @ApiProperty({ example: 'ID da Notícia' })
  id: string;

  @ApiProperty({ example: 'Título Atualizado da Notícia' })
  @IsNotEmpty({ message: 'O título não pode estar vazio' })
  @MinLength(5, { message: 'O título deve ter pelo menos 5 caracteres' })
  titulo: string;

  @ApiProperty({ example: 'Esta é a descrição atualizada da notícia.' })
  @IsNotEmpty({ message: 'A descrição não pode estar vazia' })
  @MinLength(5, { message: 'A descrição deve ter pelo menos 5 caracteres' })
  descricao: string;
}
