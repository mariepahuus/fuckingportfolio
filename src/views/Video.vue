<template>
 <main>
   <div id="video_1">
        <div id="video_header">
            <h2>Video produktion</h2>
        </div>
        <div id="splat7">
            <img src="../../assets/splat7.svg" alt="">
        </div>
   </div>
        <div id="video">
            <div id="video_img">
                <div id="video_frame">
                    <div id="video_h1">
                        <h2>Video CV</h2>
                    </div>
                    <div id="video1">
                        <iframe id="videooo" width="100%" height="500"
                            src="https://www.youtube.com/embed/FH92GlRPWdo">
                        </iframe>
                    </div>
                </div>
            </div>
            <div id="video_img">
                <div id="video_frame">
                    <div id="video_h1">
                        <h2>Infomercial</h2>
                    </div>
                    <div id="video1">
                        <iframe id="videooo" width="100%" height="500"
                            src="https://www.youtube.com/embed/0K3ww2PVFdQ">
                        </iframe>
                    </div>
                   
                </div>
            </div>
            <div id="video_img">
                <div id="video_frame">
                 <div id="video_h1">
                        <h2>Remake af scene fra 'Friends'</h2>
                    </div>
                    <div id="video1">
                        <iframe id="videooo" width="100%" height="500"
                            src="https://www.youtube.com/embed/KizzCYD96VA">
                        </iframe>
                    </div>
                </div>
            </div>
            <div id="video_img">
                <div id="video_frame">
                 <div id="video_h1">
                        <h2>Reklame for CMS</h2>
                    </div>
                    <div id="video1">
                        <iframe id="videooo" width="100%" height="500"
                            src="https://www.youtube.com/embed/lGl38kwzMa8">
                        </iframe>
                    </div>
                </div>
            </div>
            <div id="video_img">
                <div id="video_frame">
                 <div id="video_h1">
                        <h2>Carlsberg reklame</h2>
                    </div>
                    <div id="video1">
                        <iframe id="videooo" width="100%" height="500"
                            src="https://www.youtube.com/embed/44xeF2mxv3k">
                        </iframe>
                    </div>
                </div>
            </div>
        </div>
 </main>
</template>

<style>
  #video_1 {
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

  #video{
    background-color: #e6e6e6;
    padding: 0 55px 100px 55px;
    margin: 0 -10px;
    height: 4500px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
  }


  #video_img {
    width: 100%;
    display: flex;
    justify-content: center;
    position: relative;
  }

  #video_frame {
    border: 3px solid #FF33FF;
    width: 75%;
    height: 685px;
    display: flex;
    justify-content: center;
    margin-top: 100px;
    flex-wrap: wrap;
    padding: 0 30px 30px 30px;
  }


  #video_h1 {
      width: 100%;
      height: 150px;
      padding-bottom: 30px;
  }

  #video1 {
      width: 100%;
  }


  #video_img img {
    height: 100px;
  }

  @media screen and (max-width: 600px) {
    #video_1 {
    background-color: #f5f5f5;
    height: 126px;
    margin: 0 -10px;
    padding-top: 10px;
  }

  #splat7 {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    margin-top: -432px;
  }

  #splat7 img {
    height: 1200px;
  }

  #video{
    background-color: #e6e6e6;
    padding: 0 10px 100px 10px;
    margin: 0 -10px;
    height: 1900px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    justify-content: center;
    width: 100%;
  }


  #video_img {
    width: 100%;
    display: flex;
    justify-content: center;
    position: relative;
  }

  #video_frame {
    border: 2px solid #FF33FF;
    width: 100%;
    height: 300px;
    display: flex;
    justify-content: center;
    margin-top: 50px;
    flex-wrap: wrap;
    padding: 0 20px 20px 20px;
    
  }

  #video_h1 {
      width: 100%;
      height: 40px;
      padding-bottom: 30px;
  }

  #video1 {
      width: 100%;
  }

  #video_img img {
    height: 100px;
  } 

  #videooo {
    height: 230px;
    width: 100%;
  }
  }


  @media screen and (min-width: 600px) and (max-width: 1000px) {
    #video_1 {
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

  #video{
    background-color: #e6e6e6;
    padding: 0 10px 100px 10px;
    margin: 0 -10px;
    height: 3300px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    justify-content: center;
    width: 100%;
  }


  #video_img {
    width: 100%;
    display: flex;
    justify-content: center;
    position: relative;
  }

  #video_frame {
    border: 2px solid #FF33FF;
    width: 100%;
    height: 540px;
    display: flex;
    justify-content: center;
    margin-top: 50px;
    flex-wrap: wrap;
    padding: 0 20px 20px 20px;
    
  }

  #video_h1 {
      width: 100%;
      height: 40px;
      padding-bottom: 90px;
  }

  #video1 {
      width: 100%;
  }

  #video_img img {
    height: 100px;
  } 

  #videooo {
    height: 400px;
    width: 100%;
  }
  }
</style>