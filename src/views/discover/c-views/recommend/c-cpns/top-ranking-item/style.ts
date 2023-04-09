import styled from 'styled-components'

export const RankingItemWrapper = styled.div`
  &:last-child {
    width: 228px;
  }
  width: 230px;

  .header {
    display: flex;
    height: 120px;
    padding: 20px 0 0 19px;

    .image {
      position: relative;
      height: 80px;
    }

    .info {
      width: 116px;
      margin: 6px 0 0 10px;

      div > h3 {
        font-weight: bold !important;
      }

      .btn {
        display: flex;
        margin-top: 8px;
        .play,
        .favor {
          width: 22px;
          height: 22px;
        }

        .play {
          background-position: -267px -205px;
          margin-right: 8px;

          &:hover {
            background-position: -267px -235px;
          }
        }

        .favor {
          background-position: -300px -205px;

          &:hover {
            background-position: -300px -235px;
          }
        }
      }
    }
  }

  .list {
    padding-left: 10px;
    .item {
      display: flex;
      height: 32px;
      line-height: 32px;

      :nth-child(-n + 3) .index {
        color: #c10d0c;
      }

      .index {
        width: 35px;
        text-align: center;
      }

      .name {
        width: 185px;
        font-size: 12px;
      }

      &:hover .name {
        width: 96px;
      }

      &:hover .oper {
        visibility: visible;
        width: 93px;
      }

      .oper {
        display: flex;
        align-items: center;
        visibility: hidden;
        width: 0;
        text-indent: -9999px;

        .btn {
          width: 17px;
          height: 17px;
          margin-left: 8px;
          cursor: pointer;
        }

        .play {
          background-position: -267px -268px;
        }

        .add {
          position: relative;
          top: 2px;
          background-position: 0 -700px;
        }

        .favor {
          background-position: -297px -268px;
        }
      }
    }
  }

  .footer {
    height: 33px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    a {
      margin-right: 15px;
      color: #000;
    }
  }
`
