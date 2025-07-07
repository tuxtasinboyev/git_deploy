import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
    async onModuleInit() {
        try {
            await this.$connect()
        } catch (error) {
            console.log("connection database error");

        }
    }
    async onModuleDestroy() {
        await this.$disconnect()
    }
}
