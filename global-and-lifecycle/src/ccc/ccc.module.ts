import { Module, OnApplicationBootstrap, OnModuleInit } from '@nestjs/common';
import { CccService } from './ccc.service';
import { CccController } from './ccc.controller';

@Module({
  controllers: [CccController],
  providers: [CccService],
})
export class CccModule implements OnModuleInit, OnApplicationBootstrap {
  onApplicationBootstrap() {
    console.log('CccModule OnModuleInit');
  }
  onModuleInit() {
    console.log('CccModule OnApplicationBootstrap');
  }
}
