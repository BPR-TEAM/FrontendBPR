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
                v-model="plantName"
                placeholder="Name"
              />
              <div class="label">Tags</div>
              <div class="white-box" ref="container">
                <input
                  type="text"
                  class="add-tag"
                  name="add-tag"
                  label="Tags"
                  placeholder="Add more tags..."
                  v-on:keyup.enter="addTag()"
                  v-model="tagName"
                />
              </div>
              <div class="save interactive-button" @click="savePlant()">
                Save
              </div>
            </div>
          </div>
        </div>
        <div class="second-half">
          <div class="add-image">
            <img
              id="plant-preview"
              src="~assets/images/new-plant-placeholder.png"
              alt="plant-preview"
              class="new-plant-image"
            />
          </div>
          <div class="add-button" @click="openDirectory">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="52"
              height="52"
              viewBox="0 0 52 52"
            >
              <g
                id="Circle_Button"
                data-name="Circle Button"
                transform="translate(0 0.015)"
              >
                <rect
                  id="Area"
                  width="52"
                  height="52"
                  rx="26"
                  transform="translate(0 -0.015)"
                  fill="#3d7a5d"
                />
                <g id="Icon" transform="translate(15.12 15.106)">
                  <rect
                    id="Area-2"
                    data-name="Area"
                    width="21"
                    height="21"
                    transform="translate(-0.121 -0.121)"
                    fill="#3d7a5d"
                    opacity="0"
                  />
                  <g
                    id="Icon-2"
                    data-name="Icon"
                    transform="translate(4.32 4.32)"
                  >
                    <line
                      id="Line"
                      y2="12.452"
                      transform="translate(6.226 0)"
                      fill="none"
                      stroke="#fff"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    />
                    <line
                      id="Line-2"
                      data-name="Line"
                      x2="12.452"
                      transform="translate(0 6.226)"
                      fill="none"
                      stroke="#fff"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    />
                  </g>
                </g>
              </g>
            </svg>

            <!-- <img src="~assets/images/Circle button.svg" alt="" /> -->
            <!-- <label class="custom-file-upload">
              <input type="file" />
            </label> -->
          </div>
          <input
            type="file"
            accept="image/*"
            id="choose-file"
            style="display:none;"
          />
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import Vue from "vue";
import Tag from "../Tag.vue";
export default {
  components: {
    Tag
  },
  data() {
    return {
      showModal: false,
      tagName: "",
      addImage: "../assets/images/new-plant-placeholder.png",
      blob: {},
      tags: [],
      request: "",
      plantName: ""
      // plantId: "2",
      // authToken: "2"
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

    addTag() {
      let ComponentClass = Vue.extend(Tag);
      let instance = new ComponentClass({
        propsData: { text: this.tagName }
      });
      instance.$mount();
      this.$refs.container.appendChild(instance.$el);

      let tagObj = { name: this.tagName };
      this.tags.push(tagObj);
    },

    openDirectory() {
      let chooseFile = document.getElementById("choose-file");
      chooseFile.click();
      chooseFile.addEventListener("change", function() {
        const files = chooseFile.files[0];
        // console.log(files);
        if (files) {
          const fileReader = new FileReader();
          fileReader.readAsDataURL(files);
          fileReader.addEventListener("load", function() {
            document.getElementById("plant-preview").style.display = "block";
            document.getElementById("plant-preview").src = this.result;
          });
        }
      });
    },

    async savePlant() {
      const id = this.$route.query.id;
      const token = this.getCookie("auth");
      const image = document.getElementById("plant-preview").src;
      const imageToConvert = document.getElementById("plant-preview");
      const blob = new Blob([image]);

      let request = {
        plantId: id,
        name: this.plantName,
        image: image.split(",")[1]
      };

      //TODO
      await this.$axios
        .post(`https://orangebush.azurewebsites.net/Plant/MyPlant`, request, {
          headers: {
            token: token
          }
        })
        .then(res => console.log(res.status))
        .catch(e => console.log(e.message));
    },
    getCookie(cname) {
      let name = cname + "=";
      let decodedCookie = decodeURIComponent(document.cookie);
      let ca = decodedCookie.split(";");
      for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == " ") {
          c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
      }
      return "";
    },
    convertImage(image) {
      const canvas = this.drawImageToCanvas(image);
      const ctx = canvas.getContext("2d");

      let result = [];
      for (let y = 0; y < canvas.height; y++) {
        result.push([]);
        for (let x = 0; x < canvas.width; x++) {
          let data = ctx.getImageData(x, y, 1, 1).data;
          result[y].push(data[0]);
          result[y].push(data[1]);
          result[y].push(data[2]);
        }
      }

      return this.convertArray(result);
    },

    drawImageToCanvas(image) {
      const canvas = document.createElement("canvas");
      canvas.width = image.width;
      canvas.height = image.height;
      canvas.getContext("2d").drawImage(image, 0, 0, image.width, image.height);
      return canvas;
    },
    convertArray(array) {
      return JSON.stringify(array)
        .replace(/\[/g, "{")
        .replace(/\]/g, "}");
    }
  }
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap");
@import "./assets/buttons.scss";
@import "~bulma/sass/utilities/mixins.sass";
.modal-overlay {
  position: relative;
  width: 5000px;
  height: 2000px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.5);
  pointer-events: none !important;
}

