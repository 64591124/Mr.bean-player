import React, { memo, useRef, ElementRef, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { Carousel } from 'antd'

import { useAPPSelector } from '@/store'
import { shallowEqual } from 'react-redux'
import { BannerLeft, BannerRight, BannerWrapper, BannerControl } from './style'

interface Iprops {
  children?: ReactNode
}

const TopBanner: FC<Iprops> = () => {
  // 定义内部数据
  const [currentIndex, setCurrentIndex] = useState(0)
  const bannerRef = useRef<ElementRef<typeof Carousel>>(null)
  // 从store中获取数据
  const { banners } = useAPPSelector(
    (state) => ({
      banners: state.recommend.banners
    }),
    shallowEqual
  )

  // 事件处理函数
  function handlePrevClick() {
    bannerRef.current?.prev()
  }
  function handleNextClick() {
    bannerRef.current?.next()
  }
  function handleAfterChange(current: number) {
    setCurrentIndex(current)
  }

  // 获取背景图片
  let bgImageUrl = banners[currentIndex]?.imageUrl
  if (bgImageUrl) {
    bgImageUrl = bgImageUrl + '?imageView&blur=40x20'
  }
  return (
    <BannerWrapper
      style={{ background: `url('${bgImageUrl}') center center / 6000px` }}
    >
      <div className="banner w980">
        <BannerLeft>
          <Carousel
            autoplay
            ref={bannerRef}
            // dots={false}
            effect="fade"
            afterChange={handleAfterChange}
          >
            {banners.map((item) => {
              return (
                <div className="banner-item" key={item.imageUrl}>
                  <img
                    className="image"
                    src={item.imageUrl}
                    alt={item.typeTitle}
                  />
                </div>
              )
            })}
          </Carousel>
          {/* <ul className="dots">
            {banners.map((item) => {
              return (
                <li key={item.imageUrl}>
                  <span className="item"></span>
                </li>
              )
            })}
          </ul> */}
        </BannerLeft>
        <BannerRight></BannerRight>
        <BannerControl>
          <button className="btn left" onClick={handlePrevClick}></button>
          <button className="btn right" onClick={handleNextClick}></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  )
}

export default memo(TopBanner)
