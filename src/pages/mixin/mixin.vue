<template>
  <div>
    <p>mixins</p>
  </div>
</template>
<script>
  import testMixin from '../../mixins/testMixin'

  export default {
    name: 'mixin',
    mixins:[testMixin],
    data() {
      return {}
    }
  }
</script>
<style>

</style>
