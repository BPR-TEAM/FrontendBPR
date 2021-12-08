<template>
  <div class="index-container">
    <Hero />
  </div>
</template>

<script>
import Hero from "../components/Hero.vue";
export default {
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
