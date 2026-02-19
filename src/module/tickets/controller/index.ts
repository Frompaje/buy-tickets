import {
  Body,
  ConflictException,
  Controller,
  Logger,
  Post,
} from '@nestjs/common';
import { CreateTicketDto } from '../dto/createTicketDto';
import { CreateTicketUseCase } from '../useCase/createTicketUseCase';

@Controller('ticket')
export class TicketController {
  private readonly logger = new Logger(TicketController.name);

  constructor(private readonly createTicketUseCase: CreateTicketUseCase) {}

  @Post()
  async create(@Body() body: CreateTicketDto) {
    this.logger.log(`Nome do ticket ; ${body.nameTitle}`);
    try {
      const result = await this.createTicketUseCase.execute(body);

      this.logger.log(`Ticket Criado com sucesso!`);
      return result;
    } catch (erro) {
      this.logger.error(`Erro ao criar ticket  ${erro}`);
      throw new ConflictException(erro.message);
    }
  }
}
