import { ApiProperty } from '@nestjs/swagger';
export class CccDto {
    @ApiProperty({name: 'aaa', enum: ['a1', 'a2']})
  aaa: string;
  bbb: number;
  ccc: Array<string>;
}
