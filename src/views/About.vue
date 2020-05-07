<template>
  <main>
  <div id="about_1">
    <div id="header">
      <h2>Om mig</h2>
    </div>
    <div id="width_img">
      <div id="img_2">
        <img src="../../assets/mig.jpg" alt="">
      </div>
    </div>
    <div id="width_desc">
      <div id="description">
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
        <p>
          For at se hvilke projekter jeg har arbejdet med og hvilken stil jeg kører, kan du se mere under ‘Projekter’ i menuen.
        </p> 
        <p>
          Ellers kan du læse mere om mig længere nede på denne side.
          </p> 
      </div>
    </div>
    <div id="splat_4">
        <img src="../../assets/splat4.svg" alt="">
      </div>
  </div>
  <div id="about_2">
    <div id="description_2">
     <p>Jeg er som sagt en 22 årig pige som studerer multimediedesign på Erhvervs-akademi Sydvest i Esbjerg. </p>
     <p>Jeg bor i centrum af Ribe, hvor jeg også arbejder på Stenbohus som bartender og på Restaurant Pinocchio som servering. </p>
     <p>Derudover nyder jeg at bruge tid med min familie og mine venner, da jeg er en meget socialt og udadvendt person. </p>
     <p>Jeg elsker at rejse og generelt få nye oplevelser som f.eks. at tage på festivaler og koncerter, men nyder også en spilleaften med mine veninder. </p>
     <p>For at få min kreativitet formidlet i praksis, har jeg en stor ’shoe-collection’, som jeg nyder at give nyt liv ved at rengøre de gamle slidte sko og male en fed farve eller et design på. </p>
    </div>
  </div>
  <div id="about_3">
      <div id="header_videocv">
        <h2>Video CV</h2>
      </div>
      <div id="videocv">
        <iframe id="videoo" width="100%" height="500"
          src="https://www.youtube.com/embed/FH92GlRPWdo">
        </iframe>
      </div>
      <!-- <div id="splat_5">
      <img src="../../assets/splat5.svg" alt="">
      </div> -->
      <div id="pdf_cv">
        <a target="_blank" href="https://firebasestorage.googleapis.com/v0/b/cvportfolio-30eb9.appspot.com/o/cvfinallll%20copy.pdf?alt=media&token=4acfc910-4251-443e-ba0c-48cc04f87d34">
        <p>For skriftligt CV tryk her</p>
        </a>
      </div>
  </div>
  <div id="about_4">
    <div id="header_contact">
      <h2>Kontakt</h2>
    </div>
    <div id="contact">
      <div id="tele">
        <img id="tlf" src="../../assets/tlf.svg" alt=""> <p>+45 29 84 47 87</p>
      </div>
      <div id="brv">
        <a href="mailto:mariepahuus@me.com">
          <img id="brev" src="../../assets/brev.svg" alt="">
        </a> 
        <a href="mailto:mariepahuus@me.com">
          <p>mariepahuus@me.com</p>
        </a>
      </div>
      <div id="cursor">
        <img id="clickhere" src="../../assets/arrow.svg" alt="">
      </div>
    </div>
   
  </div>
  </main>
</template>


