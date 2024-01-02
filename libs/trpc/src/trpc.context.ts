import { initTRPC } from '@trpc/server'
import { Context } from './buildCreateContext'

export const tRPC = initTRPC.context<Context>().create()
export const router = tRPC.router
export const middleware = tRPC.middleware
export const procedure = tRPC.procedure
export const mergeRouters = tRPC.mergeRouters
