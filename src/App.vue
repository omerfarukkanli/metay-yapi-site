<template>
  <div id="app">
    <div class="header">
      <div class="social">
        <a href="">
          <font-awesome-icon icon="fa-brands fa-facebook" /></a>
        <a href="">
          <font-awesome-icon icon="fa-brands fa-instagram" class="insta" /></a>
      </div>
      <div class="tel">
        +90 551 977 64 46
      </div>
    </div>
    <nav>
      <router-link to="/">Ana sayfa</router-link>
      <router-link to="/introduction">Bİz kimiz</router-link>
      <router-link to="/product">Ürünler</router-link>
      <router-link to="/communacition">İletişim</router-link>
      <router-link to="/sss">SSS</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style>
@import './assets/style/sytleApp/app.css';
@import './assets/style/sytleApp/header.css';
@import './assets/style/sytleApp/nav.css';
</style>
