import { Module, OnApplicationBootstrap, OnModuleInit } from '@nestjs/common';
import { BbbService } from './bbb.service';
import { BbbController } from './bbb.controller';
import { AaaModule } from 'src/aaa/aaa.module';

@Module({
  imports: [AaaModule],
  controllers: [BbbController],
  providers: [BbbService],
})
export class BbbModule implements OnModuleInit, OnApplicationBootstrap {
  onApplicationBootstrap() {
    console.log('BbbModule OnModuleInit');
  }
  onModuleInit() {
    console.log('BbbModule OnApplicationBootstrap');
  }
}
