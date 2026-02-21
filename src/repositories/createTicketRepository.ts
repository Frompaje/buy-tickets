import { Inject } from '@nestjs/common';
import { drizzle } from 'drizzle-orm/node-postgres';

type Input = {
  nameTitle: string;
  value: number;
  caterogy: string;
};

export class CreateTicketRepository {
  constructor(
    @Inject('DRIZZLE') private readonly db: ReturnType<typeof drizzle>,
  ) {}
  async execute(body: Input) {
    await this.db.insert(tickets).values(body).returning();
  }
}
