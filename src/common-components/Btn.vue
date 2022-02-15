<template>
  <div :class="[$style.btn, cname]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'btn',
  props: {
    cname: {
      type: String,
      default: ''
    }
  },
  data () {
    return {}
  }
}
</script>

<style lang="scss" module>
  @import "~styles/element.scss";
  .btn {
    @include btn();
  }
</style>
