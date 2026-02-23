import { Module } from '@nestjs/common';
import { TicketController } from './controller';
import { CreateTicketUseCase } from './useCase/createTicketUseCase';

@Module({
  controllers: [TicketController],
  providers: [CreateTicketUseCase],
})
export class TicketModule {}
