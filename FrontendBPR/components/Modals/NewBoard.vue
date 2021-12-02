<template>
  <div class="container">
    <transition name="fade" appear>
      <div class="modal-overlay" v-if="showModal"></div>
    </transition>
    <transition name="slide" appear>
      <div class="modal" v-if="showModal">
        <div class="cancel-sign" @click="close">
          <svg
            id="Circle_Button_"
            data-name="Circle Button "
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 48 48"
          >
            <rect
              id="Area_SIZE:MEDIUM_STATE:DEFAULT_STYLE:STYLE2_"
              data-name="Area [SIZE:MEDIUM][STATE:DEFAULT][STYLE:STYLE2]"
              width="48"
              height="48"
              rx="24"
              fill="#3d7a5d"
            />
            <g id="Icon_" data-name="Icon " transform="translate(14 14)">
              <rect
                id="Area_ICON:feather_x_SIZE:MEDIUM_STATE:DEFAULT_STYLE:STYLE2_"
                data-name="Area [ICON:feather/x][SIZE:MEDIUM][STATE:DEFAULT][STYLE:STYLE2]"
                width="20"
                height="20"
                fill="rgba(253,73,198,0.35)"
                opacity="0"
              />
              <g id="Icon" transform="translate(-1 -1)">
                <line
                  id="Line"
                  x1="10"
                  y2="10"
                  transform="translate(6 6)"
                  fill="none"
                  stroke="#fff"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.667"
                />
                <line
                  id="Line-2"
                  data-name="Line"
                  x2="10"
                  y2="10"
                  transform="translate(6 6)"
                  fill="none"
                  stroke="#fff"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.667"
                />
              </g>
            </g>
          </svg>
        </div>
        <div class="first-half">
          <div class="title-and-sub">
            <div class="title">New Board</div>
            <div class="sub-text">
              Choose one plant for this board
            </div>
          </div>
          <div class="your-plants">
            <div class="plant" v-for="(plant, i) in plants" :key="plant.id">
              <div class="check" :id="'check' + i" @click="check(i)">
                <img src="~assets/images/Icon.png" alt="" :id="'img' + i" />>
              </div>
              <div class="img-wrapper">
                <img src="~assets/images/new-plant-placeholder.png" alt="" />
              </div>
              <div class="names">
                <div class="name">{{ plant.givenName }}</div>
                <div class="name">{{ plant.plantName }}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="second-half">
          <Dropdown title="Type of graph" :items="addedPlants" />
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import Dropdown from "../Dropdowns/Dropdown.vue";
export default {
  props: {
    text: String
  },
  components: {
    Dropdown
  },
  data() {
    return {
      showModal: false,
      plants: [
        {
          givenName: "Given Name",
          plantName: "Plant Name"
        },
        {
          givenName: "Given Name",
          plantName: "Plant Name"
        },
        {
          givenName: "Given Name",
          plantName: "Plant Name"
        },
        {
          givenName: "Given Name",
          plantName: "Plant Name"
        }
      ],
      addedPlants: []
    };
  },
  methods: {
    open() {
      this.showModal = true;
      const x = window.scrollX;
      const y = window.scrollY;
      window.onscroll = function() {
        window.scrollTo(x, y);
      };
    },
    close() {
      this.showModal = false;
      window.onscroll = function() {};
    },
    check(i) {
      let checkMark = document.getElementById("check" + i);
      let img = document.getElementById("img" + i);
      if (checkMark.classList.contains("checked")) {
        checkMark.classList.remove("checked");
        checkMark.style.backgroundColor = "#aaaaaa";
        img.style.opacity = 0.5;
        this.addedPlants.splice(i, 1);
      } else {
        checkMark.classList.add("checked");
        checkMark.style.backgroundColor = "#fbf7ea";
        img.style.opacity = 1;
        this.addedPlants.push(this.plants[i]);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap");
@import "./assets/buttons.scss";
.modal-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 998;
  background-color: rgba(0, 0, 0, 0.3);
}

.modal {
  font-family: "Poppins", "Sans serif";
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
  display: flex;

  width: 895px;
  height: 603px;
  background: url("./assets/images/add-new-plant.png") no-repeat center center;

  padding: 25px;

  // .login-form {
  //   width: 100%;
  //   height: 50%;
  //   display: flex;
  //   flex-direction: column;

  //   .email {
  //     height: 48px;
  //     width: 280px;
  //     border: none;
  //     text-align: left;
  //     padding-left: 22px;
  //     background: white;
  //     outline: none !important;
  //   }
  //   .password {
  //     height: 48px;
  //     width: 280px;
  //     border: none;
  //     text-align: left;
  //     padding-left: 22px;
  //     background: white;
  //     outline: none !important;
  //   }

  //   .email {
  //     position: relative;
  //     left: 15%;
  //   }
  //   .password {
  //     margin-top: 18px !important;
  //     position: relative;
  //     left: 15%;
  //   }
  // }
}

.first-half {
  display: flex;
  flex-flow: column;
  width: 50%;
  align-self: center;
  height: 350px !important;
  ms-overflow-style: none;
  scrollbar-width: none;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
  .plant {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 18px;
    display: flex;
    width: 255px;
    height: 90px;
    position: relative;
    background: #1f1e1c;

    .img-wrapper {
      position: absolute;
      width: 90px;
      left: 20px;
      height: 65px;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  .names {
    position: absolute;
    right: 20px;
    color: #fbf7ea;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .name {
      margin: 4px !important;
    }
  }

  .check {
    background: #aaaaaa;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    position: absolute;
    top: -10px;
    right: -20px;
    cursor: pointer;
    img {
      width: 100%;
      height: 100%;
      opacity: 0.5;
    }
  }

  .your-plants {
    color: white;
    font-size: 20px;
    position: relative;
    left: 45px;
  }
}

.second-half {
  width: 60%;
  align-self: center;
  color: white;
}

.title-and-sub {
  width: 100%;
  height: 30%;
}
.title {
  font-size: 32px;
  color: #fbf7ea;
  font-weight: bold;
  position: absolute;
  top: 5%;
  left: 10%;
}

.sub-text {
  font-size: 16px;
  color: #fbf7ea;
  font-weight: bold;
  position: absolute;
  top: 12%;
  left: 10%;

  .create-account {
    color: #fff3c7;
  }
}

.cancel-sign {
  position: absolute;
  left: 90%;
  cursor: pointer;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s;
}

.slide-enter,
.slide-leave-to {
  transform: translateY(-50%) translateX(100vw);
}
</style>
