import { Module } from '@nestjs/common';
import { TicketController } from './controller';
import { CreateTicketUseCase } from './useCase/createTicketUseCase';
import { GetAllTicketUseCase } from './useCase/getAllTicketUseCase';
import { GetAllTicketRepository } from './repositories/getAllTicketRepository';
import { CreateTicketRepository } from './repositories/createTicketRepository';

@Module({
  controllers: [TicketController],
  providers: [
    CreateTicketUseCase,
    CreateTicketRepository,
    GetAllTicketUseCase,
    GetAllTicketRepository,
  ],
})
export class TicketModule {}
