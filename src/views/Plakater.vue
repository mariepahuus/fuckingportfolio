<template>
 <main>
   <div id="projects_1_1">
        <div id="pr_header">
            <h2>Plakater</h2>
        </div>
        <div id="splat7">
            <img src="../../assets/splat7.svg" alt="">
        </div>
   </div>
        <div id="plakater">
            <div id="plakater_img">
                <div id="img_frame">
                    <img src="../../assets/plakat1.png" alt="">
                </div>
            </div>
            <div id="plakater_img">
                <div id="img_frame">
                    <img src="../../assets/andrea.svg" alt="">
                </div>
            </div>
            <div id="plakater_img">
                <div id="img_frame">
                    <img src="../../assets/kaj.svg" alt="">
                </div>
            </div>
            <div id="plakater_img">
                <div id="img_frame">
                    <img src="../../assets/illu3.svg" alt="">
                </div>
            </div>
            <div id="plakater_img">
                <div id="img_frame">
                    <img src="../../assets/illu4.svg" alt="">
                </div>
            </div>
            <div id="plakater_img">
                <div id="img_frame">
                    <img src="../../assets/illu6.svg" alt="">
                </div>
            </div>
        </div>
 </main>
</template>

<style>
  #projects_1_1 {
    background-color: #f5f5f5;
    height: 221px;
    margin: 0 -10px;
    padding-top: 10px;
  }

  #splat7 {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    margin-top: -416px !important;
  }

  #splat7 img {
    height: 1200px;
  }

  #plakater{
    background-color: #e6e6e6;
    padding: 0 55px 100px 55px;
    margin: 0 -10px;
    height: 1150px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
  }


  #plakater_img {
    width: 30%;
    display: flex;
    justify-content: center;
    position: relative;
  }

  #img_frame {
    border: 3px solid #FF33FF;
    width: 325px;
    height: 440px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 100px;
  }

  #plakater_img img {
    height: 410px;
  }

@media screen and (max-width: 600px) {
    #projects_1_1 {
    background-color: #f5f5f5;
    height: 126px;
    margin: 0 -10px;
    padding-top: 10px;
  }

  #splat7 {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    margin-top: -195px !important;
  }

  #splat7 img {
    height: 500px !important;
  }

  #plakater{
    background-color: #e6e6e6;
    padding: 0 10px 100px 10px;
    margin: 0 -10px;
    height: 2800px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    justify-content: center;
    width: 100%;
  }


  #plakater_img {
    width: 100%;
    display: flex;
    justify-content: center;
    position: relative;
  }

  #img_frame {
    border: 2px solid #FF33FF !important;
    width: 79% !important;
    height: 390px !important;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 40px !important;
  }

  #plakater_img img {
    height: 350px;
  }
  }

  @media screen and (min-width: 600px) and (max-width: 1000px) {
    #projects_1_1 {
    background-color: #f5f5f5;
    height: 200px;
    margin: 0 -10px;
    padding-top: 10px;
  }

  #splat7 {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    margin-top: 0;
    padding-top: 123px;
  }

  #splat7 img {
    height: 880px !important;
  }

  #plakater{
    background-color: #e6e6e6;
    padding: 0 10px 100px 10px;
    margin: 0 -10px;
    height: 1500px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    justify-content: center;
    width: 100%;
  }


  #plakater_img {
    width: 50%;
    display: flex;
    justify-content: center;
    position: relative;
  }

  #img_frame {
    border: 2px solid #FF33FF !important;
    width: 79% !important;
    height: 390px !important;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 40px !important;
  }

  #plakater_img img {
    height: 350px;
  }
  }
</style>