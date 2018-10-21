<template>
  <div id="register">
    <h4>用户名</h4>
    <input v-model="username" placeholder="用户名"/>
    <!--<p class="error">当前用户名已注册</p>-->
    <h4>密码</h4>
    <input v-model="password" type="password" placeholder="密码" @keyup.enter="onRegister"/>
    <!--<p class="error">当前用户名已注册</p>-->
    <el-button size="medium" @click="onRegister">立即注册</el-button>
    <p class="notice">已有账号？<router-link to="/login">立即登录</router-link></p>
  </div>
</template>

<script src="./template.js"></script>

<style src="../Login/template.less" lang="less"></style>
