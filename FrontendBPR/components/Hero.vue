<template>
  <div class="container">
    <div class="wrapper">
      <!-- <img src="../assets/images/homepage_background.png" alt="homepage_background"> -->
      <div class="brand-search-box">
        <div class="header-text">
          Design is the silent ambassador of your brand
        </div>
        <div class="subheader">
          <div class="sub-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
          <div class="search-bar">
            
              <input
                type="text"
                class="input"
                name="txt"
                placeholder="Search"
              />
               <div class="autocom-box">
                 
                  <li>Channel</li>
                  <li>Blogger</li>
                  <li>Bollywood</li>
                  <li>Login Form in HTML & CSS</li>
                  <li>How to start YouTube Channel</li>
                 
                  <!-- here list are inserted from javascript -->
              </div>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    let suggestions = [
    "Channel",
    "CodingLab",
    "CodingNepal",
    "YouTube",
    "YouTuber",
    "YouTube Channel",
    "Blogger",
    "Bollywood",
    "Vlogger",
    "Vechiles",
    "Facebook",
    "Freelancer",
    "Facebook Page",
    "Designer",
    "Developer",
    "Web Designer",
    "Web Developer",
    "Login Form in HTML & CSS",
    "How to learn HTML & CSS",
    "How to learn JavaScript",
    "How to became Freelancer",
    "How to became Web Designer",
    "How to start Gaming Channel",
    "How to start YouTube Channel",
    "What does HTML stands for?",
    "What does CSS stands for?",
];
    return{suggestions}
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/variables.scss";
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap");
* {
  margin: 0 !important;
}

.container {
  margin: 0px !important;
  padding: 0px !important;
}

.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100%;
}

.brand-search-box {
  width: 860px;
  height: 285px;

  .header-text {
    color: #fff3c7;
    font-size: 56px;
    font-family: "Poppins", sans-serif;
    font-weight: bold;
    text-align: center;
  }

  .subheader {
    display: flex;
    align-items: center;
    flex-flow: column;
    justify-content: center;
  }
  .sub-text {
    color: #fbf7ea;
    width: 560px;
    height: 48px;
    font-family: "Poppins", sans-serif;
    text-align: center;
    font-size: 16px;
  }

  .search-bar {
    margin-top: 32px !important;

    .input {
      width: 405px;
      height: 48px;
      background: #fff3c7;
      color: black !important;
      font-family: "Poppins", "Sans serif";
      border-radius: 28px;
      text-align: center;
      outline: none !important;
      ::placeholder {
        opacity: 1;
      }
    }
  }

  .autocom-box{
  padding: 0;
  // opacity: 0;
  // overflow-y: auto;
  height: 100%;
  z-index:99;
  background: #fff;
  border-radius:20px;
  margin-top:8px !important;
  li{
  list-style: none;
  padding: 12px !important;
  text-align: center;
  font-family: "Poppins", "Sans serif";
  width: 100%;
  cursor: default;
  border-radius:32px;
  margin-top:10px !important;
  margin-bottom:10px !important;

      &:hover{
        background: #efefef;
      }
    }
  }
}
</style>
