import { Module } from '@nestjs/common';
import { TicketController } from './controller';
import { CreateTicketUseCase } from './useCase/createTicketUseCase';
import { CreateTicketRepository } from './repositories/createTicketRepository';

@Module({
  controllers: [TicketController],
  providers: [CreateTicketUseCase, CreateTicketRepository],
})
export class TicketModule {}
