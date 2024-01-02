import { procedure, router } from '@libs/trpc'
import { GreetingService } from '../services/greeting.service'
import { z } from 'zod'

export const UserRouter = router({
    user: router({
        greeting: procedure
            .input(
                z.object({
                    name: z.string()
                })
            )
            .query(async ({ ctx, input }) => {
                const greeting = await ctx.inject(GreetingService)
                return greeting.getHello(input.name)
            })
    })
})
