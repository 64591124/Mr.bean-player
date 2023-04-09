import React, { memo, useState, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import hyRequest from '@/service'
import { useAPPDispatch } from '@/store'
import {
  fetchRankingDataAction,
  // fetchBannerDataAction,
  // fetchHotRecommendAction,
  // fetchNewAlbumAction
  fetchRecommendDataAction
} from './store/recommend'
import TopBanner from './c-cpns/top-banner'
import { RecommendWrapper } from './style'
import HotRecommend from './c-cpns/hot-recommend'
import NewAlbum from './c-cpns/new-album'
import TopRanking from './c-cpns/top-ranking'

interface Iprops {
  children?: ReactNode
}

export interface IBannerData {
  imageUrl: string
}

const Recommend: FC<Iprops> = () => {
  const [banners, setBanners] = useState<any[]>([])

  const dispatch = useAPPDispatch()
  // 测试网络请求
  useEffect(() => {
    // dispatch(fetchBannerDataAction())
    // dispatch(fetchHotRecommendAction())
    // dispatch(fetchNewAlbumAction())
    dispatch(fetchRecommendDataAction())
    dispatch(fetchRankingDataAction())
    //   hyRequest
    //     .get({
    //       url: './banner'
    //     })
    //     .then((res) => {
    //       setBanners(res.banners)
    //     })
  }, [])

  return (
    <RecommendWrapper>
      <TopBanner></TopBanner>
      <div className="content w980">
        <div className="left">
          <HotRecommend></HotRecommend>
          <NewAlbum></NewAlbum>
          <TopRanking></TopRanking>
        </div>
        <div className="right">right</div>
      </div>
    </RecommendWrapper>
  )
}

export default memo(Recommend)
