'use client'
import Nango from '@nangohq/frontend'
import { Button } from 'antd'
import { useSnackbar } from 'notistack'
import React, { useEffect, useState } from 'react'

export const useNango = () => {
  const [nango, setNango] = useState<Nango | null>(null)
  const { enqueueSnackbar } = useSnackbar()

  const action = () => {
    return (
      <Button
        href="https://dev.marblism.com/next/Building-Your-Application/Integrations/nango"
        target="_blank"
      >
        Read more
      </Button>
    )
  }

  useEffect(() => {
    const initNango = () => {
      if (process.env.NEXT_PUBLIC_NANGO_KEY) {
        // return a new Nango instance
        const nangoInstance = new Nango({
          publicKey: process.env.NEXT_PUBLIC_NANGO_KEY as string,
        })
        setNango(nangoInstance)
      } else {
        // Create a fake Nango instance that triggers an error if the key is missing
        const errorNango = {
          auth: () => {
            enqueueSnackbar(
              'NEXT_PUBLIC_NANGO_KEY is missing in your environment variables, unable to authenticate.',
              { variant: 'error', action: action() },
            )
            console.error('NEXT_PUBLIC_NANGO_KEY is missing, cannot call auth')
          },
        }

        setNango(errorNango as unknown as Nango)
      }
    }

    initNango()
  }, [])

  return { nango }
}
