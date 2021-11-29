<template>
  <div class="container">
    <div class="number-of-comments">{{ advices.length }} Comments</div>
    <div v-for="advice in advices" :key="advice.id" class="advice-item">
      <div class="profile">
        <div class="profile-img">
          <img src="~assets/images/yoda.jpg" alt="" />
        </div>
        <div class="profile-data">
          <div class="name">{{ advice.name }}</div>
          <div class="posted">{{ advice.posted }}</div>
        </div>
      </div>
      <div class="description">{{ advice.description }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
  }
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap");
.container {
  ms-overflow-style: none;
  scrollbar-width: none;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  width: 715px;
  height: 800px;
  background: black;
  font-family: "Poppins", sans-serif;
}

.number-of-comments {
  color: #fbf7ea;
  padding: 22px !important;
}

.advice-item {
  width: 100%;
  margin-bottom: 10px !important;
  color: #fbf7ea;
  position: relative;
  display: flex;
  padding: 22px !important;
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
  .profile {
    display: flex;
    margin-bottom: 10px !important;
  }
  .name {
    position: relative;
    left: 20px;
  }
  .posted {
    position: relative;
    left: 20px;
  }
}
</style>
