'use client'

import { WorkspaceProvider } from '@/.marblism/workspace'
import { AnalyticsProvider } from '@/core/analytics'
import { UserProvider } from '@/core/context'
import { TRPCProvider } from '@/core/trpc'
import { DesignSystemProvider } from '@/designSystem'
import { SessionProvider } from 'next-auth/react'
import { ReactNode } from 'react'

type Props = { children: ReactNode }

export function ClientLayout({ children }: Props) {
  return (
    <DesignSystemProvider>
      <SessionProvider>
        <TRPCProvider>
          <AnalyticsProvider>
            <WorkspaceProvider>
              <UserProvider>{children}</UserProvider>
            </WorkspaceProvider>
          </AnalyticsProvider>
        </TRPCProvider>
      </SessionProvider>
    </DesignSystemProvider>
  )
}
