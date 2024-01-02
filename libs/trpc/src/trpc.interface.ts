import { AnyRouter } from '@trpc/server/dist/core/router'

export interface ITrpcModuleOptions<TRouter extends AnyRouter = AnyRouter> {
    prefix: '/trpc' | string
    router: TRouter
}

export const TRPC_ROUTER_TOKEN = Symbol('TRPC_ROUTER_TOKEN')
export const TRPC_PREFIX_TOKEN = Symbol('TRPC_PREFIX_TOKEN')
