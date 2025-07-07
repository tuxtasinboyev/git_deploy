import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { MailerSereviceModule } from 'src/mailer-serevice/mailer-serevice.module';
import { PrismaModule } from 'src/prisma/prisma.module';
import { RedisModule } from 'src/redis/redis.module';

@Module({
  imports:[MailerSereviceModule,PrismaModule,RedisModule],
  providers: [AuthService],
  controllers: [AuthController]
})
export class AuthModule {}