<style>
  
  #about_1 {
    height: 1022px;
    background-color: #F5F5F5;
    padding-top: 10px;
    margin: 0 -10px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }

  #header {
    width: 100%;
    margin-bottom: 34px;
  }

  #img_2 {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 3px solid #FF33FF;
    height: 532px;
    width: 410px;
    z-index: 10;
    margin-right: 90px;
  }

  #img_2 img {
    height: 500px;
  }

  #description {
    width: 450px;
    font-size: 25px;
    text-align: justify;
  }

  #splat_4 {
    width: 100%;
    display: flex;
    justify-content: flex-start;
  }

  #splat_4 img {
    height: 1300px;
    margin-top: -226px;

  }

  #about_2 {
    height: 800px;
    background-color: #E6E6E6;
    margin: 0 -10px;
    padding-top: 80px;
    font-size: 25px;
    display: flex;
    justify-content: flex-end;
  }

  #description_2 {
    height: 700px;
    width: 35%;
    margin-right: 170px;
    text-align: justify;
  }

  #about_3 {
    height: 1050px;
    background-color: #F5F5F5;
    margin: 0 -10px;
    display: flex;
    align-items: center;
    flex-direction: column;

  }

  #header_videocv {
    width: 100%;
    display: flex;
    justify-content: center;
    height: 230px;
  }

  #videocv {
    border: 3px solid #FF33FF;
    width: 70%;
    padding: 20px;
  }

  #pdf_cv {
    width: 100%;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    -webkit-animation: scale-up-center 0.75s linear 2s infinite alternate-reverse both; animation: scale-up-center 1.1s linear 2s infinite alternate-reverse both;
  }

  #about_4 {
    height: 600px;
    background-color: #E6E6E6;
    margin: 0 -10px;
    padding-top: 10px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
  }

  #header_contact {
    width: 100%;
    height: 1px;
  }

  #contact {
    height: 200px;
    width: 40%;
    font-size: 30px;
    margin-top: -50px;
  }

  #tele {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    height: 150px;
  }

  #tlf {
    height: 70px;
    margin-right: 50px;
  }
  
  #brv {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    margin-right: -93px;
    height: 150px;
  }

  a {
    text-decoration: none;
    color: #707070;
  }

  #brv a:hover {
    color: #FF33FF;
  }

  #brev {
    height: 53px;
    margin-right: 50px;
  }

  #cursor {
    display: flex;
    justify-content: flex-end;
    margin: -70px -107px 0 0;
  }

  #cursor img {
    height: 40px;
  }

  #clickhere {
    -webkit-animation: scale-up-center 0.75s linear 2s infinite alternate-reverse both; animation: scale-up-center 0.75s linear 2s infinite alternate-reverse both;
  }

  #splat_5 {
    width: 60%;
  }

  #splat_5 img {
    height: 800px;
    margin: -278px 0 0 300px;
  }

  @-webkit-keyframes scale-up-center {
  0% {
    -webkit-transform: scale(0.8);
            transform: scale(0.8);
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
}
@keyframes scale-up-center {
  0% {
    -webkit-transform: scale(0.8);
            transform: scale(0.8);
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
}



@media screen and (max-width: 600px) {
#about_1 {
    height: 886px;
    background-color: #F5F5F5;
    padding-top: 10px;
    margin: 0 -10px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }

  #header {
    width: 100%;
    margin-bottom: 0;
  }

  #width_img {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  #img_2 {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #FF33FF;
    height: 360px;
    width: 275px;
    z-index: 10;
    margin-right: 0px;
  }

  #img_2 img {
    height: 330px;
  }

  #width_desc {
    width: 100%;
    display: flex;
    justify-content: center;
    padding-top: 20px;
  }

  #description {
    width: 70%;
    text-align: justify;
    z-index: 100;
  }

  #splat_4 {
    width: 100%;
    display: flex;
    justify-content: flex-start;
  }

  #splat_4 img {
    height: 500px;
    margin-top: -160px;

  }

  #about_2 {
    height: 525px;
    background-color: #E6E6E6;
    margin: 0 -10px;
    padding-top: 40px;
    font-size: 25px;
    display: flex;
    justify-content: center;
  }

  #description_2 {
    height: 700px;
    width: 70%;
    margin-right: 0px;
    text-align: justify;
  }

  #about_3 {
    height: 470px;
    background-color: #F5F5F5;
    margin: 0 -10px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }

  #header_videocv {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 180px;
  }

  #videocv {
    border: 2px solid #FF33FF;
    width: 94%;
    padding: 15px 0 15px 0;
  }

  #videoo {
    height: 185px;
    width: 90%;
  }

  #pdf_cv {
    width: 100%;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    -webkit-animation: scale-up-center 0.75s linear 2s infinite alternate-reverse both; animation: scale-up-center 1.1s linear 2s infinite alternate-reverse both;
  }

  #about_4 {
    height: 300px;
    background-color: #E6E6E6;
    margin: 0 -10px;
    padding-top: 10px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
  }

  #header_contact {
    width: 100%;
    height: 80px;
  }

  #contact {
    height: 200px;
    width: 100%;
    margin-top: -50px;
  }

  #tele {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 100px;
    width: 100%;
    margin-left: -23px;
  }

  #tlf {
    height: 40px;
    margin-right: 50px;
  }
  
  #brv {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-right: 0px;
    height: 100px;
  }

  a {
    text-decoration: none;
    color: #707070;
  }

  #brev {
    height: 25px;
    margin-right: 50px;
  }

  #cursor {
    display: flex;
    justify-content: flex-end;
    margin: -47px 63px 0 0;
  }

  #cursor img {
    height: 30px;
  }

  #clickhere {
    -webkit-animation: scale-up-center 0.75s linear 2s infinite alternate-reverse both; animation: scale-up-center 0.75s linear 2s infinite alternate-reverse both;
  }

}


