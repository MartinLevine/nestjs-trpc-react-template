import { createTRPCReact } from '@trpc/react-query'

import { AppRouter } from '@service'

export const trpc = createTRPCReact<AppRouter>()
