import { Module } from '@nestjs/common';
import { AaaService } from './aaa.service';
import { AaaController } from './aaa.controller';

@Module({
  controllers: [AaaController],
  providers: [
    AaaService,
    {
      provide: 'miao',
      useFactory() {
        return {
          name: 'miao',
        };
      },
    },
  ],
})
export class AaaModule {}
