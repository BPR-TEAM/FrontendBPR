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
            <div class="title">New Dashboard</div>
          </div>
          <div class="form">
            <input
              class="name"
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              ref="name"
              v-model="dashboardName"
            />
            <textarea
              id="note"
              class="note-field"
              name="note"
              rows="100"
              cols="50"
              placeholder="Description..."
              v-model="dashboardDesc"
            />
            <div class="create interactive-button" @click="create()">
              Create
            </div>
          </div>
        </div>
        <div class="second-half">
          <div class="your-plants">Your Plants</div>
          <div class="plant" v-for="(plant, i) in plants" :key="plant.id">
            <div class="check" :id="'check' + i" @click="check(i)">
              <img src="~assets/images/Icon.png" alt="" :id="'img' + i" />>
            </div>
            <div class="img-wrapper">
              <img
                v-if="plant.image === null"
                src="~assets/images/new-plant-placeholder.png"
                alt="plant image"
              />
              <img
                v-else
                :src="`data:image;base64,` + plant.image"
                alt="plant image"
              />
            </div>
            <div class="names">
              <div class="name">{{ plant.name }}</div>
              <div class="name">{{ plant.plantName }}</div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { getCookie } from "../../static/cookie";
export default {
  props: ["plants"],
  data() {
    return {
      dashboardName: "",
      dashboardDesc: "",
      showModal: false,
      dashboardPlants: []
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

        this.dashboardPlants.splice(i, 1);
      } else {
        checkMark.classList.add("checked");
        checkMark.style.backgroundColor = "#fbf7ea";
        img.style.opacity = 1;
        this.dashboardPlants.push(this.plants[i]);
      }
    },

    async create() {
      let authToken = getCookie("auth");
      let id = authToken.split("=")[0];
      let req = {
        name: this.dashboardName,
        description: this.dashboardDesc,
        userPlants: this.dashboardPlants
      };

      console.log(req);

      try {
        await this.$axios
          .post("https://orangebush.azurewebsites.net/Dashboard", req, {
            headers: {
              token: authToken
            }
          })
          .then(res => {
            console.log(res.data);
            window.location.reload();
          });
      } catch (e) {}
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
  border: 1px solid gray;
  width: 895px;
  height: 603px;
  background: url("~assets/images/add-new-plant.png") no-repeat center center;

  padding: 25px;

  .form {
    width: 100%;
    height: 60%;

    .name {
      height: 48px;
      width: 280px;
      border: none;
      text-align: left;
      padding-left: 22px;
      background: white;
      outline: none !important;
    }

    .name {
      position: relative;
      left: 15%;
    }

    .note-field {
      margin-top: 18px !important;
      height: 260px;
      width: 280px;
      border: none;
      text-align: left;
      padding-left: 22px !important;
      background: white;
      outline: none !important;
      position: relative;
      left: 15%;
      resize: none;
    }

    .create {
      width: 280px !important;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      top: 5%;
      left: 15%;
      cursor: pointer;
    }
  }
}

.first-half {
  display: flex;
  flex-flow: column;
  width: 50%;
}

.second-half {
  width: 40%;
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
    margin: 18px !important;
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
  }
}

.title-and-sub {
  width: 100%;
  height: 20%;
}
.title {
  font-size: 32px;
  color: #fbf7ea;
  font-weight: bold;
  position: absolute;
  top: 10%;
  left: 10%;
}

.cancel-sign {
  position: absolute;
  left: 90%;
  cursor: pointer;
  top: 5%;
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
