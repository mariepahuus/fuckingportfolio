<template>
  <div id="app">
    <div id="nav">
      <div id="logo">
        <router-link to="/">
        <img src="../assets/logo.svg" alt="">
        </router-link>
      </div>
      <div id="links">
      <router-link id="hjemlink" to="/">Hjem</router-link> |
      <router-link to="/about">Om mig</router-link> |
      <router-link to="/projects">Projekter</router-link>
      </div>
    </div>
    <router-view/>
    <footer>
      <div id="footer">
        <div id="footer_logo">
          <img src="../assets/logo.svg" alt="">
        </div>
        <div id="footer_social">
          <a target="_blank" href="https://www.linkedin.com/in/marie-tranberg-pahuus/">
            <img src="../assets/linkedin.svg" alt="">
          </a>
          <a target="_blank" href="https://www.instagram.com/artbypahuus/?hl=da">
            <img src="../assets/insta.svg" alt="">
          </a>
          <a target="_blank" href="https://www.facebook.com/marie.t.pahuus">
          <img src="../assets/facebook.svg" alt="">
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>


<script>

</script>


<style lang="scss">

body {
  margin: 0 !important;
}

#app {
  font-family: 'Gill Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #707070;
}

#nav {
  background-color: #FFF61F;
  height: 100px;
  margin: -10px;
  display: flex;
  flex-direction: row;
  position: relative;
  z-index: 100;

  a {
    color: #707070;
    text-decoration: none;
    font-size: 20px;

    &.router-link-exact-active {
      color: #FF33FF;
    }
  }
}

#logo {
  display: flex;
  align-items: center;
  flex-grow: 10;
  padding-left: 40px;
}

#logo img {
 height: 60px;
}

#links {
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
  padding: 0 80px 0 20px;
  flex-grow: 2;
}

footer {
  display: flex;
  align-items: flex-end;
  background-color: #F5F5F5;
  margin:  -20px -10px 0 -10px;
  height: 400px;
}

#footer {
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  position: absolute;
}

#footer_logo {
  display: flex;
  height: 400px;
  flex-grow: 5;
  justify-content: center;
  align-items: center;
}

#footer_logo img {
  height: 200px;
}

#footer_social {
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 7;
  justify-content: space-between;
}

#footer_social img {
  height: 50px;
}

h2 {
  font-family: 'Parisienne', cursive;
  font-size: 80px;
  font-weight: lighter;
  margin: 30px 0;
}

h4 {
  font-family: 'Parisienne', cursive;
  font-size: 35px;
  margin: 0;
}

// @font-face {
//   font-family: 'MyFontFamily';
//   src: url('myfont-webfont.eot?#iefix') format('embedded-opentype'), 
//    url('myfont-webfont.woff') format('woff'), 
//    url('myfont-webfont.ttf')  format('truetype'),
//    url('myfont-webfont.svg#svgFontName') format('svg');
// }

@media screen and (max-width: 600px) {
  body {
  margin: 0 !important;
}

p {
  font-size: 17px;
}

#app {
  font-family: 'Gill Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #707070;
}

#nav {
  background-color: #FFF61F;
  height: 70px;
  margin: -10px;
  display: flex;
  flex-direction: row;
  position: relative;
  z-index: 100;

  a {
    color: #707070;
    text-decoration: none;
    font-size: 17px;

    &.router-link-exact-active {
      color: #FF33FF;
    }
  }
}

#logo {
  display: flex;
  align-items: center;
  width: 20%;
  padding-left: 25px;
}

#logo img {
 height: 35px;
 padding-top: 20px;
}

#links {
  display: flex;
  justify-content: center;
  justify-content: space-between;
  align-items: center;
  width: 70%;
  padding: 0 25px 0 0;
}


#links a {
  padding: 0 5px ;
}

footer {
  display: flex;
  align-items: flex-end;
  background-color: #F5F5F5;
  margin:  -20px -10px 0 -10px;
  height: 150px;
}

#footer {
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  position: absolute;
  height: 150px;
}

#footer_logo {
  display: flex;
  height: 100px;
  flex-grow: 5;
  justify-content: center;
  align-items: center;
}

#footer_logo img {
  height: 90px;
}

#footer_social {
  height: 90px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 7;
  justify-content: space-between;
}

#footer_social img {
  height: 20px;
}

h2 {
  font-family: 'Parisienne', cursive;
  font-size: 35px;
  font-weight: lighter;
  margin: 25px 0;
  z-index: 999;
  position: relative;
}

h4 {
  font-family: 'Parisienne', cursive;
  font-size: 35px;
  margin: 0;
}
}


@media screen and (min-width: 600px) and (max-width: 1000px) {
  body {
  margin: 0 !important;
}

p {
  font-size: 25px !important;
}

#app {
  font-family: 'Gill Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #707070;
}

#nav {
  background-color: #FFF61F;
  height: 100px;
  margin: -10px;
  display: flex;
  flex-direction: row;
  position: relative;
  z-index: 100;

  a {
    color: #707070;
    text-decoration: none;
    font-size: 25px;

    &.router-link-exact-active {
      color: #FF33FF;
    }
  }
}

#logo {
  display: flex;
  align-items: center;
  width: 20%;
  padding-left: 35px;
}

#logo img {
 height: 45px;
 padding-top: 20px;
}

#links {
  display: flex;
  justify-content: center;
  justify-content: space-between;
  align-items: center;
  width: 70%;
  padding: 0 60px 0 0;
}


#links a {
  padding: 0 5px ;
}

footer {
  display: flex;
  align-items: flex-end;
  background-color: #F5F5F5;
  margin:  -20px -10px 0 -10px;
  height: 300px;
}

#footer {
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  position: absolute;
  height: 300px;
}

#footer_logo {
  display: flex;
  height: 200px;
  flex-grow: 5;
  justify-content: center;
  align-items: center;
}

#footer_logo img {
  height: 155px;
}

#footer_social {
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 7;
  justify-content: space-between;
}

#footer_social img {
  height: 35px;
}

h2 {
  font-family: 'Parisienne', cursive;
  font-size: 44px;
  font-weight: lighter;
  margin: 45px 0;
  z-index: 999;
  position: relative;
}

h4 {
  font-family: 'Parisienne', cursive;
  font-size: 35px;
  margin: 0;
}
}
</style>
