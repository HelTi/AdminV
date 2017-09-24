<template>
  <div class="wrapper">
    <div class="container-fluid" id="nav">
      <div class="logo float-left">
        <p>V联网</p>
      </div>
      <ul class="nav justify-content-end">
        <li class="nav-item">
          <a class="nav-link active" href="#"><i class="fa fa-user-circle-o"></i>Admin</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#"><i class="fa fa-sign-out"></i>退出</a>
        </li>
      </ul>
    </div>
    <div class="container project" id="project">
      <div class="row">
        <div class="col-md-12 project-title">
          <a class="project-star" href=""><i class="fa fa-star-o"></i></a>
          <a class="project-all" href="">所有系统</a>
        </div>
      </div>
      <div class="row" style="margin-top: 30px;">
        <div class="col-md-3 item">
          <a href="">
            <div class="box">
              <div class="box-title">
              </div>
              <div class="box-body">
                <i class="fa fa-shopping-bag"></i>
              </div>
              <div class="box-footer">
                <p>商城系统</p>
              </div>
            </div>
          </a>
        </div>
        <div class="col-md-3 item">
          <a href="">
            <div class="box">
              <div class="box-title">
              </div>
              <div class="box-body">
                <i class="fa fa-area-chart"></i>
              </div>
              <div class="box-footer">
                <p>分销系统</p>
              </div>
            </div>
          </a>

        </div>
        <div class="col-md-3 item">
          <a href="">
            <div class="box">
              <div class="box-title">
              </div>
              <div class="box-body">
                <i class="fa fa-book"></i>
              </div>
              <div class="box-footer">
                <p>商城系统</p>
              </div>
            </div>
          </a>

        </div>
        <div class="col-md-3 item">
          <a href="">
            <div class="box">
              <div class="box-title">
              </div>
              <div class="box-body">
                <i class="fa fa-photo"></i>
              </div>
              <div class="box-footer">
                <p>商城系统</p>
              </div>
            </div>
          </a>

        </div>
        <div class="col-md-3 item">
          <a href="">
            <div class="box">
              <div class="box-title">
              </div>
              <div class="box-body">
                <i class="fa fa-user"></i>
              </div>
              <div class="box-footer">
                <p>商城系统</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
    <div class="container">
      <p style="color: #c5976d; text-align: center;font-size: 12px; margin-top: 30px;">©2017 &nbsp;v联网</p>
    </div>
  </div>
</template>
<script>
  export default {
    name:'home',
    data(){
      return{

      }
    }
  }
</script>
<style scoped>

  html{
    background-color: #f4f7ed;
    height: 100vh;
  }
  .wrapper{
    background-color: #f4f7ed;
    height: 100%;
  }
  #project{
    background-color: #ffffff;
    padding: 25px 10px;
  }
  .project .project-title{

  }
  #nav{
    background-color: #af8f80;
    margin-bottom: 20px;
    color: #ffffff;
  }
  #nav .logo{
    height: 40px;
    line-height: 40px;
  }
  #nav a{
    color: #ffffff;
  }
  .project .project-title a{
    color: #eeeeee;
    text-decoration: none;
    display: block;
    float: left;
  }
  .project .project-title a.project-star{
    margin: 0 4px 10px 0;
    max-width: 100px;
    min-width: 20px;
    padding: 0 12px;
    line-height: 36px;
    color: #555;
    text-align: center;
    border-radius: 20px;
    background-color: #f0f0f0;
    vertical-align: middle;
    -moz-user-select: none;
    -webkit-user-select: none;
    user-select: none;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-right:30px;
  }
  .project .project-title a.project-all{
    margin: 0 4px 10px 0;
    max-width: 100px;
    min-width: 20px;
    padding: 0 12px;
    line-height: 36px;
    color: #ffffff;
    text-align: center;
    border-radius: 20px;
    vertical-align: middle;
    -moz-user-select: none;
    -webkit-user-select: none;
    user-select: none;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    background-color: #af8f80;
    font-size: 14px;
  }
  /*box*/
  .box{
    text-align: center;
    padding: 8px;
    cursor: pointer;
    margin-bottom: 10px;
    position: relative;
  }
  .box:hover{
    cursor: pointer;
    box-shadow:  3px 4px 8px 3px  rgba(7, 17, 27, .1);
    transition: all .3s ease-in;
  }
  .box .box-footer p{
    color: #000 !important;
  }
  .box .box-body{
    font-size: 45px;
    color:#de756f ;
  }
</style>
