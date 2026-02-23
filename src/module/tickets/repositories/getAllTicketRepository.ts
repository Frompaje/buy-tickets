import { Inject, Injectable } from '@nestjs/common';
import { drizzle } from 'drizzle-orm/node-postgres';
import { tickets } from 'src/db/ticket';

@Injectable()
export class GetAllTicketRepository {
  constructor(
    @Inject('DRIZZLE') private readonly db: ReturnType<typeof drizzle>,
  ) {}

  async execute() {
    await this.db.select().from(tickets);
  }
}
