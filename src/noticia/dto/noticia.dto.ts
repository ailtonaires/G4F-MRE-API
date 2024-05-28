import {
  IsNotEmpty,
  MinLength,
} from 'class-validator';

export class CreateNoticiaDto {
  @IsNotEmpty({ message: 'O título não pode estar vazio' })
  @MinLength(5, { message: 'O título deve ter pelo menos 5 caracteres' })
  titulo: string;

  @IsNotEmpty({ message: 'A descrição não pode estar vazia' })
  @MinLength(5, { message: 'A descrição deve ter pelo menos 5 caracteres' })
  descricao: string;
}

export class UpdateNoticiaDto {
  id: string;

  @IsNotEmpty({ message: 'O título não pode estar vazio' })
  @MinLength(5, { message: 'O título deve ter pelo menos 5 caracteres' })
  titulo: string;

  @IsNotEmpty({ message: 'A descrição não pode estar vazia' })
  @MinLength(5, { message: 'A descrição deve ter pelo menos 5 caracteres' })
  descricao: string;
}
