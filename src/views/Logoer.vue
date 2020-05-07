<template>
 <main>
   <div id="logoer1">
        <div id="logoer_h1">
            <h2>Logoer</h2>
        </div>
        <div id="splat7">
            <img src="../../assets/splat7.svg" alt="">
        </div>
   </div>
        <div id="logoer">
            <div id="logoer_img">
                <div id="logoer_frame">
                    <img src="" alt="">
                </div>
            </div>
            <div id="logoer_img">
                <div id="logoer_frame">
                    <img src="" alt="">
                </div>
            </div>
            <div id="logoer_img">
                <div id="logoer_frame">
                    <img src="" alt="">
                </div>
            </div>
            <div id="logoer_img">
                <div id="logoer_frame">
                    <img src="" alt="">
                </div>
            </div>
            <div id="logoer_img">
                <div id="logoer_frame">
                    <img src="" alt="">
                </div>
            </div>
            <div id="logoer_img">
                <div id="logoer_frame">
                    <img src="" alt="">
                </div>
            </div>
        </div>
 </main>
</template>

<style>
  #logoer1 {
    background-color: #f5f5f5;
    height: 221px;
    margin: 0 -10px;
    padding-top: 10px;
  }

  #splat7 {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    margin-top: -416px;
  }

  #splat7 img {
    height: 1200px;
  }

  #logoer{
    background-color: #e6e6e6;
    padding: 0 55px 100px 55px;
    margin: 0 -10px;
    height: 1150px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
  }


  #logoer_img {
    width: 30%;
    display: flex;
    justify-content: center;
    position: relative;
  }

  #logoer_frame {
    border: 3px solid #FF33FF;
    width: 325px;
    height: 440px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 100px;
  }

  #logoer_img img {
    height: 410px;
  }

  @media screen and (max-width: 600px) {
    #logoer1 {
    background-color: #f5f5f5;
    height: 126px;
    margin: 0 -10px;
    padding-top: 10px;
  }

  #splat7 {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    margin-top: -100px !important;
  }

  #splat7 img {
    height: 500px !important;
  }

  #logoer{
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


  #logoer_img {
    width: 100%;
    display: flex;
    justify-content: center;
    position: relative;
  }

  #logoer_frame {
    border: 2px solid #FF33FF;
    width: 79% !important;
    height: 390px !important;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 40px !important;
  }

  #logoer_img img {
    height: 350px;
  }
  }

  @media screen and (min-width: 600px) and (max-width: 1000px) {
    #logoer1 {
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

  #logoer{
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


  #logoer_img {
    width: 50%;
    display: flex;
    justify-content: center;
    position: relative;
  }

  #logoer_frame {
    border: 2px solid #FF33FF !important;
    width: 79% !important;
    height: 390px !important;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 40px !important;
  }

  #logoer_img img {
    height: 350px;
  }
  }
</style>