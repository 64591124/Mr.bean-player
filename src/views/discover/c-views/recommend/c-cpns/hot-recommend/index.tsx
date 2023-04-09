import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { RecommengWrapper } from './style'
import AreaHeaderV1 from '@/components/area-header-v1'
import { ShallowEqualAPP, useAPPSelector } from '@/store'
import SongsMenuItem from '@/components/songs-menu-item'

interface Iprops {
  children?: ReactNode
}

const HotRecommend: FC<Iprops> = () => {
  const { hotRecommends } = useAPPSelector(
    (state) => ({
      hotRecommends: state.recommend.hotRecommends
    }),
    ShallowEqualAPP
  )
  return (
    <RecommengWrapper>
      <AreaHeaderV1
        title="热门推荐"
        keywords={['华语', '流行', '摇滚', '民谣', '电子']}
        moreLink="/discover/songs"
      ></AreaHeaderV1>
      <div className="recommend-list">
        {hotRecommends.map((item) => {
          return <SongsMenuItem key={item.id} itemData={item}></SongsMenuItem>
        })}
      </div>
    </RecommengWrapper>
  )
}

export default memo(HotRecommend)
