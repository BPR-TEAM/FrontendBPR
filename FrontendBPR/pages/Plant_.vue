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
          <div class="tag"><Tag text="Species" /></div>
          <div class="tag"><Tag text="Family" /></div>
          <div class="tag"><Tag text="Family" /></div>

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
      <div class="header">Advice</div>
      <div class="number-of-comm">16 comments</div>
      <div class="advices-container">
        <div v-for="advice in advices" :key="advice.id" class="advice-item">
          <div class="profile">
            <div class="profile-img">
              <img src="../assets/images/yoda.jpg" alt="" />
            </div>
            <div class="profile-data">
              <div class="name">{{ advice.name }}</div>
              <div class="posted">{{ advice.posted }}</div>
            </div>
          </div>
          <div class="description">{{ advice.description }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Tag from "../components/Tag.vue";
import VueSanitize from "vue-sanitize";
import NewPlant from "../components/Modals/NewPlant.vue";

export default {
  components: {
    Tag,
    NewPlant
  },

  mounted() {
    this.getPlant();
  },
  data() {
    return {
      authToken: "",
      plantName: "",
      image: "",
      description: "",
      advices: [
        {
          name: "Name",
          posted: "5 hours ago",
          description:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua"
        },
        {
          name: "Name",
          posted: "5 hours ago",
          description:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero"
        },
        {
          name: "Name",
          posted: "5 hours ago",
          description:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero"
        },
        {
          name: "Name",
          posted: "5 hours ago",
          description:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero"
        },
        {
          name: "Name",
          posted: "5 hours ago",
          description:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero"
        }
      ]
    };
  },
  methods: {
    async getPlant() {
      let paramId = this.$route.query.id;
      await this.$axios
        .get(`https://orangebush.azurewebsites.net/Plant?id=${paramId}`)
        .then(response => {
          this.plantName = response.data.commonName;
          this.description = response.data.description;
          this.image = response.data.image;
        });
    },

    openModal() {
      this.$refs["new-plant"].open();
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
      // position: relative;

      .tag {
        margin-left: 30px !important;
        // margin-right: 65px !important;
      }

      .add-this {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        float: flex-end;
        color: white;
        left: 80%;

        .add-this-button {
          margin-left: 5px !important;
        }
      }
    }
    .img-container {
      width: 700px;
      height: 600px;
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
      top: 5px;
      left: 50px;
    }

    .plant-description {
      height: 80%;
      color: white;
      width: 100%;
      font-family: Arial, Helvetica, sans-serif;
      position: relative;
      font-size: 22px;
      font-weight: 400;
      cursor: default;
      top: 5px;
      left: 50px;
      overflow-y: scroll;
    }
  }

  .advices {
    height: 830px;
    width: 715px;
    border-top: 1px solid #3b3b3b;
    position: absolute;
    top: 1000px;
    left: 40%;
    transform: translateY(0, -50%);

    .header {
      color: #fff3c7;
      text-align: center;
      position: relative;
      top: 10px;
    }

    .number-of-comm {
      color: white;
      position: relative;
      top: 50px;
    }
  }

  .advices-container {
    overflow-y: scroll;
    position: absolute;
    display: flex;
    flex-direction: column;
    top: 150px;
    height: 60%;
  }
  .profile {
    display: flex;
  }
  .advice-item {
    width: 100%;
    height: 35%;
    color: white;
    position: relative;
    display: flex;
    flex-flow: column;
    .profile-img {
      width: 58px;
      height: 58px;
      img {
        border-radius: 50%;
        width: 100%;
        height: 100%;
      }
    }

    .name {
      position: relative;
      left: 20px;
    }
    .posted {
      position: relative;
      left: 20px;
    }
    .description {
      position: relative;
      top: 20px;
    }
  }
}
</style>
