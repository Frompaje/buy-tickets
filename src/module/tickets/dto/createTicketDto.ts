import { IsString } from 'class-validator';

export class CreateTicketDto {
  @IsString()
  nameTitle: string;
}
