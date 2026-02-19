import { Module } from '@nestjs/common';
import { TicketController } from './module/tickets/controller';

@Module({
  controllers: [TicketController],
})
export class AppModule {}
