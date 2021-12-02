<template>
  <div class="dropdown">
    <div class="title" @click="openDropdown()">
      <div>{{ title }}</div>
      <svg
        id="Icon"
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
      >
        <rect id="Area" width="20" height="20" fill="none" opacity="0" />
        <g id="Icon-2" data-name="Icon" transform="translate(5 7.5)">
          <path
            id="Path"
            d="M5,7.5l5,5,5-5"
            transform="translate(-5 -7.5)"
            fill="none"
            stroke="#000"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.667"
          />
        </g>
      </svg>
    </div>

    <!-- <transition name="slide" appear> -->
    <div class="menu" v-if="isOpen">
      <div class="menu-item" v-for="item in items" :key="item.id">
        <div class="item">{{ item.title }}</div>
      </div>
    </div>
    <!-- </transition> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false
    };
  },
  props: ["title", "items"],

  methods: {
    openDropdown() {
      this.isOpen = !this.isOpen;
      let icon = document.getElementById("Icon");
      if (this.isOpen) {
        icon.style.transform = "rotate(180deg)";
      } else {
        icon.style.transform = "rotate(360deg)";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap");
.dropdown {
  font-family: "Poppins", "sans serif";
  width: 200px !important;
  height: 50px;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.title {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 50px;
  border-radius: 28px;
  background: #fff3c7;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  font-weight: 500;
  border: none;
  padding: 0;
  cursor: pointer;

  svg.active {
    transform: rotate(90deg) scaleX(-1);
  }
}

.menu {
  width: 100%;
  position: relative;
  background: #ebe6d7;
  border-radius: 16px;
  bottom: -5%;
  text-align: center;
  left: 50%;
  transform: translateX(-50%);
  animation: fade 100ms ease-out;

  .menu-item {
    padding: 12px;
    cursor: pointer;
    animation: slideItem 300ms ease-out;

    &:hover {
      border-radius: 16px;
      background-color: #998e65;
      transition: background-color 0.4s ease-in;
    }
  }
}

@keyframes fade {
  0% {
    opacity: 0;
  }

  50% {
    opacity: 0.3;
  }

  100% {
    opacity: 1;
  }
}
</style>
