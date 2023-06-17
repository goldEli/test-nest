import { AaaService } from './../aaa/aaa.service';
import {
  Injectable,
  OnApplicationBootstrap,
  OnModuleInit,
} from '@nestjs/common';
import { CreateBbbDto } from './dto/create-bbb.dto';
import { UpdateBbbDto } from './dto/update-bbb.dto';

@Injectable()
export class BbbService implements OnModuleInit, OnApplicationBootstrap {
  constructor(private aaaService: AaaService) {}
  onApplicationBootstrap() {
    console.log('BbbService OnModuleInit');
  }
  onModuleInit() {
    console.log('BbbService OnApplicationBootstrap');
  }
  create(createBbbDto: CreateBbbDto) {
    // this.aaaService.create
    return 'This action adds a new bbb';
  }

  findAll() {
    return `This action returns all bbb` + this.aaaService.findAll();
  }

  findOne(id: number) {
    return `This action returns a #${id} bbb`;
  }

  update(id: number, updateBbbDto: UpdateBbbDto) {
    return `This action updates a #${id} bbb`;
  }

  remove(id: number) {
    return `This action removes a #${id} bbb`;
  }
}
