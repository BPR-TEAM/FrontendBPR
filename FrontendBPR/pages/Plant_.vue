<template>
  <div class="container">
    <NewPlant ref="new-plant" />
    <div class="top-container">
      <div class="img-container">
        <img
          :src="`data:image/png;base64,` + image"
          id="image"
          class="plant-image"
          :alt="plantName"
        />
      </div>
      <div class="plant-data">
        <div class="tags">
          <div class="tag" v-for="tag in tags" :key="tag.id">
            <Tag :text="tag.name" />
          </div>

          <div class="add-this">
            <div>Add this plant</div>
            <div class="add-this-button" @click="openModal()">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="58"
                height="58"
                viewBox="0 0 58 58"
              >
                <g
                  id="Circle_Button"
                  data-name="Circle Button"
                  transform="translate(0 0.015)"
                >
                  <rect
                    id="Area"
                    width="58"
                    height="58"
                    rx="29"
                    transform="translate(0 -0.015)"
                    fill="#fff3c7"
                  />
                  <g id="Icon" transform="translate(16.857 16.842)">
                    <rect
                      id="Area-2"
                      data-name="Area"
                      width="24"
                      height="24"
                      transform="translate(0.143 0.143)"
                      fill="#3d7a5d"
                      opacity="0"
                    />
                    <g
                      id="Icon-2"
                      data-name="Icon"
                      transform="translate(4.976 4.988)"
                    >
                      <line
                        id="Line"
                        y2="14"
                        transform="translate(7.024 0.012)"
                        fill="none"
                        stroke="#3b3b3b"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      />
                      <line
                        id="Line-2"
                        data-name="Line"
                        x2="14"
                        transform="translate(0.024 7.012)"
                        fill="none"
                        stroke="#3b3b3b"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      />
                    </g>
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </div>
        <div class="plant-name">{{ plantName }}</div>
        <div class="plant-description">{{ description }}</div>
      </div>
    </div>
    <div class="advices">
      <div class="headers">
        <div class="header" @click="changeComponent('AdviceContainer')">
          Advices
        </div>
        <div class="header" @click="changeComponent('NotesContainer')">
          Notes
        </div>
        <div class="header" @click="changeComponent('OverviewContainer')">
          Overview
        </div>
        <div class="header" @click="changeComponent('MeasurementsCont')">
          Data
        </div>
      </div>
      <component class="component" v-bind:is="component"></component>
    </div>
  </div>
</template>

<script>
import Tag from "../components/Tag.vue";
import NewPlant from "../components/Modals/NewPlant.vue";
import { authenticated } from "../middleware/authenticated.js";
export default {
  components: {
    Tag,
    NewPlant
  },

  middleware: authenticated,

  mounted() {
    this.component = () =>
      import(`../components/page-containers/AdviceContainer.vue`);
  },

  async fetch() {
    let paramId = this.$route.query.id;
    await this.$axios
      .get(`https://orangebush.azurewebsites.net/Plant?id=${paramId}`)
      .then(response => {
        this.plantName = response.data.commonName;
        this.description = response.data.description;
        this.image = response.data.image;
        this.tags = response.data.tags;
      });
  },

  data() {
    return {
      authToken: "",
      plantName: "",
      image: "",
      description: "",
      component: "",
      plantTagId: "",
      tags: []
    };
  },
  methods: {
    openModal() {
      this.$refs["new-plant"].open();
    },

    changeComponent(name) {
      this.component = () =>
        import(`../components/page-containers/${name}.vue`);
    }
  },
  layout: "default-with-nav"
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap");
* {
  margin: 0px !important;
  padding: 0px !important;
}
.container {
  position: relative;
  font-family: "Poppins", sans-serif;
  // z-index: 1;
  animation: fade 500ms;
  .top-container {
    position: absolute;
    top: 180px;
    display: flex;
    width: 100%;

    .plant-data {
      width: 100%;
      height: 600px;
    }
    .tags {
      width: 100% !important;
      height: 10%;
      display: flex;

      position: relative;
      left: 2vw;
      .first-tag {
        margin-left: 40px !important;
      }
      .tag {
        margin-left: 10px !important;
        // margin-right: 65px !important;
        // margin-right: 65px !important;
      }

      .add-this {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        float: flex-end;
        color: white;
        left: 40vw;

        .add-this-button {
          margin-left: 5px !important;
        }
      }
    }
    .img-container {
      width: 40vw;
      height: 600px;
      animation: img-fade 500ms;
      .plant-image {
        width: 100%;
        height: 100%;
      }
    }

    .plant-name {
      color: #cecece;
      width: 100%;
      height: 10%;
      position: relative;
      font-size: 30px;
      top: 1vh;
      left: 3vw;
    }

    .plant-description {
      height: 50vh;
      color: white;
      width: 60vw;
      font-family: Arial, Helvetica, sans-serif;
      position: relative;
      font-size: 22px;
      font-weight: 400;
      cursor: default;
      top: 1vh;
      left: 3vw;
      overflow-y: scroll;
    }
  }

  .advices {
    height: 830px;
    width: 715px;
    border-top: 1px solid #3b3b3b;
    position: absolute;
    top: 100vh;
    left: 35vw;

    .headers {
      display: flex;
      justify-content: center;
    }

    .header {
      margin: 0 10px !important;
      color: #fff3c7;
      text-align: center;
      position: relative;
      top: 10px;
      cursor: pointer;
    }

    .component {
      margin-top: 50px !important;
    }
  }
}

@keyframes img-fade {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@keyframes drop {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}
</style>
