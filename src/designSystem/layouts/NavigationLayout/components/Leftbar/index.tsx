import { useDesignSystem } from '@/designSystem/provider'
import { Flex, Menu } from 'antd'

interface Props {
  keySelected?: string
  items: { key: string; label: string; onClick: () => void }[]
  itemsBottom?: { key: string; label: string; onClick: () => void }[]
}

export const Leftbar: React.FC<Props> = ({
  keySelected,
  items,
  itemsBottom,
}) => {
  const { isMobile } = useDesignSystem()

  if (isMobile || items.length === 0) {
    return <></>
  }

  return (
    <Flex
      vertical
      style={{ width: '250px' }}
      justify="space-between"
      className="pb-4"
    >
      <Menu
        mode="inline"
        inlineIndent={16}
        items={items}
        selectedKeys={[keySelected]}
        style={{ width: '100%' }}
      />
      <Menu
        mode="inline"
        inlineIndent={16}
        items={itemsBottom}
        style={{ width: '100%' }}
      />
    </Flex>
  )
}
