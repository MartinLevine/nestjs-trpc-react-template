import { Request, Response } from 'express'
import { Type } from '@nestjs/common'
import { ContextIdFactory, ModuleRef } from '@nestjs/core'

type Context = {
    res: Response
    inject: <TInput = any, TResult = TInput>(typeOrToken: Type<TInput> | Function | string | symbol) => Promise<TResult>
    req: Request
}

type BuildCreateContextFn<TContext, TContextFn = () => TContext> = (
    req: Request,
    res: Response,
    moduleRef: ModuleRef
) => TContextFn

const buildCreateContext: BuildCreateContextFn<Context> = (req, res, moduleRef) => {
    // trpc上下文内使用inject注入nest依赖项
    const inject = <TInput = any, TResult = TInput>(typeOrToken: Type<TInput> | Function | string | symbol) => {
        // 获取当前请求上下文id
        const contextId = ContextIdFactory.getByRequest(req)

        // 获取请求上下文对应moduleRef实例并resolve依赖
        return moduleRef.resolve<TResult>(typeOrToken, contextId, {
            strict: false
        })
    }

    return () => ({
        req,
        res,
        inject
    })
}

export { buildCreateContext, Context }
