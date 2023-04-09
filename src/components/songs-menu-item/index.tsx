import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { MenuItemWrapper } from './styled'
import { formatCount, getImageSize } from '@/utils/format'
interface Iprops {
  children?: ReactNode
  itemData?: any
}

const SongMenuItem: FC<Iprops> = (props) => {
  const { itemData } = props
  return (
    <MenuItemWrapper>
      <div className="top sprite_cover">
        <img src={getImageSize(itemData.picUrl, 140)} alt="" />
        <div className="cover sprite_cover">
          <div className="info sprite_cover">
            <span className="count">
              <i className="sprite_icon headset"></i>
              <span>{formatCount(itemData.playCount)}</span>
            </span>
            <i className="play sprite_icon"></i>
          </div>
        </div>
      </div>
      <div className="bottom">{itemData.name}</div>
    </MenuItemWrapper>
  )
}

export default memo(SongMenuItem)
