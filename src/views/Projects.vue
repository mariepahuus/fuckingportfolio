<template>
 <main>
   <div id="projects_1">
    <div id="pr_header">
       <h2>Mine projekter</h2>
    </div>
    <div id="pr_width">
      <div id="pr_description">
        <p>På denne side kan du se hvilke forskellige kategorier jeg har arbejdet kreativt med - tryk videre og se eksempler</p>
      </div>
    </div>
    <div id="splat6">
      <img src="../../assets/splat6.svg" alt="">
    </div>
   </div>

   <div id="projects_2"> 
      <router-link id="scrolltop" to="/plakater">
        <h2>Plakater</h2>
      </router-link>
     <router-link to="/logoer">
        <h2>Logoer</h2>
      </router-link>
     <router-link to="/ikoner">
        <h2>Ikoner</h2>
      </router-link>
     <router-link to="/illu">
        <h2>Andre illustrationer</h2>
      </router-link>
     <router-link to="/billeder">
        <h2>Billeder</h2>
      </router-link>
     <router-link to="/hjemmesider">
        <h2>Hjemmesider</h2>
      </router-link>
     <router-link to="/video">
        <h2>Video produktion</h2>
      </router-link>
     
   </div>
 </main>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  data: () => ({
    projects: [
      {
        headliner: "headliner1",
        description: "description1",
        imgLink: "link",
      },
      {
        headliner: "headliner2",
        description: "description",
        imgLink: "link",
      },
    ]
  }),
  components: {

  }
}


</script>

<style>
  #projects_1 {
    background-color: #f5f5f5;
    height: 320px;
    margin: 0 -10px;
    padding-top: 10px;
  }

  #pr_width {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  #pr_description {
    width: 45%;
    height: 100px;
    padding-top: 30px;
  }

  #projects_1 p {
    font-size: 20px;
    margin-top: -20px;
  }

  #splat6 {
    display: flex;
    justify-content: flex-start;
    width: 100%;
    margin-top: -228px;
  }

  #splat6 img {
    height: 1100px;
  }

  #projects_2 {
    background-color: #e6e6e6;
    padding-top: 40px;
    margin: 0 -10px;
    height: 1200px;
  }

  #projects_2 a {
    text-decoration: none;
    color: #707070;
  }

  #projects_2 h2 {
    margin-top: 60px !important;
    font-size: 70px;
  }

  #projects_2 a:hover {
    color: #FF33FF;
  }


  @media screen and (max-width: 600px) {
    #projects_1 {
    background-color: #f5f5f5;
    height: 240px;
    margin: 0 -10px;
    padding-top: 20px;
  }

  #pr_width {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  #pr_description {
    width: 75%;
    height: 100px;
    padding-top: 30px;
    z-index: 100;
  }

  #projects_1 p {
    margin-top: -20px;
    font-size: 15px;
  }

  #splat6 {
    display: flex;
    justify-content: flex-start;
    width: 100%;
    margin-top: -103px;
  }

  #splat6 img {
    height: 500px;
  }

  #projects_2 {
    background-color: #e6e6e6;
    padding-top: 40px;
    margin: 0 -10px;
    height: 740px;
  }

  #projects_2 a {
    text-decoration: none;
    color: #707070;
  }

  #projects_2 h2 {
    height: 30px;
    font-size: 35px;
  }
}

@media screen and (min-width: 600px) and (max-width: 1000px) {
  #projects_1 {
    background-color: #f5f5f5;
    height: 300px;
    margin: 0 -10px;
    padding-top: 20px;
  }

  #pr_width {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  #pr_description {
    width: 55%;
    height: 100px;
    padding-top: 30px;
    z-index: 100;
  }

  #projects_1 p {
    margin-top: -20px;
    font-size: 15px;
  }

  #splat6 {
    display: flex;
    justify-content: flex-start;
    width: 100%;
    margin-top: -162px;
  }

  #splat6 img {
    height: 800px;
  }

  #projects_2 {
    background-color: #e6e6e6;
    padding-top: 40px;
    margin: 0 -10px;
    height: 900px;
  }

  #projects_2 a {
    text-decoration: none;
    color: #707070;
  }

  #projects_2 h2 {
    height: 50px;
    font-size: 40px !important;
  }
}
</style>