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

export const Mobilebar: React.FC<Props> = ({ keySelected, items }) => {
  const router = useRouter()

  const { user, checkRole } = useUserContext()
  const { isMobile } = useDesignSystem()

  if (!isMobile) {
    return <></>
  }

  return (
    <>
      <Flex align="center" justify="space-between" className="px-2">
        <Flex>
          {user && (
            <Flex>
              <Avatar
                src={user.pictureUrl}
                alt={user.name}
                size="small"
                onClick={() => router.push('/profile')}
                style={{ cursor: 'pointer' }}
              >
                {Utility.stringToInitials(user.name)}
              </Avatar>
            </Flex>
          )}

          <Logo height={40} />
        </Flex>

        <Flex align="center">
          {checkRole('ADMIN') && (
            <Tag color="red" bordered={false}>
              Admin
            </Tag>
          )}

          <Menu
            mode="horizontal"
            items={items}
            selectedKeys={[keySelected]}
            style={{ width: 46 }}
            overflowedIndicator={<MenuOutlined />}
          />
        </Flex>
      </Flex>
    </>
  )
}
