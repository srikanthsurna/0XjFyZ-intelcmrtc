'use client'

import { Typography, Form, Input, Button, Space, Spin, Row, Col } from 'antd'
import {
  CalendarOutlined,
  DollarOutlined,
  CheckCircleOutlined,
} from '@ant-design/icons'
import { useState } from 'react'
const { Title, Text, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function EventRegistrationPage() {
  const router = useRouter()
  const params = useParams<{ eventId: string }>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()
  const [loading, setLoading] = useState(false)

  const { data: event, isLoading: eventLoading } =
    Api.event.findUnique.useQuery({
      where: { id: params.eventId },
    })

  const { mutateAsync: registerForEvent } =
    Api.eventRegistration.create.useMutation()
  const { mutateAsync: createPayment } = Api.payment.create.useMutation()

  const handleRegistration = async () => {
    if (!user || !event) return

    setLoading(true)
    try {
      // Register for the event
      const registration = await registerForEvent({
        data: {
          userId: user.id,
          eventId: event.id,
          status: 'PENDING',
          registrationDate: new Date().toISOString(),
        },
      })

      // Create a payment
      await createPayment({
        data: {
          userId: user.id,
          amount: '50.00', // Assuming a fixed price for simplicity
          status: 'COMPLETED',
          paymentDate: new Date().toISOString(),
        },
      })

      enqueueSnackbar('Successfully registered for the event!', {
        variant: 'success',
      })
      router.push('/events')
    } catch (error) {
      console.error('Registration failed:', error)
      enqueueSnackbar('Failed to register for the event. Please try again.', {
        variant: 'error',
      })
    } finally {
      setLoading(false)
    }
  }

  if (eventLoading) {
    return (
      <PageLayout layout="full-width">
        <Spin size="large" />
      </PageLayout>
    )
  }

  if (!event) {
    return (
      <PageLayout layout="full-width">
        <Title level={2}>Event Not Found</Title>
        <Paragraph>The requested event could not be found.</Paragraph>
      </PageLayout>
    )
  }

  return (
    <PageLayout layout="full-width">
      <Row justify="center">
        <Col xs={24} sm={20} md={16} lg={12}>
          <Title level={2}>Event Registration</Title>
          <Paragraph>
            Complete your registration for the following event:
          </Paragraph>

          <Space direction="vertical" size="large" style={{ width: '100%' }}>
            <div>
              <Title level={3}>{event.title}</Title>
              <Paragraph>{event.description}</Paragraph>
              <Space>
                <CalendarOutlined />
                <Text>
                  {event.startDate &&
                    dayjs(event.startDate).format('MMMM D, YYYY')}{' '}
                  -{' '}
                  {event.endDate && dayjs(event.endDate).format('MMMM D, YYYY')}
                </Text>
              </Space>
              <br />
              <Space>
                <DollarOutlined />
                <Text>Registration Fee: $50.00</Text>
              </Space>
            </div>

            <Form layout="vertical" onFinish={handleRegistration}>
              <Form.Item
                name="confirmRegistration"
                valuePropName="checked"
                rules={[
                  {
                    validator: (_, value) =>
                      value
                        ? Promise.resolve()
                        : Promise.reject(
                            new Error('Please confirm your registration'),
                          ),
                  },
                ]}
              >
                <Button
                  type="primary"
                  htmlType="submit"
                  icon={<CheckCircleOutlined />}
                  loading={loading}
                >
                  Confirm Registration and Pay
                </Button>
              </Form.Item>
            </Form>
          </Space>
        </Col>
      </Row>
    </PageLayout>
  )
}
