import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { NavLink } from 'react-router-dom'
import { HeaderLeft, HeaderRight, HeaderWrapper } from './style'
import headerTitles from '@/assets/data/header_titles.json'
import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'

interface Iprops {
  children?: ReactNode
}

const Appheader: FC<Iprops> = () => {
  // 1.定义组件内部的状态
  // const [currentIndex, setCurrentIndex] = useState(0)

  // 组件的展示逻辑
  const showItem = (item: any, index: number) => {
    if (index < 3) {
      return (
        <NavLink
          key={item.title}
          to={item.link}
          className={({ isActive }) => {
            return isActive ? 'active' : undefined
          }}
        >
          {item.title}
          <i className="icon"></i>
        </NavLink>
      )
    } else {
      return (
        <a href={item.link} key={item.title} className="header-item">
          {item.title}
        </a>
      )
    }
  }

  return (
    <HeaderWrapper>
      <div className="content wrap-v1">
        <HeaderLeft>
          <a className="logo sprite_01" href="/">
            网易云音乐
          </a>
          <div className="header-group">
            {headerTitles.map((item, index) => {
              return (
                <div className="item" key={item.title}>
                  {showItem(item, index)}
                </div>
              )
            })}
          </div>
        </HeaderLeft>
        <HeaderRight>
          <span className="search-wrapper">
            <Input
              className="search"
              placeholder="音乐/视频/电台/用户"
              prefix={<SearchOutlined />}
            ></Input>
          </span>
          <span className="center">创作者中心</span>
          <span className="login">登录</span>
        </HeaderRight>
      </div>
      <div className="red-line"></div>
    </HeaderWrapper>
  )
}

export default memo(Appheader)
