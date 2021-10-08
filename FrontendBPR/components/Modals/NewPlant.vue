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
            <div class="title">New plant</div>
          </div>
          <div class="add-form">
            <div class="add-container">
              <input
                type="text"
                class="add-field"
                name="add-plant"
                placeholder="Name"
              />
              <div class="register interactive-button">Save</div>
            </div>
          </div>
        </div>
        <div class="second-half"></div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    open() {
      this.showModal = true;
      const x = window.scrollX;
      const y = window.scrollY;
      window.onscroll = function () {
        window.scrollTo(x, y);
      };
    },
    close() {
      this.showModal = false;
      window.onscroll = function () {};
    },
  },
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
  display: flex !important;
  background: url("./assets/images/add-new-plant.png") no-repeat center center;

  width: 895px;
  height: 603px;
  background-color: black;

  padding: 25px;

  .add-form {
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;

    .add-container {
      .add-field {
        height: 48px;
        width: 270px;
        border: none;
        text-align: left;
        padding-left: 22px;
        background: white;
        outline: none !important;
        position: relative;
        left: 15%;
      }
    }
  }
}

.first-half {
  display: flex;
  flex-flow: column;
  width: 50%;
  z-index: 2;
}

.second-half {
  width: 20%;
  position: relative;
  align-self: center;
  left: 10%;
  z-index: 1;
  pointer-events: none;
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
  top: 10%;
  left: 10%;
}

.sub-text {
  font-size: 13px;
  color: #fbf7ea;
  font-weight: 400;
  position: absolute;
  top: 25%;
  left: 10%;

  .create-account {
    color: #fff3c7;
  }
}

.register {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  top: 10%;
  left: 15%;
  width: 328px;
  cursor: pointer;
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
