<template>
  <div class="tag-container">
    <div class="sharp-sign">
      <svg
        id="Icon"
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
      >
        <rect id="Area" width="16" height="16" fill="none" opacity="0" />
        <g id="Icon-2" data-name="Icon" transform="translate(4 4)">
          <line
            id="Line"
            x2="10.667"
            transform="translate(-1.333 2)"
            fill="none"
            stroke="#fff"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.333"
          />
          <line
            id="Line-2"
            data-name="Line"
            x2="10.667"
            transform="translate(-1.333 6)"
            fill="none"
            stroke="#fff"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.333"
          />
          <line
            id="Line-3"
            data-name="Line"
            x1="1.333"
            y2="12"
            transform="translate(1.333 -2)"
            fill="none"
            stroke="#fff"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.333"
          />
          <line
            id="Line-4"
            data-name="Line"
            x1="1.333"
            y2="12"
            transform="translate(5.333 -2)"
            fill="none"
            stroke="#fff"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.333"
          />
        </g>
      </svg>
    </div>
    <div class="text">{{ text }}</div>
  </div>
</template>

<script>
export default {
  props: ["text"]
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap");
.tag-container {
  position: absolute;
  display: flex;
  font-family: "Poppins", sans-serif;
  font-size: 13px;
  align-items: center;
  justify-content: center;
  color: white;
  height: 40px !important;
  width: 90px !important;
  // min-width: 3% !important;
  // max-width: 10% !important;
  background: #5d5d5d;
  border: none;

  .sharp-sign {
    position: relative;
    top: 3px;
    right: 5px;
  }

  .text {
    position: relative;
  }
}
</style>
