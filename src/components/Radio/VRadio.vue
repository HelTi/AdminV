<template>
  <label class="v-radio-wrapper v-radio-w-checked">
    <span class="v-radio v-radio-checked">
      <span class="v-radio-inner"></span>
      <input  class="v-radio-input" type="radio"/>
    </span>
    <slot></slot>
  </label>
</template>
<script>
  export default {
    name: 'vradio',
    model:{
      prop:'checked',
      event:'change'
    },
    props:{
      value:Number,
      default:0
    },
    data() {
      return {}
    },
    methods:{

    }
  }
</script>
<style lang="scss">
  .v-radio-wrapper{
    font-size: 12px;
    vertical-align: middle;
    display: inline-block;
    position: relative;
    white-space:nowrap;
    margin-right: 8px;
    cursor: pointer;

    .v-radio{
      display: inline-block;
      margin-right: 4px;
      white-space: nowrap;
      outline: none;
      position: relative;
      line-height: 1;
      vertical-align: middle;
      cursor: pointer;
    }
  }
  .v-radio-inner{
    display: inline-block;
    width: 14px;
    height: 14px;
    position: relative;
    top: 0;
    left: 0;
    background-color: #fff;
    border: 1px solid #dddee1;
    border-radius: 50%;
    transition: all .2s ease-in-out;
    &:after{
      position: absolute;
      width: 8px;
      height: 8px;
      left: 2px;
      top: 2px;
      border-radius: 6px;
      display: table;
      border-top: 0;
      border-left: 0;
      content: " ";
      background-color: #2d8cf0;
      opacity: 0;
      transition: all .2s ease-in-out;
      transform: scale(0);
    }
  }

  .v-radio-input{
    position: absolute;
    top: 0;
    bottom: 0;
    left:0;
    right: 0;
    z-index: 1;
    opacity: 0;
    cursor: pointer;
  }
  /*v-radio-checked */
  .v-radio-checked .v-radio-inner{
    border-color: #2d8cf0 !important;
    &:after{
      opacity: 1 !important;
      transform: scale(1);
      transition: all .2s ease-in-out;
    }
  }
</style>
