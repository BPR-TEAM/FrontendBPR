<template>
  <div class="plant-dashboard-container">
    <NewBoard ref="newBoard" :plants="plants" />
    <div class="content">
      <div class="name-of-dashboard">
        <div class="name">#{{ dashboardData.name }}</div>
        <div class="description">{{ dashboardData.description }}</div>
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
        <div
          class="graph-item"
          v-for="(board, i) in dashboardData.boards"
          :key="board.id"
        >
          <div class="title" :id="'title' + i"></div>
          <div
            class="graph-container"
            ref="graph"
            :id="'graphContainer' + i"
          ></div>
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
            <div class="remove-sign" @click="removePlant(plant)">
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
import { authenticated } from "../middleware/authenticated.js";
import NewBoard from "../components/Modals/NewBoard.vue";
import randomColor from "randomcolor";
import Vue from "vue";
import LineChart from "../components/Charts/LineChart.vue";
import BarChart from "../components/Charts/BarChart.vue";
const options = {
  responsive: false,
  maintainAspectRatio: false,
  animation: {
    animateRotate: false
  },
  plugins: {
    title: {
      color: "#fff3c7",
      display: true,
      font: {
        size: 18
      }
    }
  },
  scales: {
    y: {
      ticks: {
        color: "#fff3c7",
        font: {
          size: 18
        }
      },
      grid: {
        color: "#fff3c7",
        lineWidth: 0.5
      }
    },
    x: {
      ticks: {
        color: "#fff3c7",
        font: {
          size: 18
        }
      },
      grid: {
        color: "#fff3c7",
        lineWidth: 0.5
      }
    }
  }
};
export default {
  middleware: authenticated,
  mounted() {
    this.$nextTick(async function() {
      // Code that will run only after the
      // entire view has been rendered
      let authToken = getCookie("auth");
      let id = this.$route.query.id;

      await this.$axios
        .get(`https://orangebush.azurewebsites.net/Dashboard?id=${id}`, {
          headers: {
            token: authToken
          }
        })
        .then(res => {
          this.dashboardData = res.data;
          this.plants = res.data.userPlants;
          console.log(this.dashboardData);
        });

      //graph
      let ComponentClass;
      console.log(this.dashboardData);
      this.dashboardData.boards.forEach((board, i) => {
        if (this.getChart(board.type, board) === "Line") {
          ComponentClass = Vue.extend(LineChart);
        } else {
          ComponentClass = Vue.extend(BarChart);
        }
        let instance = new ComponentClass({
          propsData: {
            options: options,
            width: 750,
            height: 450,
            chartData: this.chartData
          }
        });
        instance.$mount();

        let graphContainer = document.getElementById(`graphContainer${i}`);
        let title = document.getElementById(`title${i}`);
        graphContainer.appendChild(instance.$el);
        title.innerHTML = this.plantNameTitle;
      });
    });
  },

  components: {
    NewBoard,
    LineChart,
    BarChart
  },

  data() {
    return {
      graphs: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      plantNameTitle: "",
      plants: [],
      dashboardData: "",
      component: "",
      options,
      chartData: {
        labels: [],
        datasets: [
          {
            backgroundColor: "rgb(76, 195, 192)",
            label: "Min value",
            data: [],
            // fill: true
            borderColor: "rgb(76, 195, 192)"
          }
        ]
      }
    };
  },
  methods: {
    async removePlant(plant) {
      let authToken = getCookie("auth");
      let id = this.$route.query.id;
      let plantImg = plant.image;

      let req = {
        id: plant.id,
        plantId: plant.plantId,
        name: plant.name,
        image: plantImg
      };

      console.log(req);

      try {
        await this.$axios
          .delete(
            `https://orangebush.azurewebsites.net/Dashboard/plants?id=${id}`,
            {
              headers: {
                token: authToken,
                "Content-Type": "application/json-patch+json"
              },
              data: req
            }
          )
          .then(res => console.log(res.data));
      } catch (e) {}
    },
    openModal() {
      this.$refs.newBoard.open();
    },
    getChart(type, board_) {
      let chartDataType = type.split(",");
      let graph = chartDataType[0];
      let dataType = chartDataType[1];
      this.chartData = {
        labels: [],
        datasets: []
      };
      this.dashboardData.userPlants.forEach(element => {
        if (board_.plantId === element.plantId) {
          // console.log(element);
          this.plantNameTitle = `${element.commonName},${type.split(",")[1]}`;
          let color = randomColor();
          this.chartData.datasets.push({
            backgroundColor: [color],
            label: element.name,
            data: [],
            borderColor: [color],
            plugins: {
              title: dataType
            }
          });
          element.measurements.forEach(measurement => {
            if (measurement.measurementDefinition.name === dataType) {
              this.chartData.datasets[
                this.chartData.datasets.length - 1
              ].data.push(measurement.value);

              let day = new Date(measurement.date).getDay();
              let month = new Date(measurement.date).getMonth();
              let year = new Date(measurement.date).getFullYear();

              let dateVal = `${day}/${month}/${year}`;

              this.chartData.labels.push(dateVal);
            }
          });
        }
      });

      return graph;
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
  // flex-direction: row;
  justify-content: center;

  width: 100%;
  position: relative;
  height: 100%;
  // left: 6%;
  margin-top: 2% !important;
  overflow-y: scroll;

  .title {
    position: absolute;
    font-size: 1.5rem;
    color: white;
    text-align: center;
    // left: 40%;
    padding: 0.7rem !important;
  }

  .graph-item {
    overflow-x: scroll;
    overflow-y: scroll;
    flex-basis: 40% !important;
    // height: 30%;
    width: 50%;
    height: 50%;
    margin: 0 0 1.2rem 1.2rem !important;
    background-color: #1f1e1c;

    .graph-container {
      width: 100%;
      height: 100%;
    }
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
      cursor: pointer;
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
