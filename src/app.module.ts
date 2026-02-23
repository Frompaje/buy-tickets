import { Module } from '@nestjs/common';
import { TicketModule } from './module/tickets/ticket.module';
import { DrizzleModule } from 'drizzle/drizzle.module';

@Module({
  imports: [TicketModule, DrizzleModule],
})
export class AppModule {}
