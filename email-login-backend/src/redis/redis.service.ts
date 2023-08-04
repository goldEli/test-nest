import {
  Body,
  Inject,
  Injectable,
  Post,
  UnauthorizedException,
} from '@nestjs/common';
import { RedisClientType } from 'redis';
import { LoginUserDto } from 'src/user/dto/login-user.dto';

@Injectable()
export class RedisService {
  @Inject('REDIS_CLIENT')
  private redisClient: RedisClientType;

  async get(key: string) {
    return await this.redisClient.get(key);
  }

  async set(key: string, value: string | number, ttl?: number) {
    await this.redisClient.set(key, value);

    if (ttl) {
      await this.redisClient.expire(key, ttl);
    }
  }
}
