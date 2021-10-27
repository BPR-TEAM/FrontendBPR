<template>
  <div class="container">
    <div class="user-data">
      <div class="header">Profile</div>
      <div class="user">
        <div class="user-container">
          <div class="profile-pic">
            <img src="../assets/images/yoda.jpg" alt="" />
          </div>
          <div class="profile-data">
            <div class="data-item">Mark Robinson</div>
            <div class="data-item">mark.robinson@gmail.com</div>
            <div class="data-item">Democratic Republic of Congo</div>
            <div class="data-item">04/05/1942</div>
          </div>
          <div class="edit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="55"
              height="55"
              viewBox="0 0 55 55"
            >
              <g
                id="Circle_Button"
                data-name="Circle Button"
                transform="translate(0 -0.019)"
              >
                <rect
                  id="Area"
                  width="55"
                  height="55"
                  rx="27.5"
                  transform="translate(0 0.019)"
                  fill="#fff3c7"
                />
                <g id="Icon" transform="translate(16 16)">
                  <rect
                    id="Area-2"
                    data-name="Area"
                    width="23"
                    height="23"
                    transform="translate(0 0.019)"
                    fill="#3d7a5d"
                    opacity="0"
                  />
                  <g
                    id="Icon-2"
                    data-name="Icon"
                    transform="translate(1.638 1.241)"
                  >
                    <path
                      id="Path"
                      d="M10.516,4H3.892A1.892,1.892,0,0,0,2,5.892V19.139a1.892,1.892,0,0,0,1.892,1.892H17.139a1.892,1.892,0,0,0,1.892-1.892V12.516"
                      transform="translate(-2 -1.993)"
                      fill="none"
                      stroke="#3b3b3b"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    />
                    <path
                      id="Path-2"
                      data-name="Path"
                      d="M17.935,2.467a2.007,2.007,0,1,1,2.839,2.839l-8.989,8.989L8,15.241l.946-3.785Z"
                      transform="translate(-2.323 -1.879)"
                      fill="none"
                      stroke="#3b3b3b"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    />
                  </g>
                </g>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "default-with-nav"
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap");
.container {
  position: relative;
}
.user-data {
  font-family: "Poppins", "sans-serif";
  color: white;
  position: absolute;
  top: 150px;
  left: 130px;

  .header {
    font-size: 30px;
    margin-bottom: 62px !important;
  }

  .user {
    width: 100%;
    display: flex;

    .user-container {
      padding: 22px !important;
      width: 555px;
      height: 490px;
      background: #101010;
    }

    .profile-pic {
      width: 250px;
      height: 250px;
      float: right;
    }

    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }

  .edit {
    position: relative;
    top: 50%;
    left: 90%;
  }

  .profile-data {
    position: relative;
    top: 60%;

    .data-item {
      margin-bottom: 8px !important;
      font-size: 18px;
    }
  }
}
</style>
