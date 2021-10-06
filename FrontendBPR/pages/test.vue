<template>
  <div>
    <LoginModal ref="login" />
    <div class="auth-btn" @click="openLogin()">
      <button class="interactive-button">Login</button>
    </div>
  </div>
</template>

<script>
import LoginModal from "../components/Modals/Login.vue";
export default {
  components: {
    LoginModal,
  },
  methods: {
    openLogin() {
      this.$refs["login"].open();
      console.log("clicked");
    },
  },
};
</script>

<style lang="scss">
button {
  border: 1px solid black;

  &:active {
    background-color: red;
  }
}
</style>