@media screen and (min-width: 600px) and (max-width: 1000px) {
  #about_1 {
    height: 1100px;
    background-color: #F5F5F5;
    padding-top: 10px;
    margin: 0 -10px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }

  #header {
    width: 100%;
    margin-bottom: 0;
  }

  #width_img {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  #img_2 {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #FF33FF;
    height: 460px;
    width: 360px;
    z-index: 10;
    margin-right: 0px;
  }

  #img_2 img {
    height: 430px;
  }

  #width_desc {
    width: 100%;
    display: flex;
    justify-content: center;
    padding-top: 20px;
  }

  #description {
    width: 70%;
    text-align: justify;
    z-index: 100;
  }

  #splat_4 {
    width: 100%;
    display: flex;
    justify-content: flex-start;
  }

  #splat_4 img {
    height: 900px;
    margin-top: -304px;

  }

  #about_2 {
    height: 650px;
    background-color: #E6E6E6;
    margin: 0 -10px;
    padding-top: 40px;
    font-size: 25px;
    display: flex;
    justify-content: center;
  }

  #description_2 {
    height: 700px;
    width: 70%;
    margin-right: 0px;
    text-align: justify;
  }

  #about_3 {
    height: 770px;
    background-color: #F5F5F5;
    margin: 0 -10px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }

  #header_videocv {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 180px;
  }

  #videocv {
    border: 2px solid #FF33FF;
    width: 94%;
    padding: 15px 0 15px 0;
  }

  #videoo {
    height: 450px;
    width: 95%;
  }

  #pdf_cv {
    width: 100%;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    -webkit-animation: scale-up-center 0.75s linear 2s infinite alternate-reverse both; animation: scale-up-center 1.1s linear 2s infinite alternate-reverse both;
  }

  #about_4 {
    height: 400px;
    background-color: #E6E6E6;
    margin: 0 -10px;
    padding-top: 10px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
  }

  #header_contact {
    width: 100%;
    height: 80px;
  }

  #contact {
    height: 200px;
    width: 100%;
    margin-top: -50px;
  }

  #tele {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 100px;
    width: 100%;
    margin-left: -35px;
  }

  #tlf {
    height: 40px;
    margin-right: 50px;
  }
  
  #brv {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-right: 0px;
    height: 100px;
  }

  a {
    text-decoration: none;
    color: #707070;
  }

  #brev {
    height: 25px;
    margin-right: 50px;
  }

  #cursor {
    display: flex;
    justify-content: flex-end;
    margin: -47px 220px 0 0;
  }

  #cursor img {
    height: 30px;
  }

  #clickhere {
    -webkit-animation: scale-up-center 0.75s linear 2s infinite alternate-reverse both; animation: scale-up-center 0.75s linear 2s infinite alternate-reverse both;
  }
}


</style>