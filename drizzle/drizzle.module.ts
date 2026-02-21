import { Module } from '@nestjs/common';
import { createDrizzle } from './index';

@Module({
  providers: [
    {
      provide: 'DRIZZLE',
      useFactory: () => createDrizzle(),
    },
  ],
  exports: ['DRIZZLE'],
})
export class DrizzleModule {}
