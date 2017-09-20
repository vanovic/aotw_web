<template>
  <div id='masthead' class="masthead">
    <div class="alpha">
      <img class='logo' src="../assets/logo.png"/>
    </div>
    <youtube
      class="video"
      frameborder="0"
      allowfullscreen
      loop="1"
      :playerHeight="height"
      :playerWidth="width"
      :video-id="videoId"
      :player-vars="{ autoplay: 1, start: 30, showinfo: 0, rel: 0, loop: 1, controls: 0, playlist:'2Yas5UZZldI' }"
      :mute="true">
    </youtube>
  </div>
</template>


<script>
  export default {
    name: 'masthead',
    data () {
      return {
        player: {},
        playState: true,
        videoId: '2Yas5UZZldI',
        width: '1920px',
        height: '1080px'
      }
    },
    methods: {
      ready (player) {
        this.player = player
      },
      playing (player) {
        // The player is playing a video.
      },
      change () {
        // when you change the value, the player will also change.
        // If you would like to change `playerVars`, please change it before you change `videoId`.
        // If `playerVars.autoplay` is 1, `loadVideoById` will be called.
        // If `playerVars.autoplay` is 0, `cueVideoById` will be called.
        this.videoId = 'another video id'
      },
      start () {
        this.player.playVideo()
      },
      stop () {
        this.player.stopVideo()
      },
      pause () {
        console.log('pause')
        this.player.pauseVideo()
      }
    },
    beforeMount: function () {
      window.addEventListener('scroll', event => {
        if (document.getElementById('masthead').clientHeight > window.pageYOffset !== this.playState) {
          this.playState = !this.playState
          console.log(this.playState)
          // this.playState ? this.start() : this.pause()
          // this.player.pause()
        }
      })
    }
  }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  div#masthead {
    position:absolute;
    height: 100vh;
  }
  div.alpha {
    position:absolute;
    height: 100%;
    width: 100%;
    line-height: 100vh;
  }
  div.alpha img.logo {
    width: 80%;
    max-width: 500px;
    vertical-align: middle;
  }
  div.alpha {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAGklEQVQImWNgYGBYZmJiMoXBxMRkCgMDwzIAHgwDrawJG44AAAAASUVORK5CYII=);
    background-repeat: repeat;
    width: 100%;
    top:0;
    z-index: 10;
  }
  @media screen and (min-width: 768px) {
    div#masthead {
      height: 700px;
    }
    div.alpha {
      line-height: 700px;
      height: 700px;
    }
    div.alpha img.logo {
      width: 50%;
    }
  }
  .masthead {
    background: #000;
    background-image: url('../assets/hornet.jpg');
    background-position: center;
    background-size:cover;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 5;
    height: 100vh;
    overflow: hidden;
  }
  .video, .masthead iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    pointer-events: none;
    display: none;
  }
  .masthead iframe {
    display: none;
  }
  @media screen and (min-width: 768px) {
    .video, .masthead iframe, .masthead {
      height: 700px;
      display: block;
    }
    .masthead iframe {
      display: block;
      height: 200% !important;
      margin-top: -350px;
    }
  }
  #vidtop-content {
    top: 0;
    color: #fff;
  }
  .vid-info {
    position: absolute;
    top: 0;
    right: 0;
    width: 33%;
    background: rgba(0, 0, 0, 0.3);
    color: #fff;
    padding: 1rem;
    font-family: Avenir, Helvetica, sans-serif;
  }
  .vid-info h1 {
    font-size: 2rem;
    font-weight: 700;
    margin-top: 0;
    line-height: 1.2;
  }
  .vid-info a {
    display: block;
    color: #fff;
    text-decoration: none;
    background: rgba(0, 0, 0, 0.5);
    -webkit-transition: .6s background;
    transition: .6s background;
    border-bottom: none;
    margin: 1rem auto;
    text-align: center;
  }
  @media (min-aspect-ratio: 16/9) {
    .video {
      height: 300%;
      top: -150px;
    }
  }
  @media (max-aspect-ratio: 16/9) {
    .video {
      width: 300%;
      left: -100%;
      top: -150px;
    }
  }
  @media all and (max-width: 600px) {
    .vid-info {
      width: 50%;
      padding: .5rem;
    }
    .vid-info h1 {
      margin-bottom: .2rem;
    }
  }
  @media all and (max-width: 500px) {
    .vid-info .acronym {
      display: none;
    }
  }
</style>
