import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface Iprops {
  children?: ReactNode
}

const Discover: FC<Iprops> = () => {
  return <div>Discover</div>
}

export default memo(Discover)
