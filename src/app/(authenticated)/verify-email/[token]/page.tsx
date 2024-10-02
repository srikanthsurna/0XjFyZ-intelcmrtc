'use client'

import { Typography, Button, Result } from 'antd'
import { CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons'
import { useState, useEffect } from 'react'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function EmailVerificationPage() {
  const router = useRouter()
  const params = useParams<{ token: string }>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()
  const [verificationStatus, setVerificationStatus] = useState<
    'loading' | 'success' | 'error'
  >('loading')

  const { mutateAsync: verifyEmail } = Api.user.update.useMutation()

  useEffect(() => {
    const verifyUserEmail = async () => {
      try {
        if (params.token) {
          await verifyEmail({
            where: { tokenInvitation: params.token },
            data: { emailVerified: true, tokenInvitation: null },
          })
          setVerificationStatus('success')
          enqueueSnackbar('Email verified successfully!', {
            variant: 'success',
          })
        } else {
          throw new Error('Invalid verification token')
        }
      } catch (error) {
        setVerificationStatus('error')
        enqueueSnackbar('Email verification failed. Please try again.', {
          variant: 'error',
        })
      }
    }

    verifyUserEmail()
  }, [params.token, verifyEmail])

  const handleContinue = () => {
    router.push('/home')
  }

  return (
    <PageLayout layout="full-width">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '80vh',
        }}
      >
        <div style={{ textAlign: 'center', maxWidth: '600px' }}>
          <Title level={2}>Email Verification</Title>
          <Text>
            Complete your registration by verifying your email address.
          </Text>

          {verificationStatus === 'loading' && (
            <Result
              icon={<CheckCircleOutlined spin />}
              title="Verifying your email..."
              subTitle="Please wait while we confirm your email address."
            />
          )}

          {verificationStatus === 'success' && (
            <Result
              status="success"
              icon={<CheckCircleOutlined />}
              title="Email Verified Successfully!"
              subTitle="Your email has been verified. You can now access all features of the system."
              extra={[
                <Button type="primary" key="continue" onClick={handleContinue}>
                  Continue to Homepage
                </Button>,
              ]}
            />
          )}

          {verificationStatus === 'error' && (
            <Result
              status="error"
              icon={<CloseCircleOutlined />}
              title="Email Verification Failed"
              subTitle="We couldn't verify your email. The verification link may be expired or invalid."
              extra={[
                <Button
                  type="primary"
                  key="tryAgain"
                  onClick={() => router.push('/home')}
                >
                  Return to Homepage
                </Button>,
              ]}
            />
          )}
        </div>
      </div>
    </PageLayout>
  )
}
