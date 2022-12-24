import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface Iprops {
  children?: ReactNode
}

const Appfooter: FC<Iprops> = () => {
  return <h2>footer</h2>
}

export default memo(Appfooter)
