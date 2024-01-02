import { Request, Response, NextFunction } from 'express'
import * as tRpcExpress from '@trpc/server/adapters/express'
import { Inject, Injectable, NestMiddleware, Type } from '@nestjs/common'
import { ModuleRef } from '@nestjs/core'

import { ITrpcModuleOptions, TRPC_ROUTER_TOKEN } from './trpc.interface'
import { buildCreateContext } from './buildCreateContext'

@Injectable()
export class tRPCMiddleware implements NestMiddleware {
    @Inject(TRPC_ROUTER_TOKEN)
    private readonly router!: ITrpcModuleOptions['router']

    constructor(private readonly moduleRef: ModuleRef) {}

    /**
     * 对接trpc中间件
     */
    use(req: Request, res: Response, next: NextFunction) {
        const createContext = buildCreateContext(req, res, this.moduleRef)

        const handler = tRpcExpress.createExpressMiddleware({
            router: this.router,
            createContext
        })

        handler(req, res, next)
    }
}
