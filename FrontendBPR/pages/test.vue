<template>
  <div>
    <LoginModal ref="login" />
    <RegistrationModal ref="register" />
    <Note ref="note" />
    <NewPlant ref="addplant" />
    <Tag />
    <div class="auth-btn" @click="openLogin('login')">
      <button class="interactive-button">Login</button>
    </div>
    <div class="auth-btn" @click="openLogin('register')">
      <button class="interactive-button">Register</button>
    </div>
    <div class="auth-btn" @click="openLogin('note')">
      <button class="interactive-button">Note</button>
    </div>
    <div class="auth-btn" @click="openLogin('addplant')">
      <button class="interactive-button">Add</button>
    </div>
  </div>
</template>

<script>
import LoginModal from "../components/Modals/Login.vue";
import RegistrationModal from "../components/Modals/Register.vue";
import Note from "../components/Modals/Note.vue";
import NewPlant from "../components/Modals/NewPlant.vue";
import Tag from "../components/Tag.vue";
export default {
  components: {
    LoginModal,
    RegistrationModal,
    Note,
    NewPlant,
    Tag,
  },
  methods: {
    openLogin(modal) {
      this.$refs[modal].open();
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