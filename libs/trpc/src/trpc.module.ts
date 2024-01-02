import { DynamicModule, Inject, MiddlewareConsumer, Module, NestModule } from '@nestjs/common'

import { ITrpcModuleOptions, TRPC_PREFIX_TOKEN, TRPC_ROUTER_TOKEN } from './trpc.interface'
import { tRPCMiddleware } from './trpc.middleware'

@Module({})
export class tRPCModule implements NestModule {
    @Inject(TRPC_PREFIX_TOKEN)
    private readonly prefix!: ITrpcModuleOptions['prefix']

    static forRoot(options: ITrpcModuleOptions): DynamicModule {
        if (!options.prefix || !options.router) {
            throw new Error('trpc路由和前缀必须指定')
        }

        return {
            module: tRPCModule,
            providers: [
                { provide: TRPC_ROUTER_TOKEN, useValue: options.router },
                { provide: TRPC_PREFIX_TOKEN, useValue: options.prefix }
            ]
        }
    }

    configure(consumer: MiddlewareConsumer) {
        consumer.apply(tRPCMiddleware).forRoutes(this.prefix)
    }
}
