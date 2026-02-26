import { Inject, Injectable } from '@nestjs/common';
import { desc } from 'drizzle-orm';
import { drizzle } from 'drizzle-orm/node-postgres';
import { tickets } from 'src/db/ticket';

@Injectable()
export class GetAllTicketRepository {
  constructor(
    @Inject('DRIZZLE') private readonly db: ReturnType<typeof drizzle>,
  ) {}

  async execute() {
    return await this.db
      .select({
        title: tickets.title,
        category: tickets.category,
        price: tickets.price,
        description: tickets.description,
        location: tickets.location,
        date: tickets.date,
        time: tickets.time,
        image: tickets.image,
        quantity: tickets.quantity,
        max_quantity: tickets.max_quantity,
      })
      .from(tickets)
      .orderBy(desc(tickets.created_at));
  }
}
