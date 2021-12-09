<template>
  <div class="container">
    <div class="number-of-comments">{{ advices.length }} Comments</div>
    <div class="add-advice-container">
      <textarea
        id="note"
        class="note-field"
        name="note"
        rows="100"
        cols="85"
        placeholder="Write an advice for other users..."
      />
      <div class="submit interactive-button">Submit</div>
    </div>
    <div v-for="advice in advices" :key="advice.id" class="advice-item">
      <div class="profile">
        <div class="profile-img">
          <img src="~assets/images/new-plant-placeholder.png" alt="" />
        </div>
        <div class="profile-data">
          <div class="name">{{ advice.name }}</div>
          <div class="posted">{{ advice.posted }}</div>
        </div>
      </div>
      <div class="description">{{ advice.description }}</div>
      <div class="rating-container">
        <div class="upvotes">
          <div class="up-sign">
            <svg
              id="Icon_"
              data-name="Icon "
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
            >
              <rect
                id="Area_ICON:feather_heart_SIZE:MEDIUM_STYLE:STYLE1_"
                data-name="Area [ICON:feather/heart][SIZE:MEDIUM][STYLE:STYLE1]"
                width="20"
                height="20"
                fill="#fcfcfc"
                opacity="0"
              />
              <g id="Icon" transform="translate(-1 -1)">
                <circle
                  id="Path"
                  cx="8.333"
                  cy="8.333"
                  r="8.333"
                  transform="translate(2.667 2.667)"
                  fill="none"
                  stroke="#fbf7ea"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.667"
                />
                <path
                  id="Path-2"
                  data-name="Path"
                  d="M13.333,10,10,6.667,6.667,10"
                  transform="translate(1 1)"
                  fill="none"
                  stroke="#fbf7ea"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.667"
                />
                <line
                  id="Line"
                  y1="6.667"
                  transform="translate(11 7.667)"
                  fill="none"
                  stroke="#fbf7ea"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.667"
                />
              </g>
            </svg>
          </div>
          <div>{{ advice.noUpvotes }}</div>
        </div>
        <div class="downvotes">
          <div class="down-sign">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18.333"
              height="18.333"
              viewBox="0 0 18.333 18.333"
            >
              <g id="Icon" transform="translate(-1.833 -1.833)">
                <circle
                  id="Path"
                  cx="8.333"
                  cy="8.333"
                  r="8.333"
                  transform="translate(2.667 2.667)"
                  fill="none"
                  stroke="#fbf7ea"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.667"
                />
                <path
                  id="Path-2"
                  data-name="Path"
                  d="M6.667,10,10,13.333,13.333,10"
                  transform="translate(1 1)"
                  fill="none"
                  stroke="#fbf7ea"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.667"
                />
                <line
                  id="Line"
                  y2="6.667"
                  transform="translate(11 7.667)"
                  fill="none"
                  stroke="#fbf7ea"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.667"
                />
              </g>
            </svg>
          </div>
          <div>{{ advice.noDownvotes }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      advices: [
        {
          name: "Name",
          posted: "5 hours ago",
          description:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua",
          noUpvotes: 16,
          noDownvotes: 12
        },
        {
          name: "Name",
          posted: "5 hours ago",
          description:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero",
          noUpvotes: 16,
          noDownvotes: 12
        },
        {
          name: "Name",
          posted: "5 hours ago",
          description:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero",
          noUpvotes: 16,
          noDownvotes: 12
        },
        {
          name: "Name",
          posted: "5 hours ago",
          description:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero",
          noUpvotes: 16,
          noDownvotes: 12
        },
        {
          name: "Name",
          posted: "5 hours ago",
          description:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero",
          noUpvotes: 16,
          noDownvotes: 12
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap");
@import "./assets/buttons.scss";
.container {
  ms-overflow-style: none;
  scrollbar-width: none;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  width: 715px;
  height: 800px;
  background: black;
  font-family: "Poppins", sans-serif;
  animation: advice-slide 300ms;
}

.add-advice-container {
  width: 100%;

  .note-field {
    height: 260px;
    // width: 100% !important;
    border: none;
    text-align: left;
    // padding-right: 22px;
    background: white;
    outline: none !important;
    position: relative;

    resize: none;
  }

  .submit {
    width: 144px;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    left: 75%;
    z-index: 10;
  }
}

.number-of-comments {
  color: #fbf7ea;
  padding: 22px !important;
}

.advice-item {
  width: 100%;
  margin-bottom: 10px !important;
  color: #fbf7ea;
  position: relative;
  display: flex;
  padding: 22px !important;
  flex-flow: column;
  .profile-img {
    width: 58px;
    height: 58px;
    img {
      border-radius: 50%;
      width: 100%;
      height: 100%;
    }
  }
  .profile {
    display: flex;
    margin-bottom: 10px !important;
  }
  .name {
    position: relative;
    left: 20px;
  }
  .posted {
    position: relative;
    left: 20px;
  }
}

.rating-container {
  width: 100%;
  position: relative;
  display: flex !important;
  align-items: flex-end;
  justify-content: flex-end;
  margin: 20px 0 0 0 !important;
}
.upvotes,
.downvotes {
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  // padding: 10px;

  .up-sign,
  .down-sign {
    padding: 4px 18px 4px 4px !important;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.upvotes {
  margin: 0 50px 0 0 !important;
}

@keyframes advice-slide {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
