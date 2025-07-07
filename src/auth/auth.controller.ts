import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private autService: AuthService) { }
    @Post('send-email')
    async register(@Body() data: { name: string, email: string; password: string }) {
        return await this.autService.register(data)
    }
    @Post('verify')
    async verify(@Body() data: { email: string, code: number }) {
        return await this.autService.verify(data)
    }

}
