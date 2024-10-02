'use client'

import { useState } from 'react'
import {
  Typography,
  Card,
  Button,
  Modal,
  Form,
  Input,
  DatePicker,
  InputNumber,
  List,
  Space,
} from 'antd'
import {
  CalendarOutlined,
  EnvironmentOutlined,
  DollarOutlined,
} from '@ant-design/icons'
const { Title, Text, Paragraph } = Typography
import { Prisma, Event } from '@prisma/client'
interface FormValues {
  title: string
  description: string
  startDate: dayjs.Dayjs
  endDate: dayjs.Dayjs
  location: string
  registrationFee: number
}
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function EventsPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user, checkRole } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [form] = Form.useForm<FormValues>()

  const {
    data: events,
    isLoading,
    refetch,
  } = Api.event.findMany.useQuery<Event[]>()
  const { mutateAsync: createEvent } = Api.event.create.useMutation()
  const { mutateAsync: registerForEvent } =
    Api.eventRegistration.create.useMutation()

  const isAdmin = checkRole('admin')

  const handleCreateEvent = async (values: FormValues) => {
    try {
      await createEvent({
        data: {
          title: values.title,
          description: values.description,
          startDate: values.startDate.toISOString(),
          endDate: values.endDate.toISOString(),
          location: values.location,
          registrationFee: values.registrationFee.toString(),
        },
      })
      enqueueSnackbar('Event created successfully', { variant: 'success' })
      setIsModalVisible(false)
      form.resetFields()
      refetch()
    } catch (error) {
      enqueueSnackbar('Failed to create event', { variant: 'error' })
    }
  }

  const handleRegister = async (eventId: string | undefined) => {
    if (!user?.id) {
      enqueueSnackbar('You must be logged in to register', { variant: 'error' })
      return
    }
    if (!eventId) {
      enqueueSnackbar('Invalid event', { variant: 'error' })
      return
    }
    try {
      await registerForEvent({
        data: {
          eventId,
          userId: user.id,
          status: 'registered',
          registrationDate: new Date().toISOString(),
        },
      })
      enqueueSnackbar('Registered for event successfully', {
        variant: 'success',
      })
      refetch()
    } catch (error) {
      enqueueSnackbar('Failed to register for event', { variant: 'error' })
    }
  }

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: 800, margin: '0 auto', padding: '20px' }}>
        <Title level={2}>Upcoming Events</Title>
        <Paragraph>
          View and register for upcoming events organized by our organization.
        </Paragraph>

        {isAdmin && (
          <Button
            type="primary"
            onClick={() => setIsModalVisible(true)}
            style={{ marginBottom: 16 }}
          >
            Create New Event
          </Button>
        )}

        <List
          grid={{ gutter: 16, xs: 1, sm: 1, md: 2, lg: 2, xl: 2, xxl: 2 }}
          dataSource={events}
          loading={isLoading}
          renderItem={(event: Event) => (
            <List.Item>
              <Card
                title={event.title ?? 'Untitled Event'}
                actions={[
                  <Button
                    key="register"
                    type="primary"
                    onClick={() => handleRegister(event.id)}
                  >
                    Register
                  </Button>,
                ]}
              >
                <Paragraph ellipsis={{ rows: 2 }}>
                  {event.description ?? 'No description'}
                </Paragraph>
                <Space direction="vertical">
                  <Text>
                    <CalendarOutlined />{' '}
                    {event.startDate
                      ? dayjs(event.startDate).format('MMM D, YYYY HH:mm')
                      : 'TBA'}{' '}
                    -{' '}
                    {event.endDate
                      ? dayjs(event.endDate).format('MMM D, YYYY HH:mm')
                      : 'TBA'}
                  </Text>
                  <Text>
                    <EnvironmentOutlined />{' '}
                    {event.location ?? 'No location specified'}
                  </Text>
                  <Text>
                    <DollarOutlined /> Registration Fee: $
                    {event.registrationFee ?? 'N/A'}
                  </Text>
                </Space>
              </Card>
            </List.Item>
          )}
        />

        <Modal
          title="Create New Event"
          open={isModalVisible}
          onCancel={() => setIsModalVisible(false)}
          footer={null}
        >
          <Form form={form} onFinish={handleCreateEvent} layout="vertical">
            <Form.Item name="title" label="Title" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item
              name="description"
              label="Description"
              rules={[{ required: true }]}
            >
              <Input.TextArea />
            </Form.Item>
            <Form.Item
              name="startDate"
              label="Start Date"
              rules={[{ required: true }]}
            >
              <DatePicker showTime />
            </Form.Item>
            <Form.Item
              name="endDate"
              label="End Date"
              rules={[{ required: true }]}
            >
              <DatePicker showTime />
            </Form.Item>
            <Form.Item
              name="location"
              label="Location"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="registrationFee"
              label="Registration Fee"
              rules={[{ required: true }]}
            >
              <InputNumber min={0} precision={2} />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Create Event
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </PageLayout>
  )
}
