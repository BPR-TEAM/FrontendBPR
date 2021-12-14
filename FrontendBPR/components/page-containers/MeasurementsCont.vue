<template>
  <div class="measurements-container">
    <Measurement ref="measurement" :id="currentUserId" />
    <div class="content" v-for="plant in data" :key="plant.id">
      <div class="left-side">
        <div class="head">
          <div class="user-plant">{{ plant.name }}</div>
          <div class="add-custom">
            <div class="text">Add a custom measurement to your plant</div>
            <div class="add-sign" @click="openModal('measurement', plant.id)">
              <svg
                id="Circle_Button"
                data-name="Circle Button"
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 36 36"
              >
                <rect id="Area" width="36" height="36" rx="18" fill="#fff3c7" />
                <g id="Icon" transform="translate(10.617 10.617)">
                  <rect
                    id="Area-2"
                    data-name="Area"
                    width="15"
                    height="15"
                    transform="translate(0.383 0.383)"
                    fill="#3d7a5d"
                    opacity="0"
                  />
                  <g
                    id="Icon-2"
                    data-name="Icon"
                    transform="translate(3.16 3.16)"
                  >
                    <line
                      id="Line"
                      y2="8.848"
                      transform="translate(4.424)"
                      fill="none"
                      stroke="#0f0e0d"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.667"
                    />
                    <line
                      id="Line-2"
                      data-name="Line"
                      x2="8.848"
                      transform="translate(0 4.424)"
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
        <div class="add-file">
          <div class="upload-icon" @click="uploadFile()">
            <img src="~assets/images/Circle Button.png" alt="upload" />
            <input
              type="file"
              style="display:none;"
              accept=".csv"
              id="choose-file"
            />
          </div>
          <div class="upload-text">
            Upload a CSV file to add data to this plant
          </div>
        </div>
      </div>
      <div class="right-side">
        <div class="table">
          <div class="headers">
            <div class="type" @click="isOpen = !isOpen">
              <div class="type-text">
                {{ currentType }}
              </div>
              <div class="drop">
                <svg
                  id="Icon-drop-graph"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                >
                  <rect
                    id="Area"
                    width="20"
                    height="20"
                    fill="none"
                    opacity="0"
                  />
                  <g id="Icon-2" data-name="Icon" transform="translate(5 7.5)">
                    <path
                      id="Path"
                      d="M5,7.5l5,5,5-5"
                      transform="translate(-5 -7.5)"
                      fill="none"
                      stroke="#000"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.667"
                    />
                  </g>
                </svg>
                <div class="menu" v-if="isOpen">
                  <div
                    class="menu-item"
                    v-for="type in dataTypes"
                    :key="type.id"
                  >
                    <div
                      class="item"
                      @click="changeArray(type, plant.measurements)"
                    >
                      {{ type }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="date">Date</div>
            <div class="delete"></div>
          </div>
          <div class="values">
            <div
              class="measurement"
              v-for="measurement in dataTypeArr"
              :key="measurement.id"
            >
              <div class="type-value">{{ measurement.value }}</div>
              <div class="date-value">{{ measurement.date }}</div>
              <div class="delete">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                >
                  <g id="Icon" transform="translate(-0.067 -0.287)">
                    <rect
                      id="Area"
                      width="20"
                      height="20"
                      transform="translate(0.067 0.287)"
                      fill="none"
                      opacity="0"
                    />
                    <g
                      id="Icon-2"
                      data-name="Icon"
                      transform="translate(2.872 2.201)"
                    >
                      <path
                        id="Path"
                        d="M2.5,5H17.794"
                        transform="translate(-2.5 -1.602)"
                        fill="none"
                        stroke="#fbf7ea"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.667"
                      />
                      <path
                        id="Path-2"
                        data-name="Path"
                        d="M16.062,5.065v11.9a1.7,1.7,0,0,1-1.7,1.7h-8.5a1.7,1.7,0,0,1-1.7-1.7V5.065m2.549,0v-1.7a1.7,1.7,0,0,1,1.7-1.7h3.4a1.7,1.7,0,0,1,1.7,1.7v1.7"
                        transform="translate(-2.467 -1.667)"
                        fill="none"
                        stroke="#fbf7ea"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.667"
                      />
                      <line
                        id="Line"
                        y2="5.098"
                        transform="translate(5.948 7.647)"
                        fill="none"
                        stroke="#fbf7ea"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.667"
                      />
                      <line
                        id="Line-2"
                        data-name="Line"
                        y2="5.098"
                        transform="translate(9.346 7.647)"
                        fill="none"
                        stroke="#fbf7ea"
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
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Measurement from "../Modals/Measurement.vue";
import { getCookie } from "../../static/cookie";

export default {
  components: {
    Measurement
  },
  async created() {
    let apiData = await this.getData();
    this.populate(apiData);
  },
  data() {
    return {
      currentType: "CO2",
      isOpen: false,
      data: [],
      dataTypes: [],
      dataTypeArr: [],
      currentUserId: ""
    };
  },
  methods: {
    uploadFile() {
      let chooseFile = document.getElementById("choose-file");
      let auth = getCookie("auth");
      chooseFile.click();
      chooseFile.onchange = e => {
        const files = chooseFile.files[0];

        const reader = new FileReader();

        reader.onload = async function(e) {
          const text = e.target.result;

          let csvData = text;
          const char = '"';
          csvData = char.concat(csvData);
          csvData = csvData.concat(char);

          console.log(csvData);
          await axios
            .post(
              `https://orangebush.azurewebsites.net/Plant/MyPlant/15`,
              csvData,
              {
                headers: {
                  token: auth,
                  "Content-Type": "application/json-patch+json"
                }
              }
            )
            .then(res => console.log(res.data));
        };

        reader.readAsText(files);
      };
    },

    populate(arr) {
      console.log(arr);

      arr.forEach(element => {
        element.measurements.forEach(measurement => {
          this.dataTypes.push(measurement.measurementDefinition.name);

          if (measurement.measurementDefinition.name === this.dataTypes[0]) {
            let obj = { value: measurement.value, date: measurement.date };
            this.dataTypeArr.push(obj);
          }
        });
      });

      this.dataTypes = [...new Set(this.dataTypes)];
    },

    async getData() {
      let auth = getCookie("auth");
      let id = this.$route.query.id;
      await axios
        .get(
          `https://orangebush.azurewebsites.net/Plant/MyPlant/all?plantId=${id}`,
          {
            headers: {
              token: auth
            }
          }
        )
        .then(res => {
          this.data = res.data;
        });

      return this.data;
    },

    changeArray(type, arr) {
      this.currentType = type;
      this.dataTypeArr = [];
      arr.forEach(element => {
        if (element.measurementDefinition.name === type) {
          this.dataTypeArr.push({
            value: element.value,
            date: element.date
          });
        }
      });
    },
    openModal(modal, id) {
      this.$refs[modal].open();
      this.currentUserId = id;
    }
  }
};
</script>

<style lang="scss" scoped>
.measurements-container {
  ms-overflow-style: none;
  scrollbar-width: none;
  overflow-y: scroll;
  position: inherit;
  // top: inherit;
  // left: inherit;
  &::-webkit-scrollbar {
    display: none;
  }
  /// flex-direction: column;
  width: 915px !important;
  height: 800px !important;
  background: black;
  font-family: "Poppins", sans-serif;
  animation: note-slide 300ms;
}

.content {
  width: 100%;
  height: 245px;
  color: white;
  position: relative;
  display: flex;
  .left-side {
    position: inherit;
    width: 40%;
    height: 100%;
  }

  .right-side {
    width: 60%;
    height: 100%;
  }
}

.add-file {
  display: flex;
  align-items: center;
  position: absolute;
  top: 80%;
  .upload-text {
    color: #3d7a5d;
    width: 70%;
    padding: 0.5rem !important;
  }

  .upload-icon {
    cursor: pointer;
  }
}

.add-custom {
  z-index: 10;
  display: flex;
  // align-items: center;
  position: absolute;
  left: 60%;
  width: 50%;
  top: 0;
  .text {
    width: 50%;
    text-align: center;
    font-size: 0.8rem;
  }
}

.table {
  width: 100%;
  height: 245px;
  overflow-y: scroll;

  .headers {
    display: flex;
    width: 100%;
    .type {
      width: 30%;
      height: 100%;
      background-color: #2b2a28;
      padding: 0.9rem !important;
      color: #fff3c7 !important;
      border-bottom: 1px solid #fff3c7;
      display: flex;
      position: relative;
      .menu {
        height: 120px;
        width: 100% !important;
        position: absolute;
        background-color: #2b2824;
        left: 0;
        overflow-y: scroll;

        .menu-item {
          z-index: 10;
          padding: 0.7rem !important;

          &:hover {
            background-color: #353029;
            cursor: pointer;
          }
        }
      }
    }

    .date {
      background-color: #1f1e1c;
      color: white;
      width: 50% !important ;
      height: 100%;
      padding: 1rem !important;
      border-bottom: 1px solid #e5e5e5;
    }

    .delete {
      background-color: transparent;
      width: 20%;
      height: 100%;
      padding: 1.75rem !important;
      border-bottom: 1px solid #e5e5e5;
    }
  }

  .values {
    color: white;
    width: 100%;

    .measurement {
      display: flex;
      height: 10%;
      border-bottom: 1px solid white;

      .type-value {
        width: 30% !important ;

        padding: 0.7rem !important;
      }

      .date-value {
        width: 50% !important ;

        padding: 0.7rem !important;
      }

      .delete {
        display: flex;
        justify-content: center;
        width: 20%;
        align-items: center;
      }
    }
  }
}
</style>
