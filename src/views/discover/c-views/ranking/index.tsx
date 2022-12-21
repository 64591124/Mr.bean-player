import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface Iprops {
  children?: ReactNode
}

const Rinking: FC<Iprops> = () => {
  return <div>Rinking</div>
}

export default memo(Rinking)
