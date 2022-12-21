import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface Iprops {
  children?: ReactNode
}

const Song: FC<Iprops> = () => {
  return <div>template</div>
}

export default memo(Song)
