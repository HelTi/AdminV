<template>
  <div class="login-box">
    <div class="login-logo">
      <a href="/">
        <b>V</b>联网
      </a>
    </div>
    <div class="login-body">
      <p class="login-box-msg">登陆您的账号</p>
      <form action="#" method="post">
        <div class="form-group has-icon">
          <input type="text" class="form-c" placeholder="请输入用户名" autocomplete="false">
          <span class="form-c-icon">
                    <i class="fa fa-user-circle-o"></i>
                </span>
        </div>
        <div class="form-group has-icon">
          <input type="password" class="form-c" placeholder="请输入密码" autocomplete="false">
          <span class="form-c-icon">
                    <i class="fa fa-key"></i>
                </span>
        </div>
        <div class="form-group clearfix">
          <input style="width: 45%; float: left;" type="text" class="form-c" placeholder="请输入验证码">
          <span style="display: block; float: right;height: 34px;">
                   <img src="" style="display: block;height: 100%;"/>
                </span>
        </div>
        <div class="form-group">
          <button class="btn">登    录</button>
        </div>
      </form>
      <p style="color: #c5976d; text-align: center;font-size: 12px; margin-top: 30px;">©2017 &nbsp;v联网</p>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'login',
    data() {
      return {}
    }
  }
</script>
<style scoped>
  html, body {
    background-color: #d2d6de;
  }

  .login-box {
    width: 360px;
    margin: 7% auto;
  }

  .login-logo {
    text-align: center;
  }

  .login-logo a {
    font-size: 30px;
    color: #cb9a60;
  }

  .login-logo a:hover {
    text-decoration: none;
  }

  .login-body {
    background-color: #ffffff;
    padding: 20px;
    border-top: 0;
    color: #666;
    border-radius: 8px;
  }

  .login-box-msg {
    margin: 0;
    text-align: center;
    padding: 0 20px 20px 20px;
  }

  /*form-group*/
  .form-group {
    margin-bottom: 15px;
  }

  .has-icon {
    position: relative;
  }

  .form-c {
    display: block;
    width: 100%;
    height: 34px;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42857143;
    color: #555;
    background-color: #fff;
    background-image: none;
    border: 1px solid #d2d6de;
    border-radius: 0;
  }

  .form-c:focus {
    border-color: #ffc107;
    outline: none;
  }

  /*右边图标*/
  .has-icon .form-c {
    padding-right: 42.5px;
  }

  .form-c-icon {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 2;
    display: block;
    width: 34px;
    height: 34px;
    line-height: 34px;
    text-align: center;
    pointer-events: none;
    color: #777;
  }

  .btn {
    width: 100%;
    text-decoration: none;
    height: 35px;
    border-radius: 15px;
    border: none;
    background-color: #cb9a60;
    color: #ffffff;
    outline: none !important;
    cursor: pointer;
  }

  .btn:hover {
    cursor: pointer;
    box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.24), 0 1px 5px 0 rgba(0, 0, 0, 0.19);
  }
</style>
