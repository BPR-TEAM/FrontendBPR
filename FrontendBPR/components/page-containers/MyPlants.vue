<template>
  <div class="container">
    <div class="myplants-container">
      <div class="myplant" v-for="tag in tags" :key="tag.id">
        <ProfilePlant />
      </div>
    </div>
  </div>
</template>

<script>
import ProfilePlant from "../ProfilePlant.vue";
export default {
  components: {
    ProfilePlant
  },
  data() {
    return {
      tags: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    };
  }
};
</script>

<style lang="scss" scoped>
.container {
  ms-overflow-style: none;
  scrollbar-width: none;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
  /// flex-direction: column;
  position: inherit;
  left: inherit;

  background: black;
  font-family: "Poppins", sans-serif;
  animation: from-above 300ms;
}

.myplants-container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  // position: relative;
  // left: 8%;

  .myplant {
    flex: 0 0 33.333333%;
    width: 320px;
    height: 277px;
    margin-bottom: 50px !important;
  }
}

@keyframes from-above {
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }

  50% {
    opacity: 0;
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
