import {
  IsNotEmpty,
  MinLength,
} from 'class-validator';

export class CreateNoticiaDto {
  @IsNotEmpty()
  @MinLength(5)
  titulo: string;

  @IsNotEmpty()
  @MinLength(5)
  descricao: string;
}

export class updateNoticiaDto {
  id: number;

  @IsNotEmpty()
  @MinLength(5)
  titulo: string;

  @IsNotEmpty()
  @MinLength(5)
  descricao: string;
}
