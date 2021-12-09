<template>
  <div class="container">
    <div class="note" v-for="note in notes" :key="note.id">
      <div class="date">{{ note.date }}</div>
      <div class="note-container">
        <div class="text">{{ note.noteText }}</div>
        <div class="edit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 48 48"
          >
            <g
              id="Circle_Button"
              data-name="Circle Button"
              transform="translate(34 35)"
            >
              <g
                id="Circle_Button-2"
                data-name="Circle Button"
                transform="translate(-34 -35)"
              >
                <rect id="Area" width="48" height="48" rx="24" fill="#fff3c7" />
                <g id="Icon" transform="translate(14 14)">
                  <rect
                    id="Area-2"
                    data-name="Area"
                    width="20"
                    height="20"
                    fill="#fff3c7"
                    opacity="0"
                  />
                  <g
                    id="Icon-2"
                    data-name="Icon"
                    transform="translate(1.29 2.499)"
                  >
                    <path
                      id="Path"
                      d="M9.167,3.333H3.333A1.667,1.667,0,0,0,1.667,5V16.667a1.666,1.666,0,0,0,1.666,1.666H15a1.667,1.667,0,0,0,1.667-1.666V10.833"
                      transform="translate(-1.29 -2.499)"
                      fill="#fff3c7"
                      stroke="#0f0e0d"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.667"
                    />
                    <path
                      id="Path-2"
                      data-name="Path"
                      d="M15.417,2.083a1.768,1.768,0,1,1,2.5,2.5L10,12.5l-3.333.833L7.5,10Z"
                      transform="translate(-1.29 -2.499)"
                      fill="#fff3c7"
                      stroke="#0f0e0d"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.667"
                    />
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      notes: [
        {
          noteText:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem",
          date: "04/04/1997"
        },
        {
          noteText:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem",
          date: "04/04/1997"
        },
        {
          noteText:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem",
          date: "04/04/1997"
        },
        {
          noteText:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Loremod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Loremod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Loremod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Loremod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem",
          date: "04/04/1997"
        }
      ]
    };
  },

  methods: {
    openNote() {
      this.$refs["note"].open();
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  ms-overflow-style: none;
  scrollbar-width: none;
  overflow-y: scroll;
  position: absolute;

  &::-webkit-scrollbar {
    display: none;
  }
  /// flex-direction: column;
  width: 715px !important;
  height: 800px !important;
  background: black;
  font-family: "Poppins", sans-serif;
  animation: note-slide 300ms;
}

.note {
  align-self: center;
}
.note-container {
  padding: 32px !important;
  width: 100%;
  margin-bottom: 25px !important;
  border-radius: 12px;
  height: 30%;
  background: #4a4a4a;
  position: relative;
  display: flex;
  .text {
    font-size: 20px;
    color: white;
    padding: 22px !important;
  }

  .edit {
    position: absolute;
    margin: 0 10px 0 20px !important;
    bottom: 0;
    right: 0;
  }
}

.date {
  color: white;
  z-index: 999;
}

.add-new {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  float: flex-end;
  color: white;
  left: 35%;

  .add-button {
    margin-left: 5px !important;
  }
}

@keyframes note-slide {
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  50% {
    opacity: 0.3;
  }
  100% {
    transform: translateX(-0);
  }
}
</style>
