import { procedure, router } from '@libs/trpc'

export const PostRouter = router({
    post: router({
        list: procedure.query(async () => [])
    })
})
