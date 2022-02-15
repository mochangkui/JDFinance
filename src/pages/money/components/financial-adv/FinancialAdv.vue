<template>
  <Panel :cname="$style.panel">
    <img src="./images/59f97d68Ne53fda5b.png" alt="">
  </Panel>
</template>

<script>
import Panel from '@/common-components/Panel'
export default {
  name: 'MoneyFinancialAdv',
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
    img {
      width: 100%;
      height: 142px;
    }
  }
</style>
