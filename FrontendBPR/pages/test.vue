<template>
  <div>
    <NewPlant ref="addplant" />
    <!-- <div class="lets-see" ref="container">
      <input type="text" v-model="tag" class="tag" placeholder="tag" />
      <button class="interactive-button" @click="generate()">Click me</button>
    </div> -->
    <!-- <LoginModal ref="login" />
    <RegistrationModal ref="register" />
    <Note ref="note" />
    <NewPlant ref="addplant" /> -->
    <!-- <Tag /> -->
    <!-- <ProfilePlant /> -->
    <!-- <div class="auth-btn" @click="openLogin('login')">
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
    </div> -->
    <div class="auth-btn" @click="openLogin('addplant')">
      <button class="interactive-button">Add</button>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import LoginModal from "../components/Modals/Login.vue";
import RegistrationModal from "../components/Modals/Register.vue";
import Note from "../components/Modals/Note.vue";
import NewPlant from "../components/Modals/NewPlant.vue";
import Tag from "../components/Tag.vue";
import ProfilePlant from "../components/ProfilePlant.vue";
export default {
  data() {
    return {
      tag: ""
    };
  },
  components: {
    LoginModal,
    RegistrationModal,
    Note,
    NewPlant,
    Tag,
    ProfilePlant
  },
  methods: {
    openLogin(modal) {
      this.$refs[modal].open();
    },

    generate() {
      let ComponentClass = Vue.extend(Tag);
      let instance = new ComponentClass({
        propsData: { text: this.tag }
      });
      instance.$mount();
      this.$refs.container.appendChild(instance.$el);
    }
  }
};
</script>

<style lang="scss">
button {
  border: 1px solid black;

  &:active {
    background-color: red;
  }
}

.tag {
  border: 1px solid black;
}

.lets-see {
  display: flex;
  // flex-direction: column;
}
</style>
