<template>
  <div class="hero-container">
    <div class="loading-prediction" id="loading">
      <span class="pred-text">
        Wait while our experts try to figure out which plant it is…
      </span>
    </div>
    <div class="background-image">
      <img
        src="../assets/images/homepage_background.png"
        alt=""
        class="background"
      />
    </div>
    <div class="wrapper">
      <div class="brand-search-box">
        <div class="header-text">
          Orange bush helps you step-up your gardening game!
        </div>
        <div class="subheader">
          <div class="sub-text">
            Start by searching the plant you desire to plant or that you own and
            get to know more about it. Forgot the name?
            <span style="color:#FAE595;">Click on the button below.</span>
          </div>
          <div class="search-bar">
            <input
              type="text"
              class="input"
              name="txt"
              placeholder="Search"
              id="search"
              ref="search"
            />
            <div class="predict-image" @click="predictPlant()">
              <input
                type="file"
                accept="image/*"
                id="choose-file"
                style="display:none;"
              />
              />
              <svg
                id="Circle_Button"
                data-name="Circle Button"
                xmlns="http://www.w3.org/2000/svg"
                width="61"
                height="61"
                viewBox="0 0 61 61"
              >
                <rect
                  id="Area"
                  width="61"
                  height="61"
                  rx="30.5"
                  fill="#fae595"
                  opacity="0.87"
                />
                <g id="Icon" transform="translate(14.959 14.92)">
                  <rect
                    id="Area-2"
                    data-name="Area"
                    width="30"
                    height="30"
                    transform="translate(0.041 0.08)"
                    fill="#3d7a5d"
                    opacity="0"
                  />
                  <g
                    id="Icon-2"
                    data-name="Icon"
                    transform="translate(3.956 3.956)"
                  >
                    <rect
                      id="Rect"
                      width="22.5"
                      height="22.5"
                      rx="2"
                      fill="none"
                      stroke="#0f0e0d"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2.5"
                    />
                    <circle
                      id="Path"
                      cx="1.875"
                      cy="1.875"
                      r="1.875"
                      transform="translate(5 5)"
                      fill="none"
                      stroke="#0f0e0d"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2.5"
                    />
                    <path
                      id="Path-2"
                      data-name="Path"
                      d="M26.25,18.75,20,12.5,6.25,26.25"
                      transform="translate(-3.75 -3.75)"
                      fill="none"
                      stroke="#0f0e0d"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2.5"
                    />
                  </g>
                </g>
              </svg>
            </div>
            <div class="autocom-box invisible">
              <!-- here it the list inserted from javascript -->
            </div>
          </div>
        </div>
      </div>
      <div class="green-footer">
        <div class="orange-bush-footer">
          <div class="footer-brand">Orange Bush</div>
          <div class="footer-subtext">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
          <div class="icons">
            <!-- facebook -->
            <div class="icon-item">
              <svg
                id="Circle_Button_"
                data-name="Circle Button "
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
              >
                <rect
                  id="Area_SIZE:MEDIUM_STATE:DEFAULT_STYLE:STYLE3_"
                  data-name="Area [SIZE:MEDIUM][STATE:DEFAULT][STYLE:STYLE3]"
                  width="48"
                  height="48"
                  rx="24"
                  fill="#fff3c7"
                />
                <g id="Icon_" data-name="Icon " transform="translate(14 14)">
                  <rect
                    id="Area_ICON:feather_facebook_SIZE:MEDIUM_STATE:DEFAULT_STYLE:STYLE3_"
                    data-name="Area [ICON:feather/facebook][SIZE:MEDIUM][STATE:DEFAULT][STYLE:STYLE3]"
                    width="20"
                    height="20"
                    fill="rgba(253,73,198,0.35)"
                    opacity="0"
                  />
                  <g id="Icon" transform="translate(5.833 1.667)">
                    <path
                      id="Path"
                      d="M15,1.667H12.5A4.167,4.167,0,0,0,8.333,5.833v2.5h-2.5v3.334h2.5v6.666h3.334V11.667h2.5L15,8.333H11.667v-2.5A.833.833,0,0,1,12.5,5H15Z"
                      transform="translate(-5.833 -1.667)"
                      fill="none"
                      stroke="#0f0e0d"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.667"
                    />
                  </g>
                </g>
              </svg>
            </div>

            <!-- twitter -->
            <div class="icon-item">
              <svg
                id="Circle_Button_"
                data-name="Circle Button "
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
              >
                <rect
                  id="Area_SIZE:MEDIUM_STATE:DEFAULT_STYLE:STYLE3_"
                  data-name="Area [SIZE:MEDIUM][STATE:DEFAULT][STYLE:STYLE3]"
                  width="48"
                  height="48"
                  rx="24"
                  fill="#fff3c7"
                />
                <g id="Icon_" data-name="Icon " transform="translate(14 14)">
                  <rect
                    id="Area_ICON:feather_twitter_SIZE:MEDIUM_STATE:DEFAULT_STYLE:STYLE3_"
                    data-name="Area [ICON:feather/twitter][SIZE:MEDIUM][STATE:DEFAULT][STYLE:STYLE3]"
                    width="20"
                    height="20"
                    fill="rgba(253,73,198,0.35)"
                    opacity="0"
                  />
                  <g id="Icon" transform="translate(0.833 2.491)">
                    <path
                      id="Path"
                      d="M19.167,2.5A9.094,9.094,0,0,1,16.55,3.775,3.733,3.733,0,0,0,10,6.275v.833A8.884,8.884,0,0,1,2.5,3.333s-3.333,7.5,4.167,10.834A9.7,9.7,0,0,1,.833,15.833C8.333,20,17.5,15.833,17.5,6.25a3.739,3.739,0,0,0-.067-.692A6.427,6.427,0,0,0,19.167,2.5Z"
                      transform="translate(-0.833 -2.491)"
                      fill="none"
                      stroke="#0f0e0d"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.667"
                    />
                  </g>
                </g>
              </svg>
            </div>

            <!-- instagram -->
            <div class="icon-item">
              <svg
                id="Circle_Button_"
                data-name="Circle Button "
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
              >
                <rect
                  id="Area_SIZE:MEDIUM_STATE:DEFAULT_STYLE:STYLE3_"
                  data-name="Area [SIZE:MEDIUM][STATE:DEFAULT][STYLE:STYLE3]"
                  width="48"
                  height="48"
                  rx="24"
                  fill="#fff3c7"
                />
                <g id="Icon_" data-name="Icon " transform="translate(14 14)">
                  <rect
                    id="Area_ICON:feather_linkedin_SIZE:MEDIUM_STATE:DEFAULT_STYLE:STYLE3_"
                    data-name="Area [ICON:feather/linkedin][SIZE:MEDIUM][STATE:DEFAULT][STYLE:STYLE3]"
                    width="20"
                    height="20"
                    fill="rgba(253,73,198,0.35)"
                    opacity="0"
                  />
                  <g id="Icon" transform="translate(1.667 1.667)">
                    <path
                      id="Path"
                      d="M13.333,6.667a5,5,0,0,1,5,5V17.5H15V11.667a1.667,1.667,0,1,0-3.333,0V17.5H8.333V11.667A5,5,0,0,1,13.333,6.667Z"
                      transform="translate(-1.667 -1.667)"
                      fill="none"
                      stroke="#0f0e0d"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.667"
                    />
                    <rect
                      id="Rect"
                      width="3.333"
                      height="10"
                      transform="translate(0 5.833)"
                      fill="none"
                      stroke="#0f0e0d"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.667"
                    />
                    <circle
                      id="Path-2"
                      data-name="Path"
                      cx="1.667"
                      cy="1.667"
                      r="1.667"
                      fill="none"
                      stroke="#0f0e0d"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.667"
                    />
                  </g>
                </g>
              </svg>
            </div>

            <!-- YouTube -->
            <div class="icon-item">
              <svg
                id="Circle_Button_"
                data-name="Circle Button "
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
              >
                <rect
                  id="Area_SIZE:MEDIUM_STATE:DEFAULT_STYLE:STYLE3_"
                  data-name="Area [SIZE:MEDIUM][STATE:DEFAULT][STYLE:STYLE3]"
                  width="48"
                  height="48"
                  rx="24"
                  fill="#fff3c7"
                />
                <g id="Icon_" data-name="Icon " transform="translate(14 14)">
                  <rect
                    id="Area_ICON:feather_youtube_SIZE:MEDIUM_STATE:DEFAULT_STYLE:STYLE3_"
                    data-name="Area [ICON:feather/youtube][SIZE:MEDIUM][STATE:DEFAULT][STYLE:STYLE3]"
                    width="20"
                    height="20"
                    fill="rgba(253,73,198,0.35)"
                    opacity="0"
                  />
                  <g id="Icon" transform="translate(0.833 3.333)">
                    <path
                      id="Path"
                      d="M18.783,5.35a2.316,2.316,0,0,0-1.616-1.667A60.022,60.022,0,0,0,10,3.333a54.752,54.752,0,0,0-7.167.384A2.315,2.315,0,0,0,1.217,5.383,24.145,24.145,0,0,0,.833,9.792a24.132,24.132,0,0,0,.384,4.441,2.316,2.316,0,0,0,1.616,1.6A54.752,54.752,0,0,0,10,16.217a54.752,54.752,0,0,0,7.167-.384,2.315,2.315,0,0,0,1.616-1.666,24.131,24.131,0,0,0,.384-4.375A24.143,24.143,0,0,0,18.783,5.35Z"
                      transform="translate(-0.833 -3.333)"
                      fill="none"
                      stroke="#0f0e0d"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.667"
                    />
                    <path
                      id="Path-2"
                      data-name="Path"
                      d="M8.125,12.517l4.792-2.725L8.125,7.067Z"
                      transform="translate(-0.833 -3.333)"
                      fill="none"
                      stroke="#0f0e0d"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.667"
                    />
                  </g>
                </g>
              </svg>
            </div>

            <!-- WhatsApp -->
            <div class="icon-item">
              <svg
                id="Circle_Button_"
                data-name="Circle Button "
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
              >
                <rect
                  id="Area_SIZE:MEDIUM_STATE:DEFAULT_STYLE:STYLE3_"
                  data-name="Area [SIZE:MEDIUM][STATE:DEFAULT][STYLE:STYLE3]"
                  width="48"
                  height="48"
                  rx="24"
                  fill="#fff3c7"
                />
                <g id="Icon_" data-name="Icon " transform="translate(14 14)">
                  <rect
                    id="Area_ICON:feather_phone_SIZE:MEDIUM_STATE:DEFAULT_STYLE:STYLE3_"
                    data-name="Area [ICON:feather/phone][SIZE:MEDIUM][STATE:DEFAULT][STYLE:STYLE3]"
                    width="20"
                    height="20"
                    fill="rgba(253,73,198,0.35)"
                    opacity="0"
                  />
                  <g id="Icon" transform="translate(1.76 1.667)">
                    <path
                      id="Path"
                      d="M18.333,14.1v2.5a1.667,1.667,0,0,1-1.816,1.667,16.488,16.488,0,0,1-7.192-2.559,16.24,16.24,0,0,1-5-5A16.488,16.488,0,0,1,1.767,3.483,1.667,1.667,0,0,1,3.425,1.667h2.5A1.666,1.666,0,0,1,7.592,3.1a10.68,10.68,0,0,0,.583,2.342A1.665,1.665,0,0,1,7.8,7.2L6.742,8.258a13.319,13.319,0,0,0,5,5L12.8,12.2a1.665,1.665,0,0,1,1.758-.375,10.68,10.68,0,0,0,2.342.583A1.667,1.667,0,0,1,18.333,14.1Z"
                      transform="translate(-1.76 -1.667)"
                      fill="none"
                      stroke="#0f0e0d"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.667"
                    />
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </div>

        <div class="links-and-resources">
          <div class="resources">
            <div class="title">Resources</div>
            <div class="link-item">News</div>
            <div class="link-item">Blog</div>
            <div class="link-item">Videos</div>
            <div class="link-item">FAQs</div>
          </div>
          <div class="services">
            <div class="title">Services</div>
            <div class="link-item">Service 1</div>
            <div class="link-item">Service 2</div>
            <div class="link-item">Service 3</div>
            <div class="link-item">Service 4</div>
          </div>
          <div class="products">
            <div class="title">Products</div>
            <div class="link-item">Product 1</div>
            <div class="link-item">Product 2</div>
            <div class="link-item">Product 3</div>
            <div class="link-item">Product 4</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { getPrediction } from "../static/prediction";
