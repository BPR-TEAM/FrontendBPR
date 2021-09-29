<template>
  <div class="container">
    <div class="wrapper">
        <!-- <img src="../assets/images/homepage_background.png" alt="homepage_background"> -->
        <div class="brand-search-box">
            <div class="header-text">Design is the silent ambassador of your brand</div>
            <div class="subheader">
              <div class="sub-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
              <div class="search-bar">
                  <form name="search">
                    <input type="text" class="input" name="txt" placeholder="Search">
                  </form>
              </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import "../assets/variables.scss";
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');
*{
    margin:0 !important;
}

.container{
  height:$tablet;
  margin:0px !important;
  padding:0px !important;
}

.wrapper{
  display:flex;
  justify-content:center;
  align-items: center;
  position: absolute;
  width: 100%;
  height:100%;
}

.brand-search-box{
  width:860px;
  height:285px;

  .header-text{
    color:#FFF3C7;
    font-size:56px;
    font-family: 'Poppins', sans-serif;
    font-weight:bold;
    text-align:center;
  }

  .subheader{
    display:flex;
    align-items: center;
    flex-flow: column;
    justify-content: center;
  }
  .sub-text{
    color:#FBF7EA;
    width:560px;
    height:48px;
    font-family: 'Poppins', sans-serif;
    text-align:center;
    font-size: 16px;
  }

  .search-bar{
    margin-top:32px !important;
    
    .input{
      width:405px;
      height:48px;
      background:#FFF3C7;
      color:black !important;
      font-family: "Poppins", 'Sans serif';
      border-radius:28px;
      text-align: center;
      outline:none!important;
     ::placeholder{
        opacity:1;
       } 
    }
  }
  
}

</style>