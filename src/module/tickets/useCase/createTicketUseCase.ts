import { Logger } from '@nestjs/common';
import { CreateTicketDto } from '../dto/createTicketDto';
import { CreateTicketRepository } from 'src/module/tickets/repositories/createTicketRepository';

export class CreateTicketUseCase {
  private readonly logger = new Logger(CreateTicketUseCase.name);
  constructor(
    private readonly createTicketRepository: CreateTicketRepository,
  ) {}

  async execute(body: CreateTicketDto) {
    try {
      this.logger.log(`Criando ticket ${body.nameTitle}`);

      this.createTicketRepository.execute(body);

      return {
        message: 'Ticket criado com sucesso',
        data: body,
      };
    } catch (erro) {
      this.logger.error(`Erro ao criar ticket  ${erro}`);
    }
  }
}