import { setPrediction } from "../static/prediction";
import { prediction } from "../static/prediction";
export default {
  data() {
    let suggestions = [];
    let plantId;
    let predict = prediction;
    return { suggestions, plantId, predict };
  },

  mounted() {
    this.dynamicSearch();
  },

  watch: {
    prediction
  },

  methods: {
    predictPlant() {
      let chooseFile = document.getElementById("choose-file");
      chooseFile.click();
      chooseFile.addEventListener("change", function() {
        let userImage;
        const files = chooseFile.files[0];
        // console.log(files);
        if (files) {
          const fileReader = new FileReader();
          fileReader.readAsDataURL(files);
          fileReader.addEventListener("load", async function() {
            let char = "'";
            userImage = this.result.split(",")[1];
            userImage = char.concat(userImage);
            userImage = userImage.concat(char);

            let predictionTxt = document.getElementById("search");
            // const searchWrapper = document.querySelector(".search-bar");
            let loading = document.getElementById("loading");

            try {
              loading.style.display = "flex";
              await axios
                .post(
                  "http://localhost:7071/api/FlowerPredictFunction",
                  userImage
                )
                .then(res => {
                  loading.style.display = "none";
                  predictionTxt.value = res.data.predictedLabel.toUpperCase();
                });
            } catch (e) {}
          });
        }
      });
    },

    changePredict(pred) {
      this.predict = pred;
    },
    dynamicSearch() {
      const searchWrapper = document.querySelector(".search-bar");
      const inputBox = searchWrapper.querySelector("input");
      const suggBox = searchWrapper.querySelector(".autocom-box");

      inputBox.onkeyup = async e => {
        console.log("triggered");
        let userData = e.target.value;
        let searchData;
        let dynamicArray = [];
        if (e.key === "Backspace") {
          if (userData === "") {
            suggBox.classList.add("invisible");
          }
        } else {
          let res = await this.$axios
            .post(
              `https://orangebush.azurewebsites.net/Plant/search?name=${userData}`,
              []
            )
            .catch(e => console.log(e.status));

          searchData = res.data;

          if (searchData) {
            suggBox.classList.remove("invisible");
            if (userData) {
              dynamicArray = searchData.filter(data => {
                return data;
              });

              dynamicArray = dynamicArray.map(data => {
                let arr = data.split(",");
                data = arr[0] + " / " + arr[1];

                console.log(data);
                return (data = `<a href="/Plant_?id=${arr[2]}" class="item-list">${data}</a>`);
              });
              this.showSuggestions(dynamicArray, inputBox, suggBox);
            }
          }
        }
      };
    },

    showSuggestions(list, inputBox, suggBox) {
      let listData;
      if (!list.length) {
        try {
          userValue = inputBox.value;
          listData = `<a href="/Plant_" class="item-list">${userValue}</a>`;
        } catch (e) {
          listData = "";
        }
      } else {
        listData = list.join("");
      }

      suggBox.innerHTML = listData;
    } //end of method
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/variables.scss";
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap");
@import "~bulma/sass/utilities/mixins.sass";
* {
  margin: 0 !important;
}

.loading-prediction {
  display: none;
  justify-content: center;
  align-items: center;
  top: -10vh;
  width: 100vw;
  height: 155vh;
  font-size: 3rem;
  color: white;
  background-color: #396c54;
  position: absolute;
  z-index: 20;
  opacity: 0.9;

  .pred-text {
    z-index: 30;
    padding: 5rem !important;
    font-family: "Poppins", sans-serif;
    filter: brightness(1.75) !important;
  }
}

.hero-container {
  margin: 0px !important;
  padding: 0px !important;
  overflow-y: scroll;
  height: 100%;

  .background-image {
    width: 100%;
    height: 100%;
    position: absolute;
    bottom: 0;
    .background {
      width: inherit;
      height: inherit;
    }
  }
  animation: drop 1000ms;
}

.wrapper {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 90%;
  z-index: 2;
  // background: url("../assets/images/homepage_background.png") no-repeat center
  //   center;
  background-size: cover;
}

.brand-search-box {
  animation: fade 900ms ease-in;
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
    z-index: 999;
    position: relative;

    .predict-text {
      position: absolute;
      width: 100%;
      color: white;
      top: 20%;
      left: 130%;
    }
    .predict-image {
      position: absolute;
      display: flex;
      right: -20%;
      top: -10%;
      margin: 0 0 0 0.4rem !important;
      cursor: pointer;
      z-index: relative;
    }
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

  .autocom-box {
    overflow-y: scroll;
    height: 300px;
    width: 100%;
    z-index: 999;
    background: #fff;
    border-radius: 20px;
    margin-top: 8px !important;
    display: flex;
    flex-direction: column;
    position: absolute;

    .active {
      opacity: 1 !important;
      pointer-events: auto;
      display: block !important;
      z-index: 99;
    }
  }
}
.green-footer {
  // animation: rise 1000ms ease-in;
  width: 100%;
  height: 50vh;
  background: #396c54;
  position: absolute;
  top: 80vh;
  margin-top: 100px !important;
  // z-index: 1 !important;

  .orange-bush-footer {
    position: absolute;
    top: 20%;
    left: 10%;

    .footer-brand {
      font-family: "Poppins", "Sans serif";
      font-size: 32px;
      font-weight: bold;
      color: #fbf7ea;
    }

    .footer-subtext {
      font-family: "Poppins", "Sans serif";
      width: 370px;
      font-size: 16px;
      color: #a1a1a1;
    }
  }
}

.icons {
  display: flex;
  margin-top: 84px !important;

  .icon-item {
    margin-right: 28px !important;
    cursor: pointer;
  }
}

.links-and-resources {
  font-family: "Poppins", "Sans serif";
  // display: flex;

  .resources {
    position: absolute;
    top: 20%;
    left: 80%;
  }
  .services {
    position: absolute;
    top: 20%;
    left: 70%;
  }
  .products {
    position: absolute;
    top: 20%;
    left: 60%;
  }
  .title {
    font-size: 24px;
    font-weight: bold;
    color: #fbf7ea;
    margin-bottom: 24px !important;
  }

  .link-item {
    color: #fbf7ea;
    font-size: 18;
    font-weight: 500;
    margin-bottom: 24px !important;
  }
}

@keyframes drop {
  0% {
    transform: translateY(-100%);
  }

  90% {
    transform: translateY(10%);
  }

  100% {
    transform: translateY(0);
  }
}
@keyframes rise {
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0);
  }
}
@keyframes fade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

