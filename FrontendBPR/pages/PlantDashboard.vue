<template>
  <div class="plant-dashboard-container">
    <NewBoard ref="newBoard" :plants="plants" />
    <div class="content">
      <div class="name-of-dashboard">
        <div class="name">#Backyard</div>
        <div class="description">Description</div>
        <div class="add-new-board" @click="openModal()">
          <div class="add-new">Add a new board</div>
          <div class="add-sign">
            <svg
              id="Circle_Button"
              data-name="Circle Button"
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 48 48"
            >
              <rect id="Area" width="48" height="48" rx="24" fill="#fff3c7" />
              <g id="Icon" transform="translate(14 14)">
                <rect
                  id="Area-2"
                  data-name="Area"
                  width="20"
                  height="20"
                  fill="#3d7a5d"
                  opacity="0"
                />
                <g
                  id="Icon-2"
                  data-name="Icon"
                  transform="translate(1.29 2.499)"
                >
                  <line
                    id="Line"
                    y2="11.667"
                    transform="translate(8.71 1.668)"
                    fill="none"
                    stroke="#0f0e0d"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.667"
                  />
                  <line
                    id="Line-2"
                    data-name="Line"
                    x2="11.667"
                    transform="translate(2.877 7.501)"
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

      <div class="graphs">
        <div class="graph-item" v-for="graph in graphs" :key="graph.id">
          <div class="graph-container"></div>
        </div>
      </div>
      <div class="plants">
        <div class="head">
          <div class="title">Plants</div>
          <div class="add-plant">
            <div class="add-plant-to-dashboard">
              <div class="add-new">Add your plant to this dashboard</div>
              <div class="add-sign-btn">
                <svg
                  id="Circle_Button"
                  data-name="Circle Button"
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                >
                  <rect
                    id="Area"
                    width="48"
                    height="48"
                    rx="24"
                    fill="#fff3c7"
                  />
                  <g id="Icon" transform="translate(14 14)">
                    <rect
                      id="Area-2"
                      data-name="Area"
                      width="20"
                      height="20"
                      fill="#3d7a5d"
                      opacity="0"
                    />
                    <g
                      id="Icon-2"
                      data-name="Icon"
                      transform="translate(1.29 2.499)"
                    >
                      <line
                        id="Line"
                        y2="11.667"
                        transform="translate(8.71 1.668)"
                        fill="none"
                        stroke="#0f0e0d"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.667"
                      />
                      <line
                        id="Line-2"
                        data-name="Line"
                        x2="11.667"
                        transform="translate(2.877 7.501)"
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
        </div>
        <div class="my-plants">
          <div class="plant" v-for="(plant, i) in plants" :key="plant.id">
            <div class="remove-sign">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="33"
                height="33"
                viewBox="0 0 33 33"
              >
                <g
                  id="Circle_Button"
                  data-name="Circle Button"
                  transform="translate(0 0.472)"
                >
                  <rect
                    id="Area"
                    width="33"
                    height="33"
                    rx="16.5"
                    transform="translate(0 -0.472)"
                    fill="#fff3c7"
                  />
                  <g id="Icon" transform="translate(4.744 4.744)">
                    <rect
                      id="Area-2"
                      data-name="Area"
                      width="23"
                      height="23"
                      transform="translate(0.256 -0.215)"
                      fill="#3d7a5d"
                      opacity="0"
                    />
                    <g
                      id="Icon-2"
                      data-name="Icon"
                      transform="translate(4.8 11.52)"
                    >
                      <line
                        id="Line"
                        x2="12.918"
                        fill="none"
                        stroke="#0f0e0d"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2.833"
                      />
                    </g>
                    <g
                      id="Icon-3"
                      data-name="Icon"
                      transform="translate(4.8 11.52)"
                    >
                      <line
                        id="Line-2"
                        data-name="Line"
                        x2="12.918"
                        fill="none"
                        stroke="#0f0e0d"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2.84"
                      />
                    </g>
                  </g>
                </g>
              </svg>
            </div>
            <div class="check" :id="'check' + i"></div>
            <div class="img-wrapper">
              <img
                v-if="plant.image === null"
                src="~assets/images/Icon.png"
                alt=""
                :id="'img' + i"
              />
              <img
                v-else
                :src="`data:image;base64,` + plant.image"
                alt=""
                :id="'img' + i"
                class="image"
              />
            </div>
            <div class="names">
              <div class="name">{{ plant.name }}</div>
              <div class="name">{{ plant.plantName }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getCookie } from "../static/cookie.js";
import NewBoard from "../components/Modals/NewBoard.vue";
export default {
  components: {
    NewBoard
  },
  layout: "default-with-nav",
  async fetch() {
    let authToken = getCookie("auth");

    await this.$axios
      .get("https://orangebush.azurewebsites.net/Plant/MyPlant/all", {
        headers: {
          token: authToken
        }
      })
      .then(res => {
        this.plants = res.data;
        console.log(res);
      });
  },
  data() {
    return {
      graphs: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      plants: []
    };
  },
  methods: {
    openModal() {
      this.$refs.newBoard.open();
    }
  }
};
</script>

<style lang="scss" scoped>
.plant-dashboard-container {
  width: 100vw;
  height: 100vh;

  .content {
    width: 100%;
    height: 100%;
    position: relative;
  }
}

.name-of-dashboard {
  color: white;
  position: relative;
  margin-top: 3% !important;
  left: 6%;
  width: 100%;
  .name {
    font-size: 2rem;
  }

  .description {
    font-size: 1rem;
  }

  .add-new-board {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100% !important;
    position: absolute;
    left: 30%;
    top: 0;
    .add-sign {
      margin-left: 0.3rem !important;
      cursor: pointer;
    }
  }
}

.graphs {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  width: 85%;
  position: relative;
  height: 100%;
  left: 6%;
  margin-top: 2% !important;

  .graph-item {
    height: 30%;
    flex: 1 1 25%;
    width: 50%;
    margin: 0 0 0 20px !important;
    background-color: #1f1e1c;
  }
  // :first-child {
  //   background-color: red;
  // }
}

.plants {
  color: white;
  position: relative;
  left: 6%;
  font-size: 1rem;
  width: 100%;

  .my-plants {
    margin: 3rem 0 0 0 !important;
    height: 30vh;
    width: 100%;
    overflow-y: scroll;
    position: inherit;
  }
  .plant {
    width: 255px;
    height: 77px;
    display: flex;
    align-items: center;
    background-color: #1f1e1c;
    margin: 1.2rem 0 0.7rem 0 !important;
    position: inherit;
    // margin: 1rem 0 0 0 !important;
    .img-wrapper {
      width: 90px;
      height: 65px;
      position: absolute;
      left: 5%;
      .image {
        width: inherit;
        height: inherit;
      }
    }

    .names {
      position: absolute;
      left: 50%;
    }

    .remove-sign {
      position: absolute;
      right: -1rem;
      top: -0.5rem;
    }
  }
}

.head {
  margin: 1.7rem 0 0 0 !important;
  display: flex;
  width: 85% !important;
  align-items: center;

  .add-plant {
    position: absolute;
    right: 15%;
    .add-plant-to-dashboard {
      display: flex;
      align-items: center;

      .add-sign-btn {
        margin-left: 12px !important;
      }
    }
  }
}
</style>
