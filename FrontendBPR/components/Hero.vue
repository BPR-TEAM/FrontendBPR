<template>
  <div class="container">
    <div class="wrapper">
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
                  <!-- here it the list inserted from javascript -->
              </div>
            
          </div>
        </div>
      </div>
      <div class="green-footer"></div>
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
  },

  mounted(){
    this.dynamicSearch();
  },

  methods:{
    dynamicSearch(){
    const searchWrapper = document.querySelector(".search-bar");
    const inputBox = searchWrapper.querySelector("input");
    const suggBox = searchWrapper.querySelector(".autocom-box");
     
      inputBox.onkeyup = (e) => {
        let userData = e.target.value;
        let dynamicArray = [];
        if(e.key === "Backspace") {
          if(userData ===""){
            suggBox.classList.add("invisible");
            }
          }
        else {
          suggBox.classList.remove("invisible"); 
          if(userData){
            dynamicArray = this.suggestions.filter((data) => {
              return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
            });


            dynamicArray = dynamicArray.map((data) => {
              return data = `<li class="item-list">${data}</li>`;
            })

              
              this.showSuggestions(dynamicArray,inputBox,suggBox);
          }
        }
     
      }
    },
    
    showSuggestions(list,inputBox,suggBox){
    let listData;
    if(!list.length){
      
      try{
      userValue = inputBox.value;
      listData = `<li class="item-list">${userValue}</li>`;
      }catch(e){
          listData = '';
      }
        
    }else{
      listData = list.join('');
    }

    
    console.log(suggBox);
    suggBox.innerHTML = listData;
}//end of method
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
  overflow-y:scroll;
  height:100%;
  // display: flex;
  // flex-direction: column
}

.wrapper {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index:2;
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
  overflow-y: scroll;
  height:100%;
  z-index:99;
  background: #fff;
  border-radius:20px;
  margin-top:8px !important;

  .active{
    opacity: 1 !important;
    pointer-events:auto;
    display:block !important;
    }
  }

}
  .green-footer{
    width: 100%;
    height:500px;
    background:#396C54;
    position: absolute;
    bottom:-500px;
    margin-top:100px !important;
    z-index:1
  }
</style>