//TODO MOBILE VERSION
@media (max-width: $mobile) {
  .brand-search-box {
    width: 300px;
    height: 200px;

    .header-text {
      font-size: 40px;
      text-align: left;
    }

    .sub-text {
      width: 100%;
    }
  }
  .input {
    width: 255px !important;
    align-self: flex-start;
  }

  .autocom-box {
    width: 90%;
    text-align: center;
  }

  .green-footer {
    // display: block;
    height: 150vh;
    flex-direction: column;
    position: absolute;
    top: 80vh;
    .footer-brand {
      font-size: 24px !important;
    }
    .orange-bush-footer {
      left: 0;
      top: 10vh;
      width: 100% !important;
      text-align: center;
      // height: 90%;

      .footer-brand {
        position: relative;
        top: 5vh;
      }

      .footer-subtext {
        width: 100%;
        padding: 2rem !important;
      }
    }

    .links-and-resources {
      display: block !important;

      width: 100vw;
      position: relative;
      height: 100%;
      .resources {
        left: 30vh;
        top: 50vh;
      }
      .services {
        left: 10vh;
        top: 50vh;
      }
      .products {
        left: 10vh;
        top: 90vh;
      }
      .title {
        font-size: 20px;
        font-weight: bold;
        color: #fbf7ea;
        margin-bottom: 24px !important;
      }

      .link-item {
        color: #fbf7ea;
        font-size: 18;
        font-weight: 500;
        margin-bottom: 24px !important;
      }
    }

    .icons {
      display: flex;
      justify-content: center;
      margin-top: 0px !important;
      position: relative;
      top: 100vh;
      .icon-item {
        margin-right: 0px !important;
      }
    }
  }
}
</style>
