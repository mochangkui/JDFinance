<template>
  <section :class="[$style.panel, cname]">
    <h4>{{title}}</h4>
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: 'panel',
  props: {
    cname: {
      type: String,
      default: ''
    },
    title: {
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
@import '~styles/element.scss';
.panel {
  @include panel();
}
</style>
