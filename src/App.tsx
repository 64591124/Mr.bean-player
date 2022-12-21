import React, { Suspense } from 'react'
import { useRoutes, Link } from 'react-router-dom'
// import { shallowEqual } from 'react-redux'
import routes from './router'
import { useAPPSelector, useAPPDispatch, ShallowEqualAPP } from './store'
import { changeMessageAction } from './store/modules/counter'
function App() {
  const { count, message } = useAPPSelector(
    (state) => ({
      count: state.counter.count,
      message: state.counter.message
    }),
    ShallowEqualAPP // 不要自动刷新 浅层比较
  )

  // 事件处理函数
  const dispatch = useAPPDispatch()
  function handChangeMessage() {
    dispatch(changeMessageAction('哈哈哈哈哈哈'))
  }
  
  return (
    <div className="App">
      <div className="nav">
        <Link to="/discover">发现音乐</Link>
        <Link to="/mine">我的音乐</Link>
        <Link to="/focus">关注</Link>
        <Link to="/download">下载客户端</Link>
      </div>
      <button onClick={handChangeMessage}>修改</button>
      <h2>当前计数： {count}</h2>
      <h2>当前消息： {message}</h2>
      <Suspense fallback="loading">
        <div className="main">{useRoutes(routes)}</div>
      </Suspense>
    </div>
  )
}

export default App
