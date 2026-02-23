import { Inject, Injectable } from '@nestjs/common';
import { drizzle } from 'drizzle-orm/node-postgres';
import { tickets } from 'src/db/ticket';

type Input = {
  nameTitle: string;
  price: number;
  category: string;
};
@Injectable()
export class CreateTicketRepository {
  constructor(
    @Inject('DRIZZLE') private readonly db: ReturnType<typeof drizzle>,
  ) {}
  async execute(body: Input) {
    await this.db.insert(tickets).values(body).returning();
  }
}
