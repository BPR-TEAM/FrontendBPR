<template>
  <div class="tag-container">
    <div class="tag-content">
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
  background: #5d5d5d;
  height: 40px !important;
  display: inline-block;
  padding: 12px !important;
  margin: 4px !important;
}
.tag-content {
  display: flex !important;
  font-family: "Poppins", sans-serif;
  font-size: 13px;
  align-items: center;
  justify-content: center;
  color: white;
  border: none;
  .sharp-sign {
    position: relative;
    top: 3px;
    right: 5px;
  }
}
</style>
