<template>
  <div>
    $:<input ref="input" :value="value"  v-on:input="updateValue($event.target.value)"/>
  </div>
</template>
<script>
  export default {
    name: 'inputcom',
    data() {
      return {}
    },
    props: ['value'],
    methods: {
      updateValue(value) {
        var formattedValue = value.trim().slice(0, value.indexOf('.') === -1
          ? value.length
          : value.indexOf('.') + 3);
        if (formattedValue !== value) {
          this.$refs.input.value = formattedValue
        }
        this.$emit('input', Number(formattedValue))
      }
    }
  }
</script>
<style>

</style>
