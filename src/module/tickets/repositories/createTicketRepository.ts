import { Inject, Injectable } from '@nestjs/common';
import { drizzle } from 'drizzle-orm/node-postgres';
import { tickets } from 'src/db/ticket';
import { CreateTicketDto } from '../dto/createTicketDto';
@Injectable()
export class CreateTicketRepository {
  constructor(
    @Inject('DRIZZLE') private readonly db: ReturnType<typeof drizzle>,
  ) {}

  async execute(body: CreateTicketDto) {
    return await this.db.insert(tickets).values(body).returning();
  }
}
