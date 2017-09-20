<template>
  <div class='about'>
    <div class='container'>
      <h1>{{title}}</h1>
      <h2>{{description}}</h2>
      <button>Enlist Today</button>
    </div>
  </div>
</template>


<script>
  export default {
    name: 'about',
    data () {
      return {
        title: "Angels of the Warp is Star Citizen's premiere combined arms mercenary organization.",
        description: "We will join the living history of Star Citizen as the most feared combined arms mercenary force in the 'verse.. We will be the first organization contracted for every war, skirmish, siege or desperate defense of a strategic outpost. Our professional conduct will speak for itself."
      }
    }
  }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  div.about {
    padding: 20px 0;
  }
  button {
    margin-top: 40px;
    padding: 10px 20px;
    background: white;
    border: none;
    color: #333;
    border-radius: 10px;
    font-size: 20px;
  }
  @media screen and (min-width: 1024px) {
    div.about {
    }
  }
</style>
