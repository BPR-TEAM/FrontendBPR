<template>
  <div class="measurements-container">
    <div class="content">
      <div class="left-side">
        <div class="head">
          <div class="user-plant">User Plant Name</div>
          <div class="add-custom">
            <div class="text">Add a custom measurement to your plant</div>
            <div class="add-sign">
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
            <div class="type">CO2</div>
            <div class="date">Date</div>
            <div class="delete"></div>
          </div>
          <div class="values">
            <div
              class="measurement"
              v-for="measurement in data"
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
export default {
  data() {
    return {
      data: [
        {
          value: 0.2,
          date: "04.03.2021 00:00"
        },
        {
          value: 0.2,
          date: "04.03.2021 00:00"
        },
        {
          value: 0.2,
          date: "04.03.2021 00:00"
        },
        {
          value: 0.2,
          date: "04.03.2021 00:00"
        }
      ]
    };
  },
  methods: {
    uploadFile() {
      let chooseFile = document.getElementById("choose-file");
      let csvData;
      var vm = this;
      let csvToArray = (str, delimiter = ",") => {
        const headers = str.slice(0, str.indexOf("\n")).split(delimiter);

        const rows = str.slice(str.indexOf("\n") + 1).split("\n");

        const arr = rows.map(function(row) {
          const values = row.split(delimiter);
          const el = headers.reduce(function(object, header, index) {
            object[header] = values[index];
            return object;
          }, {});
          return el;
        });

        return arr;
      };
      chooseFile.click();
      chooseFile.onchange = e => {
        const files = chooseFile.files[0];

        const reader = new FileReader();

        reader.onload = function(e) {
          const text = e.target.result;
          const data = csvToArray(text);
          console.log(data);
        };

        reader.readAsText(files);
      };
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
    width: 50%;
    height: 100%;
  }

  .right-side {
    width: 50%;
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
  display: flex;
  // align-items: center;
  position: absolute;
  left: 70%;
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
  .headers {
    display: flex;
    width: 100%;
    .type {
      width: 40%;
      height: 100%;
      background-color: #2b2a28;
      padding: 1rem !important;
      color: #fff3c7 !important;
      border-bottom: 1px solid #fff3c7;
    }

    .date {
      background-color: #1f1e1c;
      color: white;
      width: 40% !important ;
      height: 100%;
      padding: 1rem !important;
      border-bottom: 1px solid #e5e5e5;
    }

    .delete {
      background-color: transparent;
      width: 20%;
      height: 100%;
      padding: 1.75rem;
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
        width: 40% !important ;

        padding: 0.7rem !important;
      }

      .date-value {
        width: 40% !important ;

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
