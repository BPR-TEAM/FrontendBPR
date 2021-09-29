<template>
  <div class="index-container">
      <Hero/>
  </div>
</template>

<script>
import Hero from "../components/Hero.vue";
export default {
  components:{
    Hero
  },
  layout:"default-with-nav"
}
</script>

<style lang="scss">

html {
  overflow: scroll;
  overflow-x: hidden;
  background: url("../assets/images/homepage_background.png") no-repeat center center fixed; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
::-webkit-scrollbar {
  width: 0; /* Remove scrollbar space */
  background: transparent; /* Optional: just make scrollbar invisible */
}
*{
  margin: 0px !important;
  padding: 0px !important;

}

</style>