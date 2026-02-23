import { Module } from '@nestjs/common';
import { TicketModule } from './module/tickets/ticket.module';

@Module({
  imports: [TicketModule],
})
export class AppModule {}
