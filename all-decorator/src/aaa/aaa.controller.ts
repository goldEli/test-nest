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
} from '@nestjs/common';
import { AaaService } from './aaa.service';
import { CreateAaaDto } from './dto/create-aaa.dto';
import { UpdateAaaDto } from './dto/update-aaa.dto';
import { AaaFilter } from './aaa.filter';

@Controller('aaa')
export class AaaController {
  constructor(private readonly aaaService: AaaService) {}

  // 如果没有依赖也可以创建
  @Optional()
  @Inject('miao')
  private readonly miao: Record<string, any>;

  @Post()
  create(@Body() createAaaDto: CreateAaaDto) {
    return this.aaaService.create(createAaaDto);
  }

  @Get()
  @UseFilters(AaaFilter)
  findAll() {
    console.log(this.miao);
    throw new HttpException('xxxx', HttpStatus.BAD_REQUEST);
    return this.aaaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.aaaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAaaDto: UpdateAaaDto) {
    return this.aaaService.update(+id, updateAaaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.aaaService.remove(+id);
  }
}
