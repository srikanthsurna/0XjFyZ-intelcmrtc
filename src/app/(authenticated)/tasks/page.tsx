'use client'

import { useState, useEffect } from 'react'
import { Typography, Table, Tag, Space, Select, Button } from 'antd'
import {
  CheckCircleOutlined,
  SyncOutlined,
  ClockCircleOutlined,
} from '@ant-design/icons'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function TaskManagementPage() {
  const router = useRouter()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()
  const [tasks, setTasks] = useState<any[]>([])

  const {
    data: userTasks,
    isLoading: isLoadingUserTasks,
    refetch: refetchUserTasks,
  } = Api.userTask.findMany.useQuery({
    where: { userId: user?.id },
    include: { task: true },
  })

  const {
    data: allTasks,
    isLoading: isLoadingAllTasks,
    refetch: refetchAllTasks,
  } = Api.task.findMany.useQuery({
    include: { userTasks: { include: { user: true } } },
  })

  const { mutateAsync: updateUserTask } = Api.userTask.update.useMutation()

  useEffect(() => {
    if (user?.checkRole('admin')) {
      setTasks(allTasks || [])
    } else {
      setTasks(userTasks?.map(ut => ut.task) || [])
    }
  }, [user, userTasks, allTasks])

  const handleStatusChange = async (taskId: string, newStatus: string) => {
    try {
      await updateUserTask({
        where: { id: taskId },
        data: { status: newStatus },
      })
      enqueueSnackbar('Task status updated successfully', {
        variant: 'success',
      })
      if (user?.checkRole('admin')) {
        refetchAllTasks()
      } else {
        refetchUserTasks()
      }
    } catch (error) {
      enqueueSnackbar('Failed to update task status', { variant: 'error' })
    }
  }

  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Due Date',
      dataIndex: 'dueDate',
      key: 'dueDate',
      render: (date: string) => dayjs(date).format('YYYY-MM-DD'),
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status: string, record: any) => (
        <Select
          value={status}
          onChange={value => handleStatusChange(record.id, value)}
          style={{ width: 120 }}
        >
          <Select.Option value="pending">
            <ClockCircleOutlined style={{ color: '#faad14' }} /> Pending
          </Select.Option>
          <Select.Option value="in_progress">
            <SyncOutlined spin style={{ color: '#1890ff' }} /> In Progress
          </Select.Option>
          <Select.Option value="completed">
            <CheckCircleOutlined style={{ color: '#52c41a' }} /> Completed
          </Select.Option>
        </Select>
      ),
    },
  ]

  if (user?.checkRole('admin')) {
    columns.push({
      title: 'Assigned To',
      key: 'assignedTo',
      render: (text: string, record: any) => (
        <>
          {record.userTasks?.map((ut: any) => (
            <Tag key={ut.id}>{ut.user.name}</Tag>
          ))}
        </>
      ),
    })
  }

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '24px' }}>
        <Title level={2}>Task Management</Title>
        <Text>
          {user?.checkRole('admin')
            ? 'View all tasks and their statuses to monitor overall progress.'
            : 'View your assigned tasks and update their statuses.'}
        </Text>

        <Table
          columns={columns}
          dataSource={tasks}
          rowKey="id"
          loading={isLoadingUserTasks || isLoadingAllTasks}
          style={{ marginTop: 24 }}
        />
      </div>
    </PageLayout>
  )
}
