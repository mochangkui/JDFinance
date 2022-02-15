<template>
  <Panel :cname="$style.panel" title="- 新手特权 -">
    <section :class="$style.content">
      <div :class="$style.item">
        <h4>下载APP<span :class="$style.red">送888元礼包</span></h4>
        <p :class="$style.gray">新手专享</p>
        <img src="./images/59e5f0ebNec4cf494.png" alt="">
      </div>
      <div :class="$style.item">
        <ul>
          <li>
            <img src="./images/58e60952N7fdb2b85.png" alt="">
            <h4 :class="$style.red">领128元新手礼包</h4>
            <p :class="$style.gray">立即开通</p>
          </li>
          <li>
            <img src="./images/58e6095fNd3dc3f39.png" alt="">
            <h4>打白条<span :class="$style.red">享免息</span></h4>
            <p :class="$style.gray">立即开通享豪礼</p>
          </li>
        </ul>
      </div>
    </section>
  </Panel>
</template>

<script>
import Panel from '@/common-components/Panel'
export default {
  name: 'novice',
  components: {
    Panel
  }
}
</script>

<style lang='scss' module>
  @import '~styles/element.scss';
  .panel {
    > h4 {
      border-bottom: solid 1PX #ddd;
    }
    .content {
      @include flex(row);
      .item {
        width: 50%;
        box-sizing: border-box;
        &:first-child {
          padding: 32px 20px;
          text-align: center;
          border-right: 1PX solid #ddd;
          img {
            width: 132px;
            height: 132px;
            margin: 20px auto 0;
          }
          h4 {
            font-size: 26px;
            line-height: 40px;
            .red {
              color: red;
            }
          }
          .gray {
            margin-top: 5px;
            color: #999;
            font-size: 24px;
          }
        }
        ul {
          li {
            width: 100%;
            height: 144px;
            padding: 32px 28px;
            box-sizing: border-box;
            &:first-child {
              border-bottom: solid 1PX #ddd;
            }
            img {
              width: 80px;
              height: 80px;
              float: right;
            }
            h4 {
              font-size: 26px;
              white-space: nowrap;
              text-overflow: ellipsis;
              overflow: hidden;
              text-align: left;
              line-height: 40px;
            }
            .red {
              color: red;
            }
            .gray {
              margin-top: 5px;
              color: #999;
              font-size: 24px;
            }
          }
        }
      }
    }
  }
</style>
