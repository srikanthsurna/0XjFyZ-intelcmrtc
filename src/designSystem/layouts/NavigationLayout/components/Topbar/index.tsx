import { useUserContext } from '@/core/context'
import { Utility } from '@/core/helpers/utility'
import { useDesignSystem } from '@/designSystem/provider'
import { MenuOutlined } from '@ant-design/icons'
import { Avatar, Flex, Menu, Tag } from 'antd'
import { useRouter } from 'next/navigation'
import { NavigationItem } from '../../types'

import { Logo } from '../Logo'

interface Props {
  keySelected?: string
  items: NavigationItem[]
}

export const Topbar: React.FC<Props> = ({ keySelected, items }) => {
  const router = useRouter()

  const { user, checkRole } = useUserContext()
  const { isMobile } = useDesignSystem()

  if (isMobile) {
    return <></>
  }

  return (
    <>
      <Flex align="center" className="px-4">
        <Flex>
          <Logo height={40} />
        </Flex>

        <Flex vertical flex={1}>
          <Menu
            mode="horizontal"
            items={items}
            selectedKeys={[keySelected]}
            overflowedIndicator={<MenuOutlined />}
            style={{ flex: 1 }}
          />
        </Flex>

        <Flex align="center" gap="middle">
          {checkRole('ADMIN') && (
            <Tag color="red" bordered={false}>
              Admin
            </Tag>
          )}

          {user && (
            <Avatar
              src={user.pictureUrl}
              alt={user.name}
              size="default"
              onClick={() => router.push('/profile')}
              style={{ cursor: 'pointer' }}
            >
              {Utility.stringToInitials(user.name)}
            </Avatar>
          )}
        </Flex>
      </Flex>
    </>
  )
}
