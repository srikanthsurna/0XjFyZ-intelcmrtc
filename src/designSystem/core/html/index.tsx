import { Snackbar } from '@/designSystem/providers'
import { theme } from 'antd'
import { useSnackbar } from 'notistack'
import { ReactNode, useEffect, useState } from 'react'
import { MrbSplashScreen } from '../splashScreen'

const { useToken } = theme

interface Props {
  children: ReactNode
}

export const MrbHtml: React.FC<Props> = ({ children }: Props) => {
  const { token } = useToken()

  const [isLoading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    if (isLoading) {
      setLoading(false)
    }
  }, [])

  const snackbar = useSnackbar()

  Snackbar.Instance.setup(snackbar)

  return (
    <html
      lang="en"
      style={{ background: token.colorBgBase, color: token.colorTextBase }}
    >
      <body>{isLoading ? <MrbSplashScreen /> : children}</body>
    </html>
  )
}
