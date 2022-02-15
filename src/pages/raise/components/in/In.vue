<template>
  <Panel title="-In货推荐-" :cname="$style.panel">
    <section :class="$style.content">
      <div :class="$style.item" v-for="item in items" :key="item.catory">
        <img :src="item.catory" alt="">
        <section :class="$style.list">
          <div :class="$style.product" v-for="product in item.list" :key="product.img">
            <img :src="product.img" alt="">
            <p :class="$style.title">{{item.title}}</p>
            <p :class="$style.price">
              <em>{{product.price}}</em>起
            </p>
            <article>
              <div :class="$style.progress">
                <div :class="$style.inner" :style="{width: product.progress + '%'}"></div>
              </div>
              <p>{{product.progress}}%</p>
            </article>
            <label>精选</label>
          </div>
        </section>
      </div>
    </section>
  </Panel>
</template>

<script>
import Panel from '@/common-components/Panel'
export default {
  name: 'RaiseIn',
  components: {
    Panel
  },
  data () {
    return {
      items: [{
        catory: require('./images/5846a953N66b67d05.png'),
        list: [{
          img: require('./images/5a33a171N18c9c80a.jpg'),
          title: '双响炮蓝牙音箱',
          price: '29.00',
          progress: 127
        }, {
          img: require('./images/5a37676dNc31da9ea.jpg'),
          title: '脑波相机',
          price: '998.00',
          progress: 259
        }]
      }, {
        catory: require('./images/5846d8e7N20446dbd.png'),
        list: [{
          img: require('./images/5a33a171N18c9c80a.jpg'),
          title: '双响炮蓝牙音箱',
          price: '29.00',
          progress: 127
        }, {
          img: require('./images/5a37676dNc31da9ea.jpg'),
          title: '脑波相机',
          price: '998.00',
          progress: 259
        }]
      }, {
        catory: require('./images/5846d310Ne93f00c9.png'),
        list: [{
          img: require('./images/5a33a171N18c9c80a.jpg'),
          title: '双响炮蓝牙音箱',
          price: '29.00',
          progress: 127
        }, {
          img: require('./images/5a37676dNc31da9ea.jpg'),
          title: '脑波相机',
          price: '998.00',
          progress: 259
        }]
      }]
    }
  }
}
</script>

<style lang="scss" module>
  @import '~styles/element.scss';
  .item {
    margin-bottom: 40px;
    >img {
      width: 100%;
      height: 170px;
    }
    .list {
      @include flex(row);
      .product {
        position: relative;
        width: 50%;
        height: 396px;
        background: rgba(0, 0, 0, .02);
        text-align: center;
        img {
          width: 180px;
          height: 180px;
          margin: 44px auto 20px;
        }
        .title {
          font-size: 28px;
          color: #444;
        }
        .price {
          font-size:20px;
          color: #999;
          margin-left: 4px;
          height: 48px;
          line-height: 48px;
          em {
            font-size: 36px;
            color: #ff3232;
            margin-right: 4px;
            &::before {
              content: "￥";
              font-size: 28px;
            }
          }
        }
        article {
          @include flex(row);
          align-items: center;
          justify-content: center;
          height: 60px;
          line-height: 60px;
          .progress {
            width: 144px;
            height: 10px;
            background: #f6e6e6;
            border-radius: 22px;
            margin-right: 10px;
            .inner {
              width: 40%;
              max-width: 100%;
              height: 10px;
              background-image: linear-gradient(270deg, #F55 1%, #FF9C31 100%);
              border-radius: 22px;
            }
          }
          p {
            font-size: 26px;
            color: #999;
          }
        }
        label {
          position: absolute;
          left: 0;
          top: 0;
          font-family: PingFangSC-Medium;
          font-size: 24px;
          color: #ff0000;
          text-align: center;
          padding: 0.1rem 0.2rem;
          background-image: linear-gradient(-35deg, #C1C1C1 0, #ACACAC 100%);
        }
      }
    }
  }
</style>