.modal {
  font-family: "Poppins", "Sans serif";
  position: fixed;
  border: 1px solid gray;
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
        width: 100%;
        border: none;
        text-align: left;
        padding-left: 22px;
        background: white;
        outline: none !important;
        position: relative;
        left: 15%;
      }
    }

    .label {
      color: white;
      position: relative;
      left: 15%;
      margin-top: 6px;
    }

    .white-box {
      // display: flex;
      // flex-direction: column;
      width: 100%;
      height: 250px;
      padding: 0 22px 22px 22px;
      background: white;
      position: relative;
      overflow: hidden;
      left: 15%;
      overflow-y: scroll;
    }
    .add-tag {
      width: 100%;
      border: none;
      text-align: left;
      outline: none !important;
    }
  }
}

.first-half {
  display: flex;
  flex-flow: column;
  width: 40%;
  z-index: 2;
}

.second-half {
  width: 50%;
  position: relative;
  align-self: center;
  left: 8%;
  // pointer-events: none;

  .add-image {
    width: 430px !important;
    height: 330px !important;

    .new-plant-image {
      position: relative;
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }

  .add-button {
    position: absolute;
    bottom: 0;
    right: 0;
    border: none !important;

    &:hover {
      cursor: pointer;
    }
    .add-plant-button {
      // background: url("~assets/images/Circle button.svg") !important;
      // background: green !important;
      cursor: pointer;
      border: none;
      width: 38px;
      height: 38px;
      z-index: 3;
    }
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

.save {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  top: 5%;
  left: 15%;
  width: 100%;
  cursor: pointer;
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

//TODO MOBILE

.modal-overlay {
  @include until($tablet) {
    display: none;
  }
}
.modal {
  @include until($tablet) {
    width: 100vw !important;
    height: 100vh !important;
    flex-direction: column;
    .first-half {
      width: 100vw !important;
    }
    .second-half {
      width: 100vw !important;
    }

    .title {
      width: 60vw;
      top: 2vh;
      left: 10%;
    }

    .cancel-sign {
      left: 80vw;
      top: 2vh;
      z-index: 10;
    }

    .add-form {
      width: 85vw !important;

      .add-field,
      .label,
      .white-box,
      .save {
        left: 0 !important;
      }

      .white-box {
        height: 30vh;
      }

      .save {
        width: 100% !important;
        top: 30vh;
        height: 48px !important;
      }
    }

    .add-image {
      width: 50vw !important;
      height: 20vh !important;
      position: absolute;
      bottom: 0;
      top: 7vh;
      right: 15vw;
    }
    .add-button {
      position: relative !important;
      top: 5vh !important;
      left: 30vw;
      z-index: 10;
    }
  }
}
</style>
