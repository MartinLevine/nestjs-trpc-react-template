import React from 'react'
import ReactDOM from 'react-dom/client'

import { TRPCContext } from './widgets/tRPCContext'

import '@unocss/reset/tailwind-compat.css'
import '@assets/style.css'

import { Test } from './modules/Test'

const root = ReactDOM.createRoot(document.getElementById('root')!)
root.render(
    <React.StrictMode>
        <TRPCContext urls={['http://localhost:5200/trpc']}>
            <Test />
        </TRPCContext>
    </React.StrictMode>
)
