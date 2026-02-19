import { Body, Controller } from '@nestjs/common';
import { create } from 'domain';

@Controller()
export class TicketController {
  constructor() {}

  async create(@Body body: CreateTicketDto) {}
}
