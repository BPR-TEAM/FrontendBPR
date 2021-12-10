<template>
  <div class="index-container">
    <Hero />
  </div>
</template>

<script>
import Hero from "../components/Hero.vue";
export default {
  data() {
    return {
      title: "Orange bush"
    };
  },
  head() {
    return {
      title: this.title
      // meta: [
      //   // hid is used as unique identifier. Do not use `vmid` for it as it will not work
      //   {
      //     hid: "description",
      //     name: "description",
      //     content: "My custom description"
      //   }
      // ]
    };
  },
  components: {
    Hero
  },
  layout: "default-with-nav"
};
</script>

<style lang="scss">
* {
  margin: 0px !important;
  padding: 0px !important;
}

.index-container {
  height: 100vh;
  width: 100%;
}
</style>
