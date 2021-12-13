<template>
  <div class="dashboard-container">
    <NewDashboard ref="newDashboard" :plants="plants" />
    <div class="title">
      <div class="header">Dashboards</div>
      <div class="subheaeder">
        Group your plants and have a full overview over them
      </div>
      <div class="add-dashboard">
        <div class="add-text">Add new dashboard</div>
        <div class="add-sign" @click="openModal()">
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

    <div class="dashboards">
      <div
        class="dashboard-item"
        v-for="dashboard in dashboards"
        :key="dashboard.name"
      >
        <div class="overlay">
          <nuxt-link
            class="overlay-link"
            :to="`/PlantDashboard?id=` + dashboard.id"
          ></nuxt-link>
        </div>
        <div class="content-container">
          <Tag class="dashboard-name" :text="dashboard.name" />
          <div class="dashboard-description">{{ dashboard.description }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getCookie } from "../static/cookie.js";
import NewDashboard from "../components/Modals/NewDashboard.vue";
import Tag from "../components/Tag.vue";
export default {
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

    await this.$axios
      .get("https://orangebush.azurewebsites.net/Dashboard/all", {
        headers: {
          token: authToken
        }
      })
      .then(res => {
        this.dashboards = res.data;
        console.log(res);
      });
  },
  data() {
    return {
      plants: [],
      dashboards: []
    };
  },
  components: {
    Tag,
    NewDashboard
  },
  layout: "default-with-nav",
  methods: {
    openModal() {
      this.$refs.newDashboard.open();
    }
  }
};
</script>

<style lang="scss" scoped>
.dashboard-container {
  color: white;
  position: relative;
  left: 5vw;
  height: 100vh;
  animation: drop 500ms;
}

.title {
  position: absolute;
  top: 15vh;
  .header {
    font-size: 3rem;
  }

  .subheader {
    font-size: 1.6rem;
  }
}

.dashboards {
  position: absolute;
  top: 30vh;
  width: 90%;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  // flex-wrap: wrap-reverse;
  padding-right: 10px !important;
  // margin-right: -12px !important;

  .content-container {
    padding: 12px !important;
  }
  .dashboard-item {
    flex: 1 1 25%;
    margin: 0 50px 30px 0 !important;
    width: 340px !important;
    height: 230px !important;
    background-color: #1f1e1c;
    position: relative;

    .dashboard-description {
      position: absolute;
      left: 15px;
    }

    .overlay {
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: black;
      opacity: 0.1;
      z-index: 3;
      transition: 0.5s;
      .overlay-link {
        width: 100%;
        height: 100%;
        position: absolute;
      }
      &:hover {
        transition: 0.5s;
        opacity: 0.4;
        background-color: rgba(0, 0, 0, 1);
      }
    }
  }
}

.add-dashboard {
  display: flex;
  align-items: center;
  position: absolute;
  left: 75vw;
  width: 100%;
  top: 0;
  .add-sign {
    margin: 0 0 0 1rem !important;
    cursor: pointer;
  }
}

@keyframes drop {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
