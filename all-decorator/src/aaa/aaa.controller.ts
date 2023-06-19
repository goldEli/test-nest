import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Inject,
  Optional,
  UseFilters,
  HttpException,
  HttpStatus,
  ParseIntPipe,
  Query,
  ParseBoolPipe,
} from '@nestjs/common';
import { AaaService } from './aaa.service';
import { CreateAaaDto } from './dto/create-aaa.dto';
import { UpdateAaaDto } from './dto/update-aaa.dto';
import { AaaFilter } from './aaa.filter';
import { AaaDto } from './dto/aaa.dto';

@Controller('aaa')
export class AaaController {
  constructor(private readonly aaaService: AaaService) {}

  // 如果没有依赖也可以创建
  @Optional()
  @Inject('miao')
  private readonly miao: Record<string, any>;

  @Get()
  @UseFilters(AaaFilter)
  findAll() {
    console.log(this.miao);
    throw new HttpException('xxxx', HttpStatus.BAD_REQUEST);
    return this.aaaService.findAll();
  }

  @Get('/xxx/:aaa')
  getHello2(
    @Param('aaa', ParseIntPipe) aaa: number,
    @Query('bbb', ParseBoolPipe) bbb: boolean,
  ) {
    console.log(typeof aaa, typeof bbb);
    console.log(aaa, bbb);
    return 'hello';
  }

  @Post('/bbb')
  getHello3(@Body() aaa: AaaDto) {
    console.log(aaa);
    return 'hello3';
  }
}
