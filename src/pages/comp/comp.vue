<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        comp
        <button @click="checkPro">checkPro</button>
      </div>
      <div class="col-md-6">
        <v-radio class="aaa" v-model="radiovalue"></v-radio>
        <p>{{radiovalue}}</p>
      </div>
    </div>
  </div>
</template>
<script>
  import VRadio from '../../components/Radio/VRadio.vue'
  import {checkHasPro,scrollTop} from '../../lib/public'
  export default {
    name: 'comp',
    data() {
      return {
        radiovalue:'',
        rname:'animal'
      }
    },
    methods:{
      checkPro(){
        var arr=['a','b','c'];
        var obj ={
          a:'aa',
          b:'bb',
          'd':'dd'
        };
        console.log(checkHasPro('a',arr))
        console.log(checkHasPro('D',arr))
        console.log(checkHasPro('a',obj))
        console.log(checkHasPro('c',obj))
        console.log(checkHasPro('d',obj))
      }
    },
    components: {VRadio}
  }
</script>
<style>

</style>
