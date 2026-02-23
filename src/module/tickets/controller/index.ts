import {
  Body,
  ConflictException,
  Controller,
  Get,
  Logger,
  Post,
} from '@nestjs/common';
import { CreateTicketDto } from '../dto/createTicketDto';
import { CreateTicketUseCase } from '../useCase/createTicketUseCase';
import { GetAllTicketUseCase } from '../useCase/getAllTicketUseCase';

@Controller('ticket')
export class TicketController {
  private readonly logger = new Logger(TicketController.name);

  constructor(
    private readonly createTicketUseCase: CreateTicketUseCase,
    private readonly getAllTicketUseCase: GetAllTicketUseCase,
  ) {}

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

  @Get()
  async getAll() {
    try {
      const result = await this.getAllTicketUseCase.execute();

      return result;
    } catch (erro) {
      this.logger.error(`Erro ao criar ticket  ${erro}`);
      throw new ConflictException(erro.message);
    }
  }
}
