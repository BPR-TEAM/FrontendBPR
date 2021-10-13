<template>
  <div class="index-container">
    <Hero />
  </div>
</template>

<script>
import Hero from "../components/Hero.vue";
export default {
  components: {
    Hero,
  },
  layout: "default-with-nav",
};
</script>

<style lang="scss">
html {
  overflow: scroll;
  overflow-x: hidden;
  scrollbar-width: none;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background: black;
}

::-webkit-scrollbar {
  width: 0; /* Remove scrollbar space */
  background: transparent; /* Optional: just make scrollbar invisible */
}
* {
  margin: 0px !important;
  padding: 0px !important;
}
</style>