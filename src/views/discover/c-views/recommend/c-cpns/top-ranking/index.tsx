import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { RankingWrapper } from './style'
import AreaHeaderV1 from '@/components/area-header-v1'
import { useAPPSelector } from '@/store'
import TopRankingItem from '../top-ranking-item'

interface Iprops {
  children?: ReactNode
}

const TopRanking: FC<Iprops> = () => {
  const { rankings } = useAPPSelector((state) => ({
    rankings: state.recommend.rankings
  }))
  return (
    <RankingWrapper>
      <AreaHeaderV1 title="榜单" moreLink="/discover/ranking"></AreaHeaderV1>
      <div className="content">
        {rankings.map((item) => {
          return <TopRankingItem key={item.id} itemData={item}></TopRankingItem>
        })}
      </div>
    </RankingWrapper>
  )
}

export default memo(TopRanking)
