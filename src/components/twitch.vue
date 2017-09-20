<template>
  <div class='twitch'>
    <div class='container'>
      <div class='twitch-logo'></div>
      <div class='twitch-info'>
        <ul class='streamers'>
          <li v-for="channel in channelList" class='streamer' v-on:click="setTwitchChannel(channel.name)">
            <img :src="channel.img">
            <h4 v-bind:class="{ online: channel.attributes }">{{channel.name}}</h4>
          </li>
        </ul>
      </div>
      <div class='twitch-online' v-if="twitchDisplay">
        <iframe
          :src="current"
          height="400px"
          width="100%"
          scrolling="no"
          allowfullscreen="true"
          muted="true">
        </iframe>
      </div>
    </div>
  </div>
</template>


<script>
  var axios = require('axios')
  export default {
    name: 'twitch',
    data () {
      return {
        title: 'Twitch',
        twitchDisplay: false,
        description: 'Some short description of the our twitch streamers.',
        current: '',
        channelList: [
          { name: 'Grimlock929', img: 'http://via.placeholder.com/200x200?text=Grimlock_929', attributes: null },
          { name: 'drummerxdan', img: 'http://via.placeholder.com/200x200?text=drummerxdan', attributes: null },
          { name: 'dragondiabolus', img: 'http://via.placeholder.com/200x200?text=dragondiabolus', attributes: null }
        ]
      }
    },
    beforeDestroy: function () {
      window.removeEventListener('resize')
    },
    methods: {
      setTwitchDisplay: function () {
        if (document.body.clientWidth > 900) {
          this.twitchDisplay = true
        } else {
          this.twitchDisplay = false
        }
        // window.addEventListener('resize', update())
      },
      setTwitchChannel: function (channel) {
        this.current = 'https://player.twitch.tv/?channel=' + channel + '&muted=true'
      },
      getChannelListStatus: function () {
        function formatString (name) {
          return 'https://api.twitch.tv/kraken/streams/' + name
        }

        function requestInfo (channel) {
          return axios.get(formatString(channel), {
            headers: { 'Client-ID': 's2wc0ytcn79e525njv0vapmkx20rh0' } // 'a6bp2yif3mxxbzu6rnmh8jvg5q4p4u'}
          })
        }

        function getChannelList (channelList) {
          let status = []
          let promises = []
          channelList.map((channel) => promises.push(requestInfo(channel.name)))
          return axios.all(promises).then((callbacks) => {
            callbacks.map((response, index) => {
              status.push(response.data)
            })
            return status
          })
        }
        return getChannelList(this.channelList)
      },
      update: function () {
        let online = []
        this.getChannelListStatus().then((response) => {
          response.map((r) => {
            this.channelList.map((channel, index) => {
              if (r.stream !== null) {
                if (channel.name === r.stream.channel.name) {
                  this.channelList[index].attributes = r
                  online.push(this.channelList[index])
                }
              }
            })
          })
          if (online.length > 0) {
            this.setTwitchChannel(online[Math.floor(Math.random() * online.length)].name)
          } else {
            this.setTwitchChannel(this.channelList[Math.floor(Math.random() * this.channelList.length)].name)
          }
        })
      }
    },
    beforeMount: function () {
      this.update()
      this.setTwitchDisplay()
    }
  }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  div.twitch {
    height: auto;
  }
  div.twitch div.twitch-logo {
    height: 70px;
    width: 300px;
    background-image: url('../assets/twitch.svg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: auto 100%;
  }
  div.twitch div.twitch-info,
  div.twitch div.twitch-online {
    vertical-align: top;
  }
  div.twitch div.twitch-info {
    display:inline-block;
    width: 100%;
  }
  div.twitch div.twitch-online {
    display:none;
    margin-top: 40px;
    background: #000;
  }
  @media screen and (min-width: 900px) {
    div.twitch div.twitch-info {
      width: 34%;
    }
    div.twitch div.twitch-online {
      display:inline-block;
      width: 65%;
    }
  }
  div.twitch ul.streamers {
    padding: 20px;
  }
  div.twitch ul.streamers li.streamer {
    display: inline-block;
    height: auto;
    float: left;
    width: 50%;
    cursor: pointer;
  }
  div.twitch ul.streamers li.streamer h4.online:before {
    border-radius:5px;
    height:10px;
    width:10px;
    background-color:green;
  }
  div.twitch ul.streamers li.streamer h4:before {
    border-radius:5px;
    height:10px;
    width:10px;
    background-color:red;
    content:"\A";
    display: inline-block;
    position:absolute;
    margin-left: -15px;
    margin-top:3px;
  }
  @media screen and (min-width: 600px) {
    div.twitch ul.streamers li.streamer {
      width: 25%;
    }
  }
  @media screen and (min-width: 900px) {
    div.twitch ul.streamers li.streamer {
      width: 50%;
    }
  }

  div.twitch ul.streamers li.streamer img {
    width: 100%;
    height: auto;
    padding: 20px 20px 0;
  }
</style>