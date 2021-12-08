<template>
  <div>
    <LoginModal ref="login" />
    <RegisterModal ref="register" />
    <div
      ref="navbar"
      class="navbar"
      role="navigation"
      aria-label="Main navigation"
    >
      <div class="hamburger" @click="openMenu()">
        <span class="line"></span>
        <span class="line"></span>
        <span class="line"></span>
      </div>
      <div class="links-and-name">
        <div class="website-name">Orange Bush</div>

        <div class="links">
          <nuxt-link class="nav-item" to="/">Home</nuxt-link>
          <nuxt-link class="nav-item" to="/">About</nuxt-link>
          <nuxt-link class="nav-item" to="/profile">Profile</nuxt-link>
          <nuxt-link class="nav-item" to="/advice">Advices</nuxt-link>
          <nuxt-link class="nav-item" to="/dashboards">Dashboard</nuxt-link>
        </div>
      </div>
      <div class="authentication">
        <div class="auth-button">
          <button class="interactive-button" @click="openModal('login')">
            Log In
          </button>
        </div>
        <div class="auth-button">
          <button class="interactive-button" @click="openModal('register')">
            Register
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LoginModal from "../components/Modals/Login.vue";
import RegisterModal from "../components/Modals/Register.vue";
export default {
  components: {
    LoginModal,
    RegisterModal
  },
  methods: {
    openModal(modal) {
      this.$refs[modal].open();
    },
    openMenu() {
      const navbarLinks = document.getElementsByClassName("links")[0];
      const hamburgerLines = document.getElementsByClassName("line");
      const navbarItems = document.getElementsByClassName("nav-item");
      // const overlay = document.getElementsByClassName("mobile-overlay")[0];

      navbarLinks.classList.toggle("active");
      // overlay.classList.toggle("active");
      navbarItems.forEach(navbarItem => {
        navbarItem.classList.toggle("active");
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap");
@import "../assets/buttons.scss";
@import "../node_modules/bulma/sass/utilities/mixins.sass";
.navbar {
  display: flex;
  width: 100%;
  height: 80px;
  align-items: center;
  justify-content: center;
  background-color: transparent !important;
  z-index: 3 !important;
  position: absolute !important;
  animation: fade 900ms ease-out;
}

.links-and-name {
  width: 100%;
  display: flex;

  .website-name {
    width: 25%;
    font-family: "Poppins", sans-serif;
    font-size: 16px;
    color: #fbf7ea;
    text-align: center;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .links {
    width: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    .nav-item {
      font-size: 16px;
      color: #fbf7ea;
      font-weight: 500;
      font-family: "Poppins", sans-serif;
      text-decoration: none;
      margin: 30px !important;
    }
  }
}
.authentication {
  display: flex;
  position: relative;
  right: 10px;
  width: 10vw;
  z-index: 99;
  .auth-button {
    width: 50%;
    display: flex;
    margin-right: 10px !important;
    justify-content: center;
    align-items: center;
  }
  @include until($tablet) {
    .auth-button {
      width: 80px !important;
      height: 30px !important;
      margin-bottom: 12px !important;
    }
    position: absolute;
    display: block;
    top: 12vh;
    left: 10vw;
  }
}

@keyframes fade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

//TODO:MOBILE VERSION

.hamburger {
  position: absolute;
  // top: 0.75rem;
  right: 1rem;
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 21px;
  .line {
    height: 3px;
    width: 100%;
    background-color: #fbf7ea;
    border-radius: 10px !important;
  }
}

.navbar {
  @include until($tablet) {
    flex-direction: column;
    display: flex;
    width: 100vw;
    height: 80px;
    align-items: center;
    justify-content: center;
    background-color: transparent !important;
    z-index: 3 !important;
    position: absolute !important;
    animation: fade 900ms ease-out;
    .hamburger {
      display: flex;
    }
    .links-and-name {
      height: 10vh !important;
    }
    .links {
      width: 20vh;
      visibility: hidden;
      pointer-events: none;
      flex-direction: column;
      align-items: flex-end !important;

      position: absolute;
      top: 10vh;
      // left: 30vw;
      right: 5vw;
      .active {
        visibility: visible;
        pointer-events: all;
      }

      .nav-item {
        // justify-content: flex-end;
        margin: 0.4rem 0 0 0 !important;
        // width: 10%;
        height: 20px;
      }
    }

    .website-name {
      width: 50% !important;
      position: absolute;
      top: 5vh;
    }
  }
}
</style>
