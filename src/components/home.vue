<template>
  <div class="home">
    <Masthead></Masthead>
    <About></About>
    <Hype></Hype>
    <Twitch></Twitch>
  </div>
</template>


<script>
  import Masthead from '@/components/masthead'
  import About from '@/components/about'
  import Hype from '@/components/hype'
  import Twitch from '@/components/twitch'
  export default {
    name: 'home',
    components: {
      Masthead,
      About,
      Hype,
      Twitch
    },
    data () {
      return {
        asd: 'sdf'
      }
    }
  }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
