<template>
  <div>
    <div class="container">
      <h2>{{msg}}</h2>
    </div>
    <div class="container">
      <div class="row margin-b">
        <div class="col-md-6">
          <el-time-picker
            v-model="tDate"
            placeholder="任意时间点">
          </el-time-picker>
        </div>
        <div class="col-md-6">

          <el-date-picker
            v-model="value3"
            type="date"
            default-value="2015-09-20"
            placeholder="选择日期"
          >
          </el-date-picker>

        </div>
      </div>
      <div class="row ">
        <div class="col-md-6">
          <button class="btn btn-sm" @click="setTestPro">改变name</button>
          <button class="btn btn-sm" @click="testStorage">测试Storage</button>
          <button class="btn btn-sm" @click="testFetch">testFetch</button>
          <button class="btn btn-sm" @click="testCookie">测试Cookie</button>
          <button class="btn btn-sm" @click="">删除Cookie</button>
        </div>
        <div class="col-md-6">
          <!--<p>{{version}}</p>
          {{testPro.id}}-->
          <p>done:{{doneTodsCount}}</p>
          <v-radio name="robot" value="yes" v-model="radioValue"></v-radio>
          <v-radio name="robot" value="no" v-model="radioValue"></v-radio>
          <p>{{radioValue}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapState, mapGetters, mapMutations} from 'vuex'
  import fetch from '../../lib/fetch';
  import {testData, testPost} from '../../api/api'
  import {Storage, Cookies} from '../../lib/util'
  import VRadio from '../../components/Radio/VRadio.vue'

  export default {
    name: 'test',
    data() {
      return {
        msg: 'test',
        tDate: new Date(),
        value3: new Date('2015-09-20'),
        radioValue:''
      }
    },
    computed: {
      /* testPro(){
         return this.$store.state.testPro.id
       }*/
//     version(){
//       return '1.0'
//     },
//      ...mapState({
//        testPro: state => state.testPro
//      }),/*

//      ...mapGetters([
//        'doneTodosCount'
//      ])
      ...mapGetters({
        doneTodsCount: 'doneTodosCount'
      })
      /*      doneTodsCount(){
      //       return (this.$store.getters.doneTodos).length
              return this.$store.getters.doneTodosCount
            }*/

    },
    methods: {
      testFetch() {
        /*   var getData = fetch('/static/data.json',{id:1});
           getData.then(res=>{
             console.log(res)
           })*/
        testData().then(res => {
          console.log(res)
        });
        testPost().then(res => {
          console.log('testpost');
          console.log(res)
        })
      },
      testStorage() {
        //console.log(Storage);
        Storage.add('app', 'app localstorage text')
      },
      ...mapMutations([
        'setTestPro'
      ]),
      testCookie() {
        Cookies('appCookie', 'appCookie', {expires: 7});
      },
      deleteCookie() {

      }
    },
    components: {VRadio}
  }
</script>
<style lang="scss">
  .margin-b {
    margin-bottom: 30px;
  }
</style>
