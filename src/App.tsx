import React from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router'

function App() {
  return (
    <div className="App">
      <div className="nav">
        <link to="/discover">发现音乐</link>
        <link to="/mine">我的音乐</link>
        <link to="/focus">关注</link>
        <link to="/download">下载客户端</link>
      </div>
      <div className="main">{useRoutes(routes)}</div>
    </div>
  )
}

export default App
