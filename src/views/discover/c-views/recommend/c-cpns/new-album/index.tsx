import React, { memo, useRef } from 'react'
import type { FC, ReactNode, ElementRef } from 'react'
import { Carousel } from 'antd'
import { AlbumWrapper } from './style'
import AreaHeaderV1 from '@/components/area-header-v1'
import { useAPPSelector } from '@/store'
import NewAlbumItem from '@/components/new-album-item'

interface Iprops {
  children?: ReactNode
}

const NewAlbum: FC<Iprops> = () => {
  const bannerRef = useRef<ElementRef<typeof Carousel>>(null)
  // reducer中获取数据
  const { NewAlbum } = useAPPSelector((state) => ({
    NewAlbum: state.recommend.newAlbum
  }))

  // 事件处理函数
  function handlePrevClick() {
    bannerRef.current?.prev()
  }
  function handleNextClick() {
    bannerRef.current?.next()
  }
  return (
    <AlbumWrapper>
      <AreaHeaderV1 title="新碟上架" moreLink="/discover/album"></AreaHeaderV1>
      <div className="content">
        <button
          className="arrow sprite_02 arrow-left"
          onClick={handlePrevClick}
        ></button>
        <div className="banner">
          <Carousel ref={bannerRef} dots={false} speed={2000}>
            {[0, 1].map((item) => {
              return (
                <div key={item}>
                  <div className="album-list">
                    {NewAlbum.slice(item * 5, (item + 1) * 5).map((album) => {
                      return (
                        <NewAlbumItem key={album.id} itemData={album}>
                          {album.name}
                        </NewAlbumItem>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </Carousel>
        </div>
        <button
          className="arrow sprite_02 arrow-right"
          onClick={handleNextClick}
        ></button>
      </div>
    </AlbumWrapper>
  )
}

export default memo(NewAlbum)
