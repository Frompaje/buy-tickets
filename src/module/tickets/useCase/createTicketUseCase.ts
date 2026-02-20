import { Logger } from '@nestjs/common';
import { CreateTicketDto } from '../dto/createTicketDto';

export class CreateTicketUseCase {
  private readonly logger = new Logger(CreateTicketUseCase.name);
  constructor(
    private readonly createTicketRepository: CreateTicketRepository,
  ) {}

  async execute(body: CreateTicketDto) {
    try {
    } catch (erro) {
      this;
    }
  }
}
