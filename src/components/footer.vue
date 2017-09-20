<template>
  <footer>
    <div class='slogan'>
      <div class='container'>
        <h1>{{slogan}}</h1>
      </div>
    </div>
    <div class='awards'>
      <div class='container'>
        <ul>
          <li v-for="award in awardList">
            <h2>{{award.finish}}</h2>
            <img src='../assets/sc4.png'>
            <h5>{{award.name}}</h5>
            <p v-for="member in award.memberList">{{member}}</p>
          </li>
        </ul>
      </div>
    </div>
    <div class='footer'>
      <div class='container'>
        <ul>
          <li><a>Guides</a></li>
          <li><a>Component Tool</a></li>
          <li><a>Org Finder</a></li>
        </ul>
        <ul></ul>
        <div class='starcitizen'>
          <a><img src="../assets/starcitizen.png"></a>
        </div>
      </div>
    </div>
  </footer>
</template>


<script>
  export default {
    name: 'footer',
    data () {
      return {
        slogan: 'With each kill I grow wiser, and with added wisdom I grow stronger.',
        awardList: [
          { name: 'SCCL', finish: '1st', memberList: ['Balons', 'BreadFang', 'Golde', 'LarryYay', 'Like_50_Ninjas', 'Wolvencry'], img: '../assets/sccl.png' },
          { name: 'SCCL2', finish: '1st', memberList: ['DrummerxDan', 'Maduyn', 'Nelerath', 'SabineWren', 'Silent331'], img: '../assets/sccl.png' },
          { name: 'SC4 Premiere', finish: '1st', memberList: ['Maduyn', 'Nelerath', 'Revok', 'SabineWren', 'Silent331'], img: '../assets/sc4.png' }
        ]
      }
    }
  }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  div.slogan, div.footer {
    background: #000;
  }
  div.awards {

  }
  div.awards ul {
    width: 100%;
  }
  div.awards ul li {
    max-width: 100px;
    display: inline-block;
    margin: 0 40px;
    vertical-align: top;
  }
  div.awards ul li img {
    width: 100px;
  }
  div.awards ul li p {
    line-height: 1.5;
    font-size: 10px;
  }
  div.footer {
    padding: 20px 0;
    text-align: right;
  }
  div.footer ul {
    width: 200px;
    display: inline-block;
    float:left;
  }
  div.footer ul li {
    text-align: left;
    line-height:2;
  }
  div.footer ul li a {
    color: #fff;
  }
  div.footer div.starcitizen {
    display: inline-block;
  }
  div.footer div.starcitizen a img{
    height: 150px;
  }
  @media screen and (min-width: 1024px) {
    div.footer {
    }
  }
</style>
