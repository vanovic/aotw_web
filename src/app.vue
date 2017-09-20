<template>
  <div id="app">
    <Navigation></Navigation>
    <router-view></router-view>
    <Foot></Foot>
  </div>
</template>

<script>
  import Navigation from '@/components/navigation'
  import Foot from '@/components/footer'
  export default {
    name: 'app',
    components: {
      Navigation,
      Foot
    },
    data () {
      return {
        asd: 'asd'
      }
    }
  }
</script>

<style>
  * {
    box-sizing: border-box;
  }
  a { cursor: pointer; }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    padding-top: 100vh;
    z-index: 0;
  }
  @media screen and (min-width: 768px) {
    #app {
      padding-top: 700px;
    }
  }
  body {
    font-family: 'Helvetica Neue', sans-serif;
    font-weight: 400;
    z-index: 0;
    background: #121212;
  }
  div.container {
    max-width: 1140px;
    margin: auto;
    padding: 50px 30px;
  }
  h1 {
    font-size: 28px;
  }
  h2 {
    font-size: 22px;
  }
  h3 {
    font-size: 19px;
  }
  h4 {
    font-size: 17px;
  }
  h5 {
    font-size: 16px;
  }
  h1, h2, h3, h4, h5, h6 {
    color: #fff;
    max-width: 1100px;
    margin: auto;
    line-height:1.2;
    padding:10px 0;
  }
  p {
    color:#fff;
  }
</style>
