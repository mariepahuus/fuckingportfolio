<template>
 <main>
   <div id="hjemme_1">
        <div id="hjemme_header">
            <h2>Hjemmesider</h2>
        </div>
        <div id="splat7">
            <img src="../../assets/splat7.svg" alt="">
        </div>
   </div>
        <div id="hjemme">
            <div id="hjemme_img">
                <div id="hjemme_frame2">
                    <div id="hjemme_h1">
                        <h2></h2>
                    </div>
                </div>
            </div>
            <div id="hjemme_img">
                <div id="hjemme_frame2">
                    <div id="hjemme_h1">
                        <h2></h2>
                    </div>
                </div>
            </div>
            <div id="hjemme_img">
                <div id="hjemme_frame2">
                    <div id="hjemme_h1">
                        <h2></h2>
                    </div>
                    </div>
                </div>
            </div>

 </main>
</template>

<style>
  #hjemme_1 {
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

  #hjemme{
    background-color: #e6e6e6;
    padding: 0 55px 100px 55px;
    margin: 0 -10px;
    height: 2000px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
  }


  #hjemme_img {
    width: 100%;
    display: flex;
    justify-content: center;
    position: relative;
  }

  #hjemme_frame2 {
    border: 3px solid #FF33FF;
    width: 75%;
    height: 450px;
    display: flex;
    justify-content: center;
    margin-top: 100px;
    flex-wrap: wrap;
    padding: 0 30px 20px 30px;
    
  }

  #hjemme_h1 {
      width: 100%;
      height: 150px;
  }

  @media screen and (max-width: 600px) {
    #hjemme_1 {
    background-color: #f5f5f5;
    height: 126px;
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

  #hjemme{
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


  #hjemme_img {
    width: 100%;
    display: flex;
    justify-content: center;
    position: relative;
  }

  #hjemme_frame2 {
    border: 2px solid #FF33FF;
    width: 75%;
    height: 200px;
    display: flex;
    justify-content: center;
    margin-top: 50px;
    flex-wrap: wrap;
    padding: 0 30px 20px 30px;
    
  }  
  }


  @media screen and (min-width: 600px) and (max-width: 1000px) {
    #hjemme_1 {
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

  #hjemme{
    background-color: #e6e6e6;
    padding: 0 10px 100px 10px;
    margin: 0 -10px;
    height: 1250px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    justify-content: center;
    width: 100%;
  }


  #hjemme_img {
    width: 100%;
    display: flex;
    justify-content: center;
    position: relative;
  }

  #hjemme_frame2 {
    border: 2px solid #FF33FF;
    width: 75%;
    height: 300px;
    display: flex;
    justify-content: center;
    margin-top: 50px;
    flex-wrap: wrap;
    padding: 0 30px 20px 30px;
    
  } 
  }

</style>