import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  ParseArrayPipe,
  ParseBoolPipe,
  ParseFloatPipe,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { AppService } from './app.service';
import { AaaPipe } from './aaa.pipe';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(
    @Query(
      'aa',
      new ParseIntPipe({
        exceptionFactory: (msg) => {
          console.log(msg);
          throw new HttpException('xxx' + msg, HttpStatus.NOT_IMPLEMENTED);
        },
        // errorHttpStatusCode: HttpStatus.NOT_FOUND,
      }),
    )
    aa: string,
  ): string {
    console.log('aa', aa);
    return aa + 1;
    return this.appService.getHello();
  }

  @Get('cc')
  cc(@Query('cc', ParseFloatPipe) cc: number) {
    return cc;
  }

  @Get('dd')
  dd(@Query('dd', ParseBoolPipe) dd: boolean) {
    return dd;
  }

  @Get('ee')
  ee(
    @Query(
      'ee',
      new ParseArrayPipe({
        items: Number,
      }),
    )
    ee: Array<number>,
  ) {
    return ee.reduce((total, item) => total + item, 0);
  }
  @Get('ff')
  ff(
    @Query(
      'ff',
      new ParseArrayPipe({
        separator: '..',
      }),
    )
    ff: Array<number>,
  ) {
    return ff;
  }
  @Get('gg')
  gg(
    @Query('gg', AaaPipe)
    gg: string,
  ) {
    return gg;
  }
}
