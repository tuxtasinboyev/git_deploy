import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MailerSereviceService {
    constructor(private maileService: MailerService) { }
    async sendEmail(to: string, subject: string, code: number) {
        await this.maileService.sendMail({
            to,
            subject,
            template: "index",
            context: {
                code
            }
        })
    }
}
