import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { RedisModule } from './redis/redis.module';
import { MailerSereviceModule } from './mailer-serevice/mailer-serevice.module';

@Module({
  imports: [AuthModule, PrismaModule, RedisModule, MailerSereviceModule]
})
export class AppModule { }
