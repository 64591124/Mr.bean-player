import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface Iprops {
  children?: ReactNode
}

const Download: FC<Iprops> = () => {
  return <div>template</div>
}

export default memo(Download)
