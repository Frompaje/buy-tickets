import { Logger } from '@nestjs/common';
import { CreateTicketDto } from '../dto/createTicketDto';

export class CreateTicketUseCase {
  private readonly logger = new Logger(CreateTicketUseCase.name);
  constructor(
    private readonly createTicketRepository: CreateTicketRepository,
  ) {}

  async execute(body: CreateTicketDto) {
    try {
      this.logger.log(`Criando ticket ${body.nameTitle}`);
      return {
        message: 'Ticket criado com sucesso',
        data: body,
      };
    } catch (erro) {
      this.logger.error(`Erro ao criar ticket  ${erro}`);
    }
  }
}
