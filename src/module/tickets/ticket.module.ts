import { Module } from '@nestjs/common';
import { TicketController } from './controller';
import { CreateTicketUseCase } from './useCase/createTicketUseCase';
import { GetAllTicketUseCase } from './useCase/getAllTicketUseCase';
import { GetAllTicketRepository } from './repositories/getAllTicketRepository';
import { CreateTicketRepository } from './repositories/createTicketRepository';
import { S3Service } from 'src/infra/s3/sr.service';

@Module({
  controllers: [TicketController],
  providers: [
    CreateTicketUseCase,
    CreateTicketRepository,
    GetAllTicketUseCase,
    GetAllTicketRepository,
    S3Service,
  ],
})
export class TicketModule {}
