<template>
<main>
  <div id="box_1">
    <div id="text_1">
      <div id="text_box_1">
        <div id="text_p">
          <p>Hej! Mit navn er</p>
        </div>
       <h2>Marie Tranberg Pahuus</h2>
      </div>
    </div>
    <div id="splat_1">
      <img src="../../assets/splat1.svg" alt="">
    </div>
  </div>
  <div id="box_2">
    <div id="splat_2">
      <img src="../../assets/splat2.svg" alt="">
    </div>
    <div id="img_1">
      <img src="../../assets/mig.jpg" alt="">
    </div>
    
  </div>
  <div id="box_3">
    <div id="box_3_text">
      <h2>Om mig</h2>
        <div id="text_3">
            <p>
              Jeg er en 22 årig multimediedesign 
              studerende som elsker at være kreativ og 
              formidle mine tanker og idéer. Jeg er 
              meget alsidig når det gælder design, da 
              jeg både elsker når der er knald på 
              farverne og det hele er lidt sjovt - men 
              samtidig kan jeg også godt lide når det 
              nogle gange skal være helt enkelt og 
              klassisk.
            </p>
          </div>
        <router-link to="/about">
          <button v-on:click="top" id="laesmere">
            Læs mere..
          </button>
        </router-link>
    </div>
  </div>
  <div id="box_4">
    <div id="header_box4">
      <h2>Mine projekter</h2>
    </div>
    <div id="project_img1">
      <div id="img_frame1">
        <img src="../../assets/andrea.svg" alt="">
      </div>
    </div>
    <div id="project_img1">
      <div id="img_frame1">
        <img src="../../assets/kaj.svg" alt="">
      </div>
    </div>
    <div id="project_img2">
      <div id="img_frame2">
        <img src="../../assets/plakat1.png" alt="">
      </div>
    </div>
    <div id="project_img2">
      <div id="img_frame2">
        <img src="../../assets/billede1.jpeg" alt="">
      </div>
    </div>

    <div id="splat_3">
      <img src="../../assets/splat3.svg" alt="">
    </div>
    <div id="btnallprojects">
      <router-link to="/projects">
          <button v-on:click="top" id="laesmere3">
            Se alle projekter
          </button>
        </router-link>
    </div>
  </div>
</main>
  <!-- <div v-for="(project, index) in projects" :key="index">
      <h1>{{project.headliner}}</h1>
      {{project.description}}
    </div> -->
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

  },
  methods: {
    top() {
      window.scrollTo(0,0);
    }
  }
}

</script>

