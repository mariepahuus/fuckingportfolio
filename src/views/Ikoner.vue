<template>
 <main>
   <div id="ikoner_1">
        <div id="ikoner_header">
            <h2>Ikoner</h2>
        </div>
        <div id="splat7">
            <img src="../../assets/splat7.svg" alt="">
        </div>
   </div>
        <div id="ikoner">
            <div id="ikoner_img">
                <div id="ikon_frame">
                    <div id="ikon_h1">
                        <h2>Adobe ikoner</h2>
                    </div>
                    <div id="ikon_box">
                        <img src="../../assets/Ai.svg" alt="">
                    </div>
                    <div id="ikon_box">
                        <img src="../../assets/Ps.svg" alt="">
                    </div>
                    <div id="ikon_box">
                        <img src="../../assets/Id.svg" alt="">
                    </div>
                    <div id="ikon_box">
                        <img src="../../assets/Xd.svg" alt="">
                    </div>
                    <div id="ikon_box">
                        <img src="../../assets/Ae.svg" alt="">
                    </div>
                    <div id="ikon_box">
                        <img src="../../assets/Pr.svg" alt="">
                    </div>
                </div>
            </div>
            <div id="ikoner_img">
                <div id="ikon_frame2">
                    <div id="ikon_h1">
                        <h2>Sociale medier</h2>
                    </div>
                    <div id="ikon_box">
                        <img src="../../assets/li.svg" alt="">
                    </div>
                    <div id="ikon_box">
                        <img src="../../assets/face.svg" alt="">
                    </div>
                    <div id="ikon_box">
                        <img src="../../assets/instaa.svg" alt="">
                    </div>
                </div>
            </div>
            <div id="ikoner_img">
                <div id="ikon_frame2">
                    <div id="ikon_h1">
                        <h2>Andre ikoner</h2>
                    </div>
                    <div id="ikon_box">
                        <img src="../../assets/vsc.svg" alt="">
                    </div>
                    <div id="ikon_box">
                        <img src="../../assets/tele.svg" alt="">
                    </div>
                    <div id="ikon_box">
                        <img src="../../assets/brv.svg" alt="">
                    </div>
                    <div id="ikon_box">
                        <img src="../../assets/curs.svg" alt="">
                    </div>
                </div>
            </div>
            
        </div>
 </main>
</template>

<style>
  #ikoner_1 {
    background-color: #f5f5f5;
    height: 221px;
    margin: 0 -10px;
    padding-top: 10px;
  }

  #splat7 {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    margin-top: -431px;
  }

  #splat7 img {
    height: 1200px;
  }

  #ikoner{
    background-color: #e6e6e6;
    padding: 0 55px 100px 55px;
    margin: 0 -10px;
    height: 2000px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
  }


  #ikoner_img {
    width: 100%;
    display: flex;
    justify-content: center;
    position: relative;
  }

  #ikon_frame {
    border: 3px solid #FF33FF;
    width: 75%;
    height: 550px;
    display: flex;
    justify-content: center;
    margin-top: 100px;
    flex-wrap: wrap;
    padding: 0 30px 30px 30px;
  }

  #ikon_frame2 {
    border: 3px solid #FF33FF;
    width: 75%;
    height: 400px;
    display: flex;
    justify-content: center;
    margin-top: 100px;
    flex-wrap: wrap;
    padding: 0 30px 20px 30px;
    
  }

  #ikon_h1 {
      width: 100%;
      height: 150px;
  }

  #ikon_box {
      width: 25%;
  }

  #ikoner_img img {
    height: 100px;
  }


  @media screen and (max-width: 600px) {
    #ikoner_1 {
    background-color: #f5f5f5;
    height: 126px;
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

  #ikoner{
    background-color: #e6e6e6;
    padding: 0 10px 100px 10px;
    margin: 0 -10px;
    height: 800px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    justify-content: center;
    width: 100%;
  }


  #ikoner_img {
    width: 100%;
    display: flex;
    justify-content: center;
    position: relative;
  }

  #ikon_frame {
    border: 2px solid #FF33FF;
    width: 75%;
    height: 220px;
    display: flex;
    justify-content: center;
    margin-top: 50px;
    flex-wrap: wrap;
    padding: 0 30px 10px 30px;
  }

  #ikon_frame2 {
    border: 2px solid #FF33FF;
    width: 75%;
    height: 170px;
    display: flex;
    justify-content: center;
    margin-top: 50px;
    flex-wrap: wrap;
    padding: 0 30px 20px 30px;
    
  }

  #ikon_h1 {
      width: 100%;
      height: 60px;
  }

  #ikon_box {
      width: 25%;
  }

  #ikoner_img img {
    height: 50px;
  }  
  }


  @media screen and (min-width: 600px) and (max-width: 1000px) {
    #ikoner_1 {
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
    height: 1200px;
  }

  #ikoner{
    background-color: #e6e6e6;
    padding: 0 10px 100px 10px;
    margin: 0 -10px;
    height: 1000px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    justify-content: center;
    width: 100%;
  }


  #ikoner_img {
    width: 100%;
    display: flex;
    justify-content: center;
    position: relative;
  }

  #ikon_frame {
    border: 2px solid #FF33FF;
    width: 75%;
    height: 300px;
    display: flex;
    justify-content: center;
    margin-top: 50px;
    flex-wrap: wrap;
    padding: 0 30px 10px 30px;
  }

  #ikon_frame2 {
    border: 2px solid #FF33FF;
    width: 75%;
    height: 220px;
    display: flex;
    justify-content: center;
    margin-top: 50px;
    flex-wrap: wrap;
    padding: 0 30px 20px 30px;
    
  }

  #ikon_h1 {
      width: 100%;
      height: 110px;
  }

  #ikon_box {
      width: 25%;
  }

  #ikoner_img img {
    height: 50px;
  } 
  }
</style>