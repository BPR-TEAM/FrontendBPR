<template>
  <div class="container">
    <div class="number-of-comments">{{ advices.length }} Comments</div>
    <div class="add-advice-container">
      <textarea
        v-if="route !== '/advice'"
        id="note"
        class="note-field"
        name="note"
        rows="100"
        cols="85"
        placeholder="Write an advice for other users..."
        v-model="adviceText"
      />
      <div
        class="submit interactive-button"
        @click="submitAdvice()"
        v-if="route !== '/advice'"
      >
        Submit
      </div>
    </div>
    <div v-for="advice in advices" :key="advice.id" class="advice-item">
      <div class="profile">
        <div class="profile-img">
          <img
            v-if="advice.creatorImage === ''"
            src="~assets/images/new-plant-placeholder.png"
          />
          <img v-else :src="`data:image;base64,` + advice.creatorImage" />
        </div>
        <div class="profile-data">
          <div class="tag-and-name">
            <div class="name">{{ advice.creatorName }}</div>
            <div class="tag" v-if="route === '/advice'">
              <Tag :text="advice.tag.name" />
            </div>
          </div>
          <div class="posted">{{ advice.posted }}</div>
        </div>
      </div>
      <div class="description">{{ advice.description }}</div>
      <div class="rating-container">
        <div class="upvotes">
          <div class="up-sign" @click="like(advice)">
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
          <div>{{ advice.likes }}</div>
        </div>
        <div class="downvotes">
          <div class="down-sign" @click="dislike(advice)">
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
          <div>{{ advice.dislikes }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getCookie } from "../../static/cookie.js";
import Tag from "../Tag.vue";
export default {
  components: {
    Tag
  },
  async fetch() {
    let userToken = getCookie("auth");
    let paramId = this.$route.query.id;
    let route = $nuxt.$route.path;
    if (route !== "/advice") {
      await this.$axios
        .get(`https://orangebush.azurewebsites.net/Plant?id=${paramId}`)
        .then(response => {
          this.plant = response.data;
          console.log(`${response.status} ${response.statusText}`);
        });

      try {
        await this.$axios
          .get(
            `https://orangebush.azurewebsites.net/Advice?plantId=${paramId}`,
            {
              headers: {
                token: userToken
              }
            }
          )
          .then(res => {
            this.advices = res.data;
            console.log(res);
          });
      } catch (e) {}
    } else {
      try {
        await this.$axios
          .get("https://orangebush.azurewebsites.net/Advice/featured", {
            headers: {
              token: userToken
            }
          })
          .then(res => {
            this.advices = res.data;
            console.log(res);
          });
      } catch (e) {}
    }
  },
  data() {
    return {
      advices: [],
      adviceText: "",
      plantTags: [],
      plant: "",
      route: ""
    };
  },

  mounted() {
    this.route = $nuxt.$route.path;
  },

  methods: {
    async submitAdvice() {
      console.log(this.adviceText);
      let plantId = this.$route.query.id;

      let userToken = getCookie("auth");

      let req = {
        description: this.adviceText,
        tagId: this.plant.tags[0].id
      };
      try {
        await this.$axios
          .post(
            `http://orangebush.azurewebsites.net/Advice?plantId=${plantId}`,
            req,
            {
              headers: {
                token: userToken
              }
            }
          )
          .then(res => console.log(res));
      } catch (e) {}
    },

    async like(advice) {
      let userToken = getCookie("auth");
      let vote = 1;
      console.log(userToken);

      try {
        await this.$axios
          .put(
            `https://orangebush.azurewebsites.net/Advice?adviceId=${advice.id}&vote=${vote}`,
            [],
            { headers: { token: userToken } }
          )
          .then(res => {
            console.log(res.data);

            if (res.data === "UserAdvice added") {
              advice.likes++;
            } else if (res.data === "UserAdvice removed") {
              advice.likes--;
            } else if (res.data === "UserAdvice type updated") {
              advice.likes++;
              advice.dislikes--;
            }
          });
      } catch (e) {
        console.log(e);
      }
    },
    async dislike(advice) {
      let userToken = getCookie("auth");
      let vote = 0;
      console.log(userToken);
      try {
        await this.$axios
          .put(
            `https://orangebush.azurewebsites.net/Advice?adviceId=${advice.id}&vote=${vote}`,
            [],
            {
              headers: {
                token: userToken
              }
            }
          )
          .then(res => {
            console.log(res.data);
            if (res.data === "UserAdvice added") {
              advice.dislikes++;
            } else if (res.data === "UserAdvice removed") {
              advice.dislikes--;
            } else if (res.data === "UserAdvice type updated") {
              advice.dislikes++;
              advice.likes--;
            }
          });
      } catch (e) {}
    }
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
    cursor: pointer;
    margin-bottom: 1rem !important;
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
  .tag-and-name {
    display: flex;
  }
  .tag {
    margin-left: 2rem !important;
    position: absolute;
    left: 30%;
  }
  .profile {
    display: flex;
    margin-bottom: 10px !important;
    // justify-content: center;
    align-items: center;
  }
  .name {
    position: relative;
    left: 20px;
  }
  .posted {
    position: relative;
    left: 20px;
  }

  .description {
    // justify-content: center;
    padding: 0.5rem !important;
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
    cursor: pointer;
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