<style>
 

  #box_1 {
    margin: 0px -10px;
    height: 475.5px;
    background-color: #F5F5F5;
    padding: 20px;
    display: flex;
    flex-direction: row;
  }

  #box_1 p {
    font-size: 25px;
  }

  #text_1 {
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    flex-grow: 11;
    padding-top: 70px;
  }

  #text_box_1 {
    height: 170px;
    width: 89%;
    margin-right: -80px;
  }

  #text_p {
    display: flex;
    height: 30px;
  }

  #splat_1 {
    display: flex;
    justify-content: flex-end;
    margin-right: -20px;
    flex-grow: 1;
  }

  #splat_1 img {
    height: 1100px;
  }

  #box_2 {
    height: 650px;
    background-color: #E6E6E6;
    margin: 0 -10px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  #img_1 {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 3px solid #FF33FF;
    height: 532px;
    width: 410px;
    margin-left: -400px;
  }

  #img_1 img {
    height: 500px;
  }

  #splat_2 {
    height: 400px;
    display: flex;
    padding-top: 300px;
  }

  #splat_2 img {
    height: 1400px;
    margin-left: -5px;
    z-index: 100;
  }

  #box_3 {
    height: 668px;
    background-color: #F5F5F5;
    padding-top: 40px;
    display: flex;
    justify-content: center;
    margin: 0 -10px;
  }

  #box_3_text {
    width: 35%;
    font-size: 25px;
    padding-left: 350px;
  }
  
  #text_3 {
    display: flex;
    text-align: justify;
  }

  #laesmere {
    height: 40px;
    width: 110px;
    background-color: #E6E6E6;
    transition: 0.5s ease;
    border: none;
    border-radius: 5px;
    font-size: 15px;
    color: #707070;
    font-family: 'Gill Sans', sans-serif;
    margin-top: 50px;
  }

  #laesmere:hover {
    background-color: #FF33FF;
    color: #F5F5F5;
  }

  #box_4 {
    height: 1800px;
    margin: 0 -10px;
    background-color: #E6E6E6;
    display: flex;
    flex-wrap: wrap;
    padding: 0 80px;
  }

  #header_box4 {
    width: 100%;
    padding-top: 50px;
  }

  #project_description, #project_description2 {
    width: 50%;
  }

  #project_img1, #project_img2 {
    width: 50%;
    display: flex;
    justify-content: center;
    position: relative;
  }

  #img_frame1 {
    border: 3px solid #FF33FF;
    width: 350px;
    height: 480px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #img_frame2 {
    border: 3px solid #FF33FF;
    width: 350px;
    height: 455px;
    display: flex;
    justify-content: center;
    align-items: center;
  }


  #project_img1 img {
    height: 450px;
  }

  #project_img2 img {
    height: 420px;
  }

  #laesmere2 {
    height: 40px;
    width: 110px;
    background-color: #f5f5f5;
    transition: 0.5s ease;
    border: none;
    border-radius: 5px;
    font-size: 15px;
    color: #707070;
    font-family: 'Gill Sans', sans-serif;
    margin-top: 50px;
    
  }

  #laesmere2:hover {
    background-color: #FF33FF;
    color: #F5F5F5;
  }

  #splat_3 {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: flex-end;
    margin-top: -358px;
    padding-left: 505px;
  }

  #splat_3 img {
    height: 700px;
  }

  #btnallprojects {
    width: 100%;
    height: 50px;
    margin-top: -95px;
  }

  #laesmere3 {
    height: 50px;
    width: 200px;
    background-color: #f5f5f5;
    transition: 0.5s ease;
    border: none;
    border-radius: 5px;
    font-size: 25px;
    color: #FF33FF;
    font-family: 'Gill Sans', sans-serif;
  }

  #laesmere3:hover {
    background-color: #FF33FF;
    color: #F5F5F5;
  }



  @media screen and (max-width: 600px) {
  #box_1 {
    margin: 0px -10px;
    height: 170px;
    background-color: #F5F5F5;
    padding: 20px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  #box_1 p {
    font-size: 17px;
  }

  #text_1 {
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding-top: 0px;
  }

  #text_box_1 {
    height: 170px;
    width: 89%;
    margin-right: 0px;
    position: absolute;
    z-index: 100;
  }

  #text_p {
    display: flex;
    height: 30px;
  }

  #splat_1 {
    display: flex;
    justify-content: flex-end;
    margin-right: -21px;
    margin-top: -190px;
    flex-grow: 1;
  }

  #splat_1 img {
    height: 400px;
  }

  #box_2 {
    height: 250px;
    background-color: #E6E6E6;
    margin: 0 -10px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  #img_1 {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #FF33FF;
    height: 197px;
    width: 155px;
    margin-left: -180px;
  }

  #img_1 img {
    height: 180px;
  }

  #splat_2 {
    height: 400px;
    display: flex;
    padding-top: 550px;
  }

  #splat_2 img {
    height: 500px;
    margin-left: -5px;
    z-index: 100;
  }

  #box_3 {
    height: 337px;
    background-color: #F5F5F5;
    padding-top: 0;
    display: flex;
    justify-content: center;
    margin: 0 -10px;
  }

  #box_3_text {
    width: 55%;
    padding-left: 110px;
  }

  #box_3_text h2 {
    margin-bottom: 5px;
  }
  
  #text_3 {
    display: flex;
    text-align: justify;
  }

  #text_3 p {
    margin: 0;
    font-size: 15px;
  }

  #laesmere {
    height: 30px;
    width: 90px;
    background-color: #E6E6E6;
    transition: 0.5s ease;
    border: none;
    border-radius: 5px;
    font-size: 13px;
    color: #707070;
    font-family: 'Gill Sans', sans-serif;
    margin-top: 20px;
  }

  #box_4 {
    height: 770px;
    margin: 0 -10px;
    background-color: #E6E6E6;
    display: flex;
    flex-wrap: wrap;
    padding: 0 20px;
  }

  #header_box4 {
    width: 100%;
    padding-top: 20px;
    height: 60px;
  }

  #img_frame1 {
    border: 2px solid #FF33FF;
    height: 187px;
    width: 143px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #img_frame2 {
    border: 2px solid #FF33FF;
    height: 187px;
    width: 143px;
    display: flex;
    justify-content: center;
    align-items: center;
  }


  #project_img1 img {
    height: 170px;
  }

  #project_img2 img {
    height: 160px;
  }

  #splat_3 {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: flex-end;
    margin-top: -141px;
    padding-left: 83px;
  }

  #splat_3 img {
    height: 290px;
  }

  #btnallprojects {
    width: 100%;
    height: 50px;
    margin-top: -70px;
  }

  #laesmere3 {
    height: 35px;
    width: 160px;
    background-color: #f5f5f5;
    transition: 0.5s ease;
    border: none;
    border-radius: 5px;
    font-size: 17px;
    color: #FF33FF;
    font-family: 'Gill Sans', sans-serif;
  }
}


