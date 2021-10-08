<template>
  <div>
    <!-- <LoginModal ref="login" /> -->
    <!-- <RegistrationModal ref="register" /> -->
    <!-- <Note ref="note" /> -->
    <NewPlant ref="addplant" />
    <div class="auth-btn" @click="openLogin()">
      <button class="interactive-button">Login</button>
    </div>
  </div>
</template>

<script>
import LoginModal from "../components/Modals/Login.vue";
import RegistrationModal from "../components/Modals/Register.vue";
import Note from "../components/Modals/Note.vue";
import NewPlant from "../components/Modals/NewPlant.vue";
export default {
  components: {
    LoginModal,
    RegistrationModal,
    Note,
    NewPlant,
  },
  methods: {
    openLogin() {
      this.$refs["addplant"].open();
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