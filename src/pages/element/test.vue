<template>
  <div>
    <div class="container">
      <h2>{{msg}}</h2>
    </div>
    <div class="container">
      <div class="row">
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
    </div>
  </div>
</template>
<script>
  export default {
    name: 'test',
    data() {
      return {
        msg: 'test',
        tDate: new Date(),
        value3: new Date('2015-09-20')
      }
    }
  }
</script>
<style>

</style>