@media screen and (min-width: 600px) and (max-width: 1000px) {
  #box_1 {
    margin: 0px -10px;
    height: 250px;
    background-color: #F5F5F5;
    padding: 20px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  #box_1 p {
    font-size: 17px;
  }

  #text_1 {
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding-top: 0px;
  }

  #text_box_1 {
    height: 170px;
    width: 54%;
    margin-right: 0px;
    position: absolute;
    z-index: 100;
    padding-top: 30px;
   padding-right: 150px;
  }

  #text_p {
    display: flex;
    height: 30px;
  }

  #splat_1 {
    display: flex;
    justify-content: flex-end;
    margin-right: -21px;
    margin-top: -245px;
    flex-grow: 1;
  }

  #splat_1 img {
    height: 700px;
  }

  #box_2 {
    height: 500px;
    background-color: #E6E6E6;
    margin: 0 -10px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  #img_1 {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #FF33FF;
    height: 400px;
    width: 310px;
    margin-left: -300px;
  }

  #img_1 img {
    height: 370px;
  }

  #splat_2 {
    height: 400px;
    display: flex;
    padding-top: 550px;
  }

  #splat_2 img {
    height: 900px;
    margin-left: -5px;
    z-index: 100;
  }

  #box_3 {
    height: 521px;
    background-color: #F5F5F5;
    padding-top: 0;
    display: flex;
    justify-content: center;
    margin: 0 -10px;
  }

  #box_3_text {
    width: 55%;
    padding-left: 200px;
  }

  #box_3_text h2 {
    margin-bottom: 10px;
  }
  
  #text_3 {
    display: flex;
    text-align: justify;
  }

  #text_3 p {
    margin: 0;
    font-size: 15px;
  }

  #laesmere {
    height: 45px;
    width: 140px;
    background-color: #E6E6E6;
    transition: 0.5s ease;
    border: none;
    border-radius: 5px;
    font-size: 20px;
    color: #707070;
    font-family: 'Gill Sans', sans-serif;
    margin-top: 50px;
  }

  #box_4 {
    height: 1300px;
    margin: 0 -10px;
    background-color: #E6E6E6;
    display: flex;
    flex-wrap: wrap;
    padding: 0 20px;
  }

  #header_box4 {
    width: 100%;
    padding-top: 40px;
    height: 100px;
  }

  #img_frame1 {
    border: 2px solid #FF33FF;
    height: 350px;
    width: 252px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #img_frame2 {
    border: 2px solid #FF33FF;
    height: 350px;
    width: 252px;
    display: flex;
    justify-content: center;
    align-items: center;
  }


  #project_img1 img {
    height: 320px;
  }

  #project_img2 img {
    height: 310px;
  }

  #splat_3 {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: flex-end;
    margin-top: -304px;
    padding-left: 90px;
    margin-right: -20px;
  }

  #splat_3 img {
    height: 550px;
  }

  #btnallprojects {
    width: 100%;
    height: 50px;
    margin-top: -70px;
  }

  #laesmere3 {
    height: 35px;
    width: 160px;
    background-color: #f5f5f5;
    transition: 0.5s ease;
    border: none;
    border-radius: 5px;
    font-size: 17px;
    color: #FF33FF;
    font-family: 'Gill Sans', sans-serif;
  }
}
  
</style>
