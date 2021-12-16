<template>
  <div class="my-container">
    <div class="tag-wrap-container">
      <div class="tag-content" v-for="tag in tags" :key="tag.id">
        <Tag class="tag" :text="tag.name" />
      </div>
    </div>
    <div class="plant-details">
      <div class="plant-image">
        <img
          v-if="image === '' || image === null"
          src="../assets/images/advice_plant.png"
          alt="myplant"
        />
        <img v-else :src="'data:image/png;base64,' + image" alt="myplant" />
      </div>
      <div class="names">
        <div class="given-name">{{ name }}</div>
        <div class="plant-name">{{ commonName }}</div>
      </div>
      <div class="delete" @click="deletePlant(plant)">
        <svg
          id="Circle_Button"
          data-name="Circle Button"
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 48 48"
        >
          <rect id="Area" width="48" height="48" rx="24" fill="#ffc7c7" />
          <g id="Icon" transform="translate(14 14)">
            <rect
              id="Area-2"
              data-name="Area"
              width="20"
              height="20"
              fill="#3d7a5d"
              opacity="0"
            />
            <g id="Icon-2" data-name="Icon" transform="translate(1.29 2.499)">
              <path
                id="Path"
                d="M2.5,5h15"
                transform="translate(-1.29 -2.499)"
                fill="none"
                stroke="#0f0e0d"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.667"
              />
              <path
                id="Path-2"
                data-name="Path"
                d="M15.833,5V16.667a1.666,1.666,0,0,1-1.666,1.666H5.833a1.666,1.666,0,0,1-1.666-1.666V5m2.5,0V3.333A1.666,1.666,0,0,1,8.333,1.667h3.334a1.666,1.666,0,0,1,1.666,1.666V5"
                transform="translate(-1.29 -2.499)"
                fill="none"
                stroke="#0f0e0d"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.667"
              />
              <line
                id="Line"
                y2="5"
                transform="translate(7.043 6.668)"
                fill="none"
                stroke="#0f0e0d"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.667"
              />
              <line
                id="Line-2"
                data-name="Line"
                y2="5"
                transform="translate(10.377 6.668)"
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
</template>

<script>
import Tag from "../components/Tag.vue";
import { getCookie } from "../static/cookie";
export default {
  props: ["name", "commonName", "image", "plant", "tags"],
  components: {
    Tag
  },

  methods: {
    async deletePlant(plant) {
      let auth = getCookie("auth");

      try {
        await this.$axios
          .delete(
            `https://orangebush.azurewebsites.net/Plant/Myplant?userPlantId=${plant.id}`,
            { headers: { token: auth } }
          )
          .then(res => console.log(res.data));
      } catch (e) {}
    }
  }
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap");
.my-container {
  display: flex;
  position: relative;
  width: 320px !important;
  height: 277px !important;

  font-family: "Poppins", "sans serif";
  color: white;

  .plant-details {
    position: absolute;
    display: flex;
    // justify-content: center;
    flex-direction: column;
    align-items: center;

    width: 277px;
    height: 277px;
    background: #1f1e1c;

    .plant-image {
      position: relative;
      top: 25px;
      width: 185px;
      height: 137px;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  .names {
    position: relative;
    top: 50px;
  }

  .delete {
    position: relative;
    top: 35px;
    left: 140px;
    cursor: pointer;
  }
}
.tag-wrap-container {
  position: absolute;
  left: 80%;
  height: 80%;
  width: 50%;
  z-index: 999;

  // display: block;
  // flex-direction: column;
  overflow-y: scroll;

  .tag {
    margin-bottom: 10px !important;
  }

  .tag-content {
    height: 20%;
    margin: 0 0 0.4rem 0 !important;
  }
}
</style>
