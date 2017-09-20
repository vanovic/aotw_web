<template>
  <div class='hype'>
    <div class='container'>
      <youtube
          class="hype-video"
          frameborder="0"
          allowfullscreen
          :playerHeight="height"
          :playerWidth="width"
          :video-id="videoId"
          :player-vars="{ showinfo: 0, rel: 0,  controls: 0 }">
      </youtube>
      <div class='hype-description'>
        <div class='hype-description-inner'>
          <h2>{{title}}</h2>
          <h3>{{description}}</h3>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  export default {
    name: 'hype',
    data () {
      return {
        videoId: '2Yas5UZZldI',
        height: '350px',
        width: '100%',
        title: 'Star Marine: Angels of the Warp',
        description: 'Some short description of the video and its contents, including some awesome marketing shit that whatever and stuff.'
      }
    }
  }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  div.hype {
    background: #000;
    height: auto;
  }
  div.hype div.container{
    padding-top: 0;
    padding-bottom: 0;
  }
  div.hype-description {
    padding: 30px 0;
    display: flex;
    align-items: center;
  }
  div.hype-video {

  }
  @media screen and (min-width: 1000px) {
    div.hype {
      height:350px;
    }
    div.hype-description, div.hype-video {
      display: inline-block;
    }
    div.hype-description {
      width: 39%;
      padding: 30px;
      height:350px;
      float:left;
    }
    div.hype-video {
      padding: 0;
      width:60%;
      vertical-align: top;
      height:350px;
      float:right;
    } 
  }
</style>