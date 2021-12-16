<template>
  <div class="container">
    <div class="advice-container">
      <div class="advice-text">
        <carousel v-bind="options" ref="carousel">
          <slide v-for="advice in advices" :key="advice.id">
            {{ advice.description }}
          </slide>
        </carousel>
      </div>
      <div class="img-container">
        <img src="~assets/images/advice_plant.png" alt="advice plant" />
      </div>

      <div class="advices">
        <div class="headers">
          <div class="header" @click="changeComponent('AdviceContainer')">
            Featured advices
          </div>
          <div class="header" @click="changeComponent('GeneralAdvices')">
            General advices
          </div>
        </div>
        <component class="component" v-bind:is="component"></component>
      </div>
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
import { getCookie } from "../static/cookie";
import { authenticated } from "../middleware/authenticated.js";
export default {
  middleware: authenticated,
  layout: "default-with-nav",
  components: {
    Carousel,
    Slide
  },
  data() {
    return {
      component: "",
      advices: [],
      options: {
        loop: true,
        perPage: 1,
        paginationEnabled: false
      }
    };
  },

  async fetch() {
    try {
      await this.$axios
        .get("https://orangebush.azurewebsites.net/Advice/default")
        .then(res => (this.advices = res.data));
    } catch (e) {}
  },

  mounted() {
    this.component = () =>
      import(`../components/page-containers/AdviceContainer.vue`);
  },

  methods: {
    changeComponent(name) {
      this.component = () =>
        import(`../components/page-containers/${name}.vue`);
    }
  }
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap");
html {
  margin: 0px !important;
  width: 100% !important;
}
@keyframes drop {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0);
  }
}
.container {
  font-family: "Poppins", "sans serif";
  display: flex;
  flex-flow: column;
  width: 100% !important;
  position: relative;
  animation: drop 500ms;
}

.advice-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 890px;
  height: 445px;
  background: #1f1e1c;
  margin: auto !important;
  position: relative;
  top: 10vh;
  left: 2vw;
  margin-top: 10px !important;
  float: center;

  font-size: 24px;

  .advice-text {
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    overflow: hidden !important;
    overflow-y: scroll !important;
    width: 350px !important;
    height: 350px !important;
  }

  .img-container {
    width: 415px;
    height: 420px;
    position: relative;
    left: 50px;
    img {
      width: 100%;
      height: 100%;
    }
  }
}

.advices {
  height: 830px;
  width: 715px;
  border-top: 1px solid #3b3b3b;
  position: absolute;
  top: 80vh;
  // left: 35vw;
  left: 10vw;

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
</style>
