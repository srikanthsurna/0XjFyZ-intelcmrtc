'use client'

import {
  Typography,
  Card,
  Row,
  Col,
  List,
  Badge,
  Button,
  Modal,
  Form,
  Input,
} from 'antd'
import {
  TagsOutlined,
  CalendarOutlined,
  FileOutlined,
  BellOutlined,
  LockOutlined,
  CheckOutlined,
} from '@ant-design/icons'
import { useState } from 'react'
const { Title, Text } = Typography
import { Prisma } from '@prisma/client'
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function HomePage() {
  const router = useRouter()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()
  const [isPasswordModalVisible, setIsPasswordModalVisible] = useState(false)
  const [form] = Form.useForm()

  const { data: tasks } = Api.userTask.findMany.useQuery({
    where: { userId: user?.id },
    include: { task: true },
    take: 5,
  })

  const { data: events } = Api.eventRegistration.findMany.useQuery({
    where: { userId: user?.id },
    include: { event: true },
    take: 5,
  })

  const { data: resources } = Api.resource.findMany.useQuery({
    take: 5,
  })

  const { data: notifications } = Api.notification.findMany.useQuery({
    where: { userId: user?.id, isRead: false },
  })

  const { mutateAsync: updatePassword } = Api.user.update.useMutation()

  const handlePasswordReset = async (values: { password: string }) => {
    try {
      await updatePassword({
        where: { id: user?.id },
        data: { password: values.password },
      })
      enqueueSnackbar('Password updated successfully', { variant: 'success' })
      setIsPasswordModalVisible(false)
    } catch (error) {
      enqueueSnackbar('Failed to update password', { variant: 'error' })
    }
  }

  return (
    <PageLayout layout="full-width">
      <Row justify="center">
        <Col xs={24} sm={22} md={20} lg={18} xl={16}>
          <Title level={2}>Member Dashboard</Title>
          <Text>
            Welcome to your personal dashboard. Here you can view your tasks,
            upcoming events, and recent resources.
          </Text>

          <Row gutter={[16, 16]} style={{ marginTop: '24px' }}>
            <Col xs={24} md={8}>
              <Card
                title={
                  <>
                    <CheckOutlined /> My Tasks
                  </>
                }
                extra={<a onClick={() => router.push('/tasks')}>View All</a>}
              >
                <List
                  dataSource={tasks}
                  renderItem={(
                    item: Prisma.UserTaskGetPayload<{
                      include: { task: true }
                    }>,
                  ) => (
                    <List.Item>
                      <Text>{item.task?.title}</Text>
                      <Badge
                        status={
                          item.task?.status === 'completed'
                            ? 'success'
                            : 'processing'
                        }
                        text={item.task?.status}
                      />
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
            <Col xs={24} md={8}>
              <Card
                title={
                  <>
                    <CalendarOutlined /> Upcoming Events
                  </>
                }
                extra={<a onClick={() => router.push('/events')}>View All</a>}
              >
                <List
                  dataSource={events}
                  renderItem={(
                    item: Prisma.EventRegistrationGetPayload<{
                      include: { event: true }
                    }>,
                  ) => (
                    <List.Item>
                      <Text>{item.event?.title}</Text>
                      <Text type="secondary">
                        {dayjs(item.event?.startDate).format('MMM D, YYYY')}
                      </Text>
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
            <Col xs={24} md={8}>
              <Card
                title={
                  <>
                    <FileOutlined /> Recent Resources
                  </>
                }
                extra={
                  <a onClick={() => router.push('/resources')}>View All</a>
                }
              >
                <List
                  dataSource={resources}
                  renderItem={(item: Prisma.ResourceGetPayload<{}>) => (
                    <List.Item>
                      <a
                        href={item.resourceUrl || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.name}
                      </a>
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
          </Row>

          <Row style={{ marginTop: '24px' }}>
            <Col span={24}>
              <Card
                title={
                  <>
                    <BellOutlined /> Notifications
                  </>
                }
              >
                <List
                  dataSource={notifications}
                  renderItem={(item: Prisma.NotificationGetPayload<{}>) => (
                    <List.Item>
                      <Text>{item.message}</Text>
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
          </Row>

          <Row style={{ marginTop: '24px' }}>
            <Col span={24}>
              <Button
                icon={<LockOutlined />}
                onClick={() => setIsPasswordModalVisible(true)}
              >
                Reset Password
              </Button>
            </Col>
          </Row>

          <Modal
            title="Reset Password"
            open={isPasswordModalVisible}
            onCancel={() => setIsPasswordModalVisible(false)}
            footer={null}
          >
            <Form form={form} onFinish={handlePasswordReset}>
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: 'Please input your new password!',
                  },
                ]}
              >
                <Input.Password placeholder="New Password" />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Update Password
                </Button>
              </Form.Item>
            </Form>
          </Modal>
        </Col>
      </Row>
    </PageLayout>
  )
}
