import { Module } from '@nestjs/common'

import { tRPCModule } from '@libs/trpc'

import { GreetingService } from '../services/greeting.service'

import { appRouter } from '../index'

@Module({
    imports: [
        tRPCModule.forRoot({
            prefix: '/trpc',
            router: appRouter
        })
    ],
    providers: [GreetingService],
    controllers: []
})
export class AppModule {}
