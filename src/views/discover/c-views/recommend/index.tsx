import React, { memo, useState, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import hyRequest from '@/service'

interface Iprops {
  children?: ReactNode
}

export interface IBannerData {
  imageUrl: string
}

const Recommend: FC<Iprops> = () => {
  const [banners, setBanners] = useState<any[]>([])

  // 测试网络请求
  useEffect(() => {
    console.log(444)

    hyRequest
      .get({
        url: './banner'
      })
      .then((res) => {
        setBanners(res.banners)
      })
  }, [])

  return (
    <div>
      {banners.map((item, index) => {
        return <div key={index}>{item.imageUrl}</div>
      })}
    </div>
  )
}

export default memo(Recommend)
