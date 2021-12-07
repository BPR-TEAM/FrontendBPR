<template>
  <div class="dashboard-container">
    <div class="title">
      <div class="header">Dashboards</div>
      <div class="subheaeder">
        Group your plants and have a full overview over them
      </div>
    </div>

    <div class="dashboards">
      <div
        class="dashboard-item"
        v-for="dashboard in dashboards"
        :key="dashboard.name"
      >
        <Tag :text="dashboard.name" />
        <div class="dashboard-description">{{ dashboard.description }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import Tag from "../components/Tag.vue";
export default {
  data() {
    return {
      dashboards: [
        {
          name: "Name of the dashboard",
          description: "Description given by the person"
        },
        {
          name: "Name of the dashboard",
          description: "Description given by the person"
        },
        {
          name: "Name of the dashboard",
          description: "Description given by the person"
        },
        {
          name: "Name of the dashboard",
          description: "Description given by the person"
        },
        {
          name: "Name of the dashboard",
          description: "Description given by the person"
        },
        {
          name: "Name of the dashboard",
          description: "Description given by the person"
        }
      ]
    };
  },
  components: {
    Tag
  },
  layout: "default-with-nav"
};
</script>

<style lang="scss" scoped>
.dashboard-container {
  color: white;
  position: relative;
  left: 5vw;
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

  .dashboard-item {
    padding: 12px !important;
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
  }
}
</style>
