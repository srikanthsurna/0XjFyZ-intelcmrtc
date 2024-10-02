'use client'

import {
  Typography,
  Card,
  Row,
  Col,
  Button,
  Table,
  Modal,
  Form,
  Input,
  DatePicker,
} from 'antd'
import {
  UserOutlined,
  CheckSquareOutlined,
  CalendarOutlined,
  MailOutlined,
} from '@ant-design/icons'
import { useState } from 'react'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function AdminDashboardPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const [isTaskModalVisible, setIsTaskModalVisible] = useState(false)
  const [isEmailModalVisible, setIsEmailModalVisible] = useState(false)
  const [form] = Form.useForm()

  const { data: users, isLoading: isLoadingUsers } = Api.user.findMany.useQuery(
    {},
  )
  const { data: tasks, isLoading: isLoadingTasks } = Api.task.findMany.useQuery(
    {},
  )
  const { data: events, isLoading: isLoadingEvents } =
    Api.event.findMany.useQuery({})

  const { mutateAsync: createTask } = Api.task.create.useMutation()
  const { mutateAsync: sendEmail } = Api.emailTemplate.create.useMutation()

  const handleCreateTask = async (values: any) => {
    try {
      await createTask({
        data: {
          title: values.title,
          description: values.description,
          dueDate: values.dueDate.toISOString(),
          status: 'PENDING',
        },
      })
      enqueueSnackbar('Task created successfully', { variant: 'success' })
      setIsTaskModalVisible(false)
      form.resetFields()
    } catch (error) {
      enqueueSnackbar('Failed to create task', { variant: 'error' })
    }
  }

  const handleSendEmail = async (values: any) => {
    try {
      await sendEmail({
        data: {
          name: 'Bulk Email',
          subject: values.subject,
          body: values.body,
        },
      })
      enqueueSnackbar('Email sent successfully', { variant: 'success' })
      setIsEmailModalVisible(false)
      form.resetFields()
    } catch (error) {
      enqueueSnackbar('Failed to send email', { variant: 'error' })
    }
  }

  const userColumns = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Email', dataIndex: 'email', key: 'email' },
    { title: 'Status', dataIndex: 'status', key: 'status' },
    { title: 'Role', dataIndex: 'globalRole', key: 'globalRole' },
  ]

  const taskColumns = [
    { title: 'Title', dataIndex: 'title', key: 'title' },
    { title: 'Description', dataIndex: 'description', key: 'description' },
    {
      title: 'Due Date',
      dataIndex: 'dueDate',
      key: 'dueDate',
      render: (date: string) => dayjs(date).format('YYYY-MM-DD'),
    },
    { title: 'Status', dataIndex: 'status', key: 'status' },
  ]

  const eventColumns = [
    { title: 'Title', dataIndex: 'title', key: 'title' },
    {
      title: 'Start Date',
      dataIndex: 'startDate',
      key: 'startDate',
      render: (date: string) => dayjs(date).format('YYYY-MM-DD'),
    },
    {
      title: 'End Date',
      dataIndex: 'endDate',
      key: 'endDate',
      render: (date: string) => dayjs(date).format('YYYY-MM-DD'),
    },
    { title: 'Location', dataIndex: 'location', key: 'location' },
  ]

  return (
    <PageLayout layout="full-width">
      <div style={{ padding: '24px', maxWidth: '1200px', margin: '0 auto' }}>
        <Title level={2}>Admin Dashboard</Title>
        <Text>
          Welcome to the admin dashboard. Here you can manage users, tasks, and
          events.
        </Text>

        <Row gutter={[16, 16]} style={{ marginTop: '24px' }}>
          <Col xs={24} sm={12} md={6}>
            <Card>
              <UserOutlined style={{ fontSize: '24px', color: '#1890ff' }} />
              <Title level={4}>Users</Title>
              <Text>{users?.length || 0}</Text>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Card>
              <CheckSquareOutlined
                style={{ fontSize: '24px', color: '#52c41a' }}
              />
              <Title level={4}>Tasks</Title>
              <Text>{tasks?.length || 0}</Text>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Card>
              <CalendarOutlined
                style={{ fontSize: '24px', color: '#faad14' }}
              />
              <Title level={4}>Events</Title>
              <Text>{events?.length || 0}</Text>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Card>
              <Button
                type="primary"
                icon={<MailOutlined />}
                onClick={() => setIsEmailModalVisible(true)}
              >
                Send Bulk Email
              </Button>
            </Card>
          </Col>
        </Row>

        <Title level={3} style={{ marginTop: '24px' }}>
          User Management
        </Title>
        <Table
          dataSource={users}
          columns={userColumns}
          loading={isLoadingUsers}
          rowKey="id"
        />

        <Title level={3} style={{ marginTop: '24px' }}>
          Task Management
        </Title>
        <Button
          type="primary"
          onClick={() => setIsTaskModalVisible(true)}
          style={{ marginBottom: '16px' }}
        >
          Create New Task
        </Button>
        <Table
          dataSource={tasks}
          columns={taskColumns}
          loading={isLoadingTasks}
          rowKey="id"
        />

        <Title level={3} style={{ marginTop: '24px' }}>
          Event Management
        </Title>
        <Table
          dataSource={events}
          columns={eventColumns}
          loading={isLoadingEvents}
          rowKey="id"
        />

        <Modal
          title="Create New Task"
          open={isTaskModalVisible}
          onCancel={() => setIsTaskModalVisible(false)}
          footer={null}
        >
          <Form form={form} onFinish={handleCreateTask}>
            <Form.Item
              name="title"
              rules={[
                { required: true, message: 'Please input the task title!' },
              ]}
            >
              <Input placeholder="Task Title" />
            </Form.Item>
            <Form.Item
              name="description"
              rules={[
                {
                  required: true,
                  message: 'Please input the task description!',
                },
              ]}
            >
              <Input.TextArea placeholder="Task Description" />
            </Form.Item>
            <Form.Item
              name="dueDate"
              rules={[
                { required: true, message: 'Please select the due date!' },
              ]}
            >
              <DatePicker style={{ width: '100%' }} />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Create Task
              </Button>
            </Form.Item>
          </Form>
        </Modal>

        <Modal
          title="Send Bulk Email"
          open={isEmailModalVisible}
          onCancel={() => setIsEmailModalVisible(false)}
          footer={null}
        >
          <Form form={form} onFinish={handleSendEmail}>
            <Form.Item
              name="subject"
              rules={[
                { required: true, message: 'Please input the email subject!' },
              ]}
            >
              <Input placeholder="Email Subject" />
            </Form.Item>
            <Form.Item
              name="body"
              rules={[
                { required: true, message: 'Please input the email body!' },
              ]}
            >
              <Input.TextArea placeholder="Email Body" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Send Email
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </PageLayout>
  )
}
