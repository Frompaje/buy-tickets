import { Injectable } from '@nestjs/common';
import { GetAllTicketRepository } from '../repositories/getAllTicketRepository';

@Injectable()
export class GetAllTicketUseCase {
  constructor(
    private readonly getAllTicketRepository: GetAllTicketRepository,
  ) {}

  async execute() {
    return await this.getAllTicketRepository.execute();
  }
}
