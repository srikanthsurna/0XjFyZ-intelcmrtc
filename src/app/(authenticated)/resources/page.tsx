'use client'

import { useState } from 'react'
import { Typography, Input, Table, Space, Button, Modal, Form } from 'antd'
import {
  SearchOutlined,
  PlusOutlined,
  EditOutlined,
  DeleteOutlined,
} from '@ant-design/icons'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function ResourcesPage() {
  const router = useRouter()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()
  const [searchTerm, setSearchTerm] = useState('')
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [form] = Form.useForm()
  const [editingResource, setEditingResource] = useState<Resource | null>(null)

  const {
    data: resources,
    isLoading,
    refetch,
  } = Api.resource.findMany.useQuery({
    where: {
      OR: [
        { name: { contains: searchTerm, mode: 'insensitive' } },
        { description: { contains: searchTerm, mode: 'insensitive' } },
      ],
    },
  })

  const { mutateAsync: createResource } = Api.resource.create.useMutation()
  const { mutateAsync: updateResource } = Api.resource.update.useMutation()
  const { mutateAsync: deleteResource } = Api.resource.delete.useMutation()

  const handleSearch = (value: string) => {
    setSearchTerm(value)
  }

  const handleCreateOrEdit = async (values: any) => {
    try {
      if (editingResource) {
        await updateResource({
          where: { id: editingResource.id },
          data: values,
        })
        enqueueSnackbar('Resource updated successfully', { variant: 'success' })
      } else {
        await createResource({ data: values })
        enqueueSnackbar('Resource created successfully', { variant: 'success' })
      }
      setIsModalVisible(false)
      form.resetFields()
      setEditingResource(null)
      refetch()
    } catch (error) {
      enqueueSnackbar('Error saving resource', { variant: 'error' })
    }
  }

  const handleDelete = async (id: string) => {
    try {
      await deleteResource({ where: { id } })
      enqueueSnackbar('Resource deleted successfully', { variant: 'success' })
      refetch()
    } catch (error) {
      enqueueSnackbar('Error deleting resource', { variant: 'error' })
    }
  }

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'URL',
      dataIndex: 'resourceUrl',
      key: 'resourceUrl',
      render: (text: string) => (
        <a href={text} target="_blank" rel="noopener noreferrer">
          {text}
        </a>
      ),
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_: any, record: Resource) => (
        <Space>
          {user?.globalRole === 'admin' && (
            <>
              <Button
                icon={<EditOutlined />}
                onClick={() => {
                  setEditingResource(record)
                  form.setFieldsValue(record)
                  setIsModalVisible(true)
                }}
              >
                Edit
              </Button>
              <Button
                icon={<DeleteOutlined />}
                danger
                onClick={() => handleDelete(record.id)}
              >
                Delete
              </Button>
            </>
          )}
        </Space>
      ),
    },
  ]

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '24px' }}>
        <Title level={2}>Resources</Title>
        <Text>View and search for resources relevant to your work.</Text>

        <Space style={{ marginTop: 16, marginBottom: 16 }}>
          <Input
            placeholder="Search resources"
            prefix={<SearchOutlined />}
            onChange={e => handleSearch(e.target.value)}
            style={{ width: 300 }}
          />
          {user?.globalRole === 'admin' && (
            <Button
              type="primary"
              icon={<PlusOutlined />}
              onClick={() => {
                setEditingResource(null)
                form.resetFields()
                setIsModalVisible(true)
              }}
            >
              Add Resource
            </Button>
          )}
        </Space>

        <Table
          columns={columns}
          dataSource={resources}
          loading={isLoading}
          rowKey="id"
        />

        <Modal
          title={editingResource ? 'Edit Resource' : 'Add Resource'}
          open={isModalVisible}
          onCancel={() => {
            setIsModalVisible(false)
            setEditingResource(null)
            form.resetFields()
          }}
          footer={null}
        >
          <Form form={form} onFinish={handleCreateOrEdit} layout="vertical">
            <Form.Item
              name="name"
              label="Name"
              rules={[
                { required: true, message: 'Please input the resource name!' },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="description"
              label="Description"
              rules={[
                {
                  required: true,
                  message: 'Please input the resource description!',
                },
              ]}
            >
              <Input.TextArea />
            </Form.Item>
            <Form.Item
              name="resourceUrl"
              label="URL"
              rules={[
                { required: true, message: 'Please input the resource URL!' },
                { type: 'url', message: 'Please enter a valid URL!' },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                {editingResource ? 'Update' : 'Create'}
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </PageLayout>
  )
}
