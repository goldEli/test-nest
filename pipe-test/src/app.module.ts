import { Module, ValidationPipe } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { APP_PIPE } from '@nestjs/core';
import { MyValidationPipe } from './my-validation.pipe';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: 'validation_options',
      useFactory() {
        return {
          aaa: 1,
          bbb: 2,
        };
      },
    },
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
      // useClass: MyValidationPipe,
    },
  ],
})
export class AppModule {}
