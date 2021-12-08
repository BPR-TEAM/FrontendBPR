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
          <!-- <nuxt-link class="navbar-item login" to="/">Login</nuxt-link> -->
          <nuxt-link class="navbar-item" to="/">Home</nuxt-link>
          <nuxt-link class="navbar-item" to="/">About</nuxt-link>
          <nuxt-link class="navbar-item" to="/profile">Profile</nuxt-link>
          <nuxt-link class="navbar-item" to="/advice">Advices</nuxt-link>
          <nuxt-link class="navbar-item" to="/dashboards">Dashboard</nuxt-link>
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
      const navbarItems = document.getElementsByClassName("navbar-item");
      const overlay = document.getElementsByClassName("mobile-overlay")[0];

      navbarLinks.classList.toggle("active");
      overlay.classList.toggle("active");

      hamburgerLines.forEach(line => {
        line.classList.toggle("active");
      });

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

    .navbar-item {
      font-size: 16px;
      color: #fbf7ea;
      font-weight: 500;
      font-family: "Poppins", sans-serif;
      text-decoration: none;
    }

    .login {
      // visibility: hidden;
      display: none;
    }
  }
}
.authentication {
  display: flex;
  position: relative;
  right: 10px;
  width: 300px;
  .auth-button {
    width: 50%;
    display: flex;
    margin-right: 10px !important;
    justify-content: center;
    align-items: center;
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

@media (max-width: 400px) {
  .navbar {
    display: flex;
    width: 100vw;
    height: 80px;
    align-items: flex-start;
    justify-content: center;
    background-color: transparent !important;
    z-index: 3 !important;
    position: absolute !important;
    animation: fade 900ms ease-out;
    flex-direction: column;
  }

  .hamburger {
    display: flex;
  }

  .links {
    // display: none !important;
    width: 100%;
    display: none;
    flex-direction: column;
    // justify-content: flex-end;
    align-items: flex-end !important;
    position: relative;
    top: 15vh;
    right: 1rem;

    .navbar-item {
      display: none;
      justify-content: flex-end;
      margin: 0.4rem 0 0 0 !important;
      width: 100%;
      height: 20px;

      .active {
        display: flex;
      }
    }

    .active {
      display: flex;
    }
    .login {
      display: flex !important;
    }
  }

  .website-name {
    width: 100% !important;
  }
}

@media (min-width: 1000px) {
  .links {
    .navbar-item {
      padding: 30px !important;
    }
  }
}
</style>
