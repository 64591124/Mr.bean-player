import styled from 'styled-components'

export const RecommendWrapper = styled.div`
  /* > 直接子元素 可能后面还会有content元素 避免冲突 */
  > .content {
    border: 1px solid #d3d3d3;
    display: flex;
    background-image: url(${require('@/assets/img/wrap-bg.png')});
    > .left {
      padding: 20px;
      width: 729px;
    }
    > .right {
      margin-left: 1px;
      width: 250px;
    }
  }
`
