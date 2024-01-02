import { useState } from 'react'
import { trpc } from '@widgets/tRPCContext'

export const Test = () => {
    const [input, setInput] = useState('')
    const { data, refetch } = trpc.user.greeting.useQuery(
        { name: input },
        {
            // 关闭自动触发提交
            enabled: false,
            // 聚焦选项卡时不提交
            refetchOnWindowFocus: false
        }
    )

    const onBtnSendClick = () => refetch()

    return (
        <div className="h-screen w-screen grid place-content-center">
            <p className="mb-2">{data}</p>
            <input className="border-2 outline-none" type="text" onChange={e => setInput(e.target.value)} />
            <button type="button" onClick={onBtnSendClick}>
                发送
            </button>
        </div>
    )
}
