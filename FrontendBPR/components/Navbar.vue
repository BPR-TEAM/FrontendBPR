<template>
  <div>
    <nav
      ref="navbar"
      class="navbar"
      role="navigation"
      aria-label="Main navigation"
    >
      <div class="links-and-name">
        <div class="website-name">Orange Bush</div>

        <div class="links">
          <nuxt-link class="navbar-item" to="/">Home</nuxt-link>
          <nuxt-link class="navbar-item" to="/">About</nuxt-link>
          <nuxt-link class="navbar-item" to="/plant">Plants</nuxt-link>
        </div>

        <div class="auth-button">
          <button class="interactive-button">Log In</button>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap");
@import "../assets/buttons.scss";
.navbar {
  display: flex;
  min-width: 100%;
  min-height: 80px;
  align-items: center;
  justify-content: center;
  background-color: transparent !important;
  z-index: 999;
  position: absolute !important;
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
      margin: 30px !important;
    }
  }

  .auth-button {
    width: 25%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>