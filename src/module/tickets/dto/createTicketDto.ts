import { IsString, IsInt } from 'class-validator';

export class CreateTicketDto {
  @IsString()
  nameTitle: string;
}
