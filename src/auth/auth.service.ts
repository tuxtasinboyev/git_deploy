import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { MailerSereviceService } from 'src/mailer-serevice/mailer-serevice.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { RedisService } from 'src/redis/redis.service';

@Injectable()
export class AuthService {
    constructor(private redisService: RedisService, private maileService: MailerSereviceService, private prisma: PrismaService) { }

    async register(data: { name: string, email: string; password: string }) {
        const { email, name, password } = data;

        const code = Math.floor(10000 + Math.random() * 90000);

        await this.maileService.sendEmail(email, "Tasdiqlash kodi", code);

        await this.redisService.set(`register:${email}`, JSON.stringify({ ...data, code }), 1200);
        return "send email verification code"

    }
    async verify(data: { email: string, code: number }) {
        const userData = await this.redisService.get(`register:${data.email}`)
        if (!userData) throw new NotFoundException("users not found in the redis")
        const user = JSON.parse(userData)

        if (data.code != user.code) throw new ConflictException("code invalid")

        const result = await this.prisma.user.create({
            data: { email: data.email, name: user.name, password: user.password }
        })
        return {
            success: true,
            data: result
        }

    }

}
