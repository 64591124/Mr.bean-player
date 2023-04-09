import styled from 'styled-components'

export const BannerWrapper = styled.div`
  .banner {
    position: relative;
    display: flex;
    height: 270px;
    justify-content: space-between;
  }
`
export const BannerLeft = styled.div`
  position: relative;
  width: 730px;

  .banner-item {
    overflow: hidden;
    height: 270px;
    .image {
      width: 100%;
    }
  }
`
export const BannerRight = styled.a.attrs({
  href: 'https://music.163.com/#/download',
  // href: 'https://d1.music.126.net/dmusic/cloudmusicsetup2.8.0.198822.exe',
  target: '_blank'
})`
  width: 250px;
  background: url(${require('@/assets/img/download.png')});
`
export const BannerControl = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  height: 63px;
  .btn {
    position: absolute;
    width: 37px;
    height: 63px;
    background-image: url(${require('@/assets/img/banner_sprite.png')});
    background-color: transparent;
    cursor: pointer;

    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }
  .left {
    left: -68px;
    background-position: 0 -360px;
  }
  .right {
    right: -68px;
    background-position: 0 -508px;
  }
`
