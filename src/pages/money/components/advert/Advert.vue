<template>
  <Panel title="神劵满" :cname="$style.panel">
    <img src="./images/597a95d4Ne01da140.png" alt="">
  </Panel>
</template>

<script>
import Panel from '@/common-components/Panel'
export default {
  name: 'MoneyAdvert',
  components: {
    Panel
  }
}
</script>

<style lang="scss" module>
  .panel {
    >h4 {
      display: none;
    }
    .content {
      img {
        width: 100%;
        height: 230px;
        display: block;
      }
    }
  }
</style>
