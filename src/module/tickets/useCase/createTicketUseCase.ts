import { Injectable, Logger } from '@nestjs/common';
import { CreateTicketDto } from '../dto/createTicketDto';
import { CreateTicketRepository } from 'src/module/tickets/repositories/createTicketRepository';

@Injectable()
export class CreateTicketUseCase {
  private readonly logger = new Logger(CreateTicketUseCase.name);
  constructor(
    private readonly createTicketRepository: CreateTicketRepository,
  ) {}

  async execute(body: CreateTicketDto) {
    try {
      this.logger.log(`Criando ticket ${body.nameTitle}`);

      const result = await this.createTicketRepository.execute(body);

      return {
        message: 'Ticket criado com sucesso',
        data: result,
      };
    } catch (erro) {
      this.logger.error(`Erro ao criar ticket  ${erro}`);
    }
  }
}
