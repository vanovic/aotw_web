<template>
  <div class='navigation'>
    <nav id="navigation">
      <input type="checkbox" id="nav" class="hidden" />
      <label for="nav" class="nav-open"><i></i><i></i><i></i></label>
      <div class="nav-container">
        <ul>
          <li v-for="l in links">
            <!-- <a v-href="l.url">{{l.name}}</a> -->
            <a>{{l.name}}</a>
          </li>
        </ul>
      </div>
    </nav>
    <div class='nav-background'></div>
  </div>
</template>


<script>
  export default {
    name: 'navigation',
    data () {
      return {
        links: [
          { name: 'Guides', url: '/guides' },
          { name: 'Component Tool', url: '/components' },
          { name: 'Org Finder', url: '/org-finder' }
        ]
      }
    }
  }
</script>


<style>
  .nav-background {
    background-color: #000;
    height: 75px;
    width: 100%;
    position: fixed;
    z-index: 1;
    top: 0;
  }
  nav {
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    position: fixed;
    padding: 30px;
    z-index: 100;
  }
  nav ul {
    float: right;
  }
  nav ul li {
    display: inline-block;
    float: left;
  }
  nav ul li:not(:first-child) {
    margin-left: 25px;
  }
  nav ul li a {
    display: inline-block;
    outline: none;
    color: #ffffff;
    font-size: 16px;
    text-decoration: none;
    letter-spacing: 0.04em;
  }
  nav ul li a:hover {
    color: #808080;
    text-decoration: none;
  }
  @media screen and (max-width: 575px) {
    .nav-container {
      position: fixed;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      z-index: -1;
      background: #1f2227;
      opacity: 0;
      transition: all 0.2s ease;
    }
    .nav-container ul {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 100%;
    }
    .nav-container ul li {
      display: block;
      float: none;
      width: 100%;
      text-align: center;
      margin-bottom: 10px;
    }
    .nav-container ul li:nth-child(1) a {
      transition-delay: 0.2s;
    }
    .nav-container ul li:nth-child(2) a {
      transition-delay: 0.3s;
    }
    .nav-container ul li:nth-child(3) a {
      transition-delay: 0.4s;
    }
    .nav-container ul li:nth-child(4) a {
      transition-delay: 0.5s;
    }
    .nav-container ul li:not(:first-child) {
      margin-left: 0;
    }
    .nav-container ul li a {
      padding: 10px 20px;
      opacity: 0;
      color: #fff;
      font-size: 32px;
      font-weight: 800;
      transform: translateY(-20px);
      transition: all 0.2s ease;
    }
    .nav-open {
      position: fixed;
      right: 10px;
      top: 10px;
      display: block;
      width: 75px;
      height: 75px;
      cursor: pointer;
      z-index: 9999;
    }
    .nav-open i {
      display: block;
      width: 30px;
      height: 3px;
      background: #fff;
      border-radius: 3px;
      margin-left: 20px;
    }
    .nav-open i:nth-child(1) {
      margin-top: 20px;
      transition: transform 0.3s ease;
    }
    .nav-open i:nth-child(2) {
      margin-top: 6px;
      transition: transform 0.3s ease;
    }
    .nav-open i:nth-child(3) {
      margin-top: 6px;
      transition: transform 0.3s ease;
    }
    .nav-open i:nth-child(4) {
      margin-top: 6px;
      transition: transform 0.3s ease;
    }
  }
  #nav:checked + .nav-open i {
    background: #fff;
  }
  #nav:checked + .nav-open i:nth-child(1) {
    transform: rotate(45deg) translate(12.5px, 0px);
  }
  #nav:checked + .nav-open i:nth-child(2) {
    transform: translateX(100px);
  }
  #nav:checked + .nav-open i:nth-child(3) {
    transform: rotate(-45deg) translate(12.5px, -0px);
  }
  #nav:checked ~ .nav-container {
    z-index: 9990;
    opacity: 1;
  }
  #nav:checked ~ .nav-container ul li a {
    opacity: 1;
    transform: translateY(0);
  }
  .hidden {
    display: none;
  }

</style>
