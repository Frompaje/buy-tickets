import { Global, Module } from '@nestjs/common';
import { createDrizzle } from './index';

@Global()
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
