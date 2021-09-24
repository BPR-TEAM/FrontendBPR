<template>
<div>
  <client-only>
      <Navbar/>
      <nuxt/>
  </client-only>
</div>
</template>

<script>
import Navbar from "../components/Navbar.vue"
export default {
    components: {
        Navbar
    }
}
</script>

<style scoped>

</style>