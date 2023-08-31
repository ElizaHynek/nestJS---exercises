/* eslint-disable prettier/prettier */
import { Transform } from 'class-transformer';
import {
  IsNotEmpty,
  IsString,
  Length,
  IsUUID,
} from 'class-validator';

export class CreateOrderDTO {
  @IsNotEmpty()
  @IsString()
  @Length(10, 20)
  client: string;

  @IsNotEmpty()
  @IsString()
  @IsUUID()
  clientId: string;

  @IsNotEmpty()
  @IsString()
  @IsUUID()
  productId: string;

  @Transform(({ value }) => (Array.isArray(value) ? value.join(', ') : ''))
  address: string;
